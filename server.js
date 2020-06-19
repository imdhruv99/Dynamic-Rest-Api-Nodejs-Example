var http = require("http");
var url = require("url");

function route(pathname, req, res) {
    console.log("router:route() About to route a request for " + pathname);

    try {
        //dynamically load the js file base on the url path
        var handler = require("." + pathname);

        console.log("router:route() selected handler: " + handler);

        //make sure we got a correct instantiation of the module
        if (typeof handler["post"] === 'function') {
            //route to the right method in the module based on the HTTP action
            if(req.method.toLowerCase() == 'get') {
                handler["get"](req, res);
            } else if (req.method.toLowerCase() == 'post') {
                handler["post"](req, res);
            } else if (req.method.toLowerCase() == 'put') {
                handler["put"](req, res);
            } else if (req.method.toLowerCase() == 'delete') {
                handler["delete"](req, res);
            }

            console.log("router:route() routed successfully");
            return;
        } 
    } catch(err) {
        console.log("router:route() exception instantiating handler: " + err);
    }

    console.log("router:route() No request handler found for " + pathname);
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not found");
    res.end();
}

function start(port) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Server:OnRequest() Request for " + pathname + " received.");
        route(pathname, request, response);
    }

    http.createServer(onRequest).listen(port);
    console.log("Server:Start() Server has started.");
}

exports.start = start;