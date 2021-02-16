import http from "http";

export default (request: http.IncomingMessage, res: http.ServerResponse): void => {
    const path = request.url;

    //画廊
    if (path.slice(0, 3) === "/g/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return ;
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("error");
};