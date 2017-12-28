function addMetaTags(name, browserName, extensionVersion, locat, pattern) {
        if (locat.match(pattern)) {
        $('<meta/>', {
            name: name,
            type: browserName,
            version: extensionVersion
        }).appendTo('head');
    }
}