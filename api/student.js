function respond(res, code, text) {
    res.writeHead(code, { "Content-Type": "text/plain" });
    res.write(text);
    res.end();
}

module.exports = {
    get: function(req, res) {
        console.log("student:get() starting");

        respond(res, 200, "{ 'id': '123945', 'name': 'Dhruv Prajapati', 'Age':'21' }");
    },
    post: function(request, res) {
        console.log("Workout:post() starting");

        respond(res, 200, "inserted ok");
    },
    put: function(request, res) {
        console.log("Workout:put() starting");

        respond(res, 200, "updated ok");
    },
    delete: function(request, res) {
        console.log("Workout:delete() starting");

        respond(res, 200, "deleted ok");
    }
};