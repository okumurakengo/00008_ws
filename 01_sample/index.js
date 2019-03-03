const server = require("ws").Server;
const s = new server({ port: 5001 });

s.on("connection", ws => {
    ws.on("message", message => {
        console.log("Received: " + message);

        if (message === "hello") {
            ws.send("hello from server");
        }
    });
});
