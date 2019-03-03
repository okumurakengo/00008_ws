const server = require("ws").Server;
const s = new server({ port: 5001 });

s.on("connection", ws => {
    ws.on('message', message => {

        ws.send("送信してきたクライアントのみに返す");

        s.clients.forEach(client => {
            client.send('接続しているクライアント全てに送信');
        });

        s.clients.forEach(client => {
            if (client !== ws)
                client.send('接続している自分以外のクライアント全てに送信');
        });
    });
});
