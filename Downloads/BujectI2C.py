import time
import json
import sys
sys.path.append('lib')
import lib.quick2wire.i2c as i2c
from buject.Buject import Buject


class BujectI2C(Buject):

    def incoming_request_transaction(self, message):
        # array[tuple(write/read/wait, address, register, bytes)]
        data = json.loads(message['data'])
        result = []
        transaction = []
        for command in data['param']:
            if command[0] == 'read':
                if self.param['debug'] > 2:
                    print('Buject "{0}" read address {1} register {2}'.format(self.param['name'], hex(command[1]), hex(command[2])))
                transaction.append(i2c.writing_bytes(command[1], command[2]))
                transaction.append(i2c.reading(command[1], 1))
            elif command[0] == 'write':
                if self.param['debug'] > 2:
                    self.log('Buject "{0}" write address {1} register {2} bytes {3}'.format(self.param['name'], hex(command[1]), hex(command[2]), hex(command[3])))
                transaction.append(i2c.writing_bytes(command[1], command[2], command[3]))
            elif command[0] == 'wait':
                if len(transaction):
                    time.sleep(command[1])
                    with i2c.I2CMaster(self.param['interface'], self.param['extra_open_flag']) as bus:
                        res = bus.transaction(*transaction)
                        if len(res):
                            result.extend(res)
                        transaction = []
            else:
                self.log('Buject "{0}" unsupported command: {1}'.format(self.param['name'], message))
        if len(transaction):
            with i2c.I2CMaster(self.param['interface'], self.param['extra_open_flag']) as bus:
                res = bus.transaction(*transaction)
                if len(res):
                    result.extend(res)

        if self.param['debug'] > 2:
            self.log('Buject "{0}" read result {1} '.format(self.param['name'], result))

        if len(result):
            response_data = {}
            index = 0
            for command in data['param']:
                if command[0] == 'read':
                    response_data['{0}:{1}'.format(hex(command[1]), hex(command[2]))] = result[index][0]
                    index += 1
            self.send_response(data, response_data)
        if self.param['debug'] > 2:
            print('Buject "{0}" transaction complete'.format(self.param['name']))
        return

if __name__ == '__main__':
    buject = BujectI2C()
    buject.start()
    buject.join()
    test = True