import http from "http";

export default (request: http.IncomingMessage, res: http.ServerResponse): void => {
    const path = request.url;

    
    //首页
    if (path === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("ok");
        return ;
    }

    if (path.slice(0, 2) === "/?") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return ;
    }

    //画廊
    if (path.slice(0, 3) === "/g/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return ;
    }

    //图片
    if (path.slice(0, 3) === "/s/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return ;
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("error");
};