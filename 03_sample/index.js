const server = require("ws").Server;
const s = new server({ port: 5001 });

s.on("connection", ws => {
    ws.on('message', message => {
        // クライアントから受信
        const { name, age } = JSON.parse(message);
        console.log(name, age);

        // クライアントへ送信
        ws.send(JSON.stringify({
            hoge: true,
            fuga: [1, 3, 5],
            piyo: 0.5,
        }));
    });
});
