import http from "http";

export default (request: http.IncomingMessage, res: http.ServerResponse): void => {
    const path = request.url;


    //首页
    if (path === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("ok");
        return;
    }

    if (path.slice(0, 2) === "/?") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return;
    }

    //关注
    if (path.slice(0, 8) === "/watched") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return;
    }

    //画廊
    if (path.slice(0, 3) === "/g/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return;
    }

    //图片查看器
    if (path.slice(0, 3) === "/s/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return;
    }

    //多页图片查看器
    if (path.slice(0, 5) === "/mpv/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(path);
        return;
    }

    //多页图片查看器
    if (path.slice(0, 8) === "/api.php") {
        res.setHeader("Content-Type", "application/json");

        if (request.method === "POST") {
            let data = "";
            res.statusCode = 200;

            request.on("data", function (chunk) {
                data += chunk;
            });

            request.on("end", function () {
                const postJson = JSON.parse(data);

                if (["gid", "imgkey", "method", "mpvkey", "page"]
                    .filter((key) => (postJson[key] + "").length > 0)
                    .length === 5
                ) {
                    res.end(JSON.stringify({ s: 1 }));
                    return;
                }

                res.end(JSON.stringify({ s: 0 }));
            });

            return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ s: 0 }));
        return;
    }

    //原图
    if (path.slice(0, 12) === "/fullimg.php") {
        res.statusCode = 302;
        res.setHeader("Location", "ok");
        res.end();
        return;
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 error");
};