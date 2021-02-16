import http from "http";
import { once } from "events";

export default class testServer {
    server: http.Server;

    constructor(router: http.RequestListener) {
        this.server = http.createServer(router);
        this.server.on("error", err => {
            console.log(err.stack);
        });
        this.server.on("connection", socket => {
            socket.setTimeout(1500);
        });
    }

    start(): Promise<unknown[]> {
        this.server.listen(50000, "localhost");
        return once(this.server, "listening");
    }

    stop(): Promise<unknown[]> {
        this.server.close();
        return once(this.server, "close");
    }
}