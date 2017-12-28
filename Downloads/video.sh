#!/bin/sh
export LD_LIBRARY_PATH="$(pwd)"
./lib/mjpeg-streamer/mjpg_streamer -i "./lib/mjpeg-streamer/input_uvc.so" -o "./lib/mjpeg-streamer/output_http.so -w ./lib/mjpeg-streamer/www"