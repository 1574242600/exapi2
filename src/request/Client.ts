import fetch, { RequestInit, Response } from "node-fetch";
import { UserCookies, ClientInit } from "@types";

export default class Client {
    private host = "https://exhentai.org";
    private cookies = null;
    public agent = null;

    constructor({ host, cookies, agent }: ClientInit) {
        this.host = host ? host : this.host;
        this.cookies = cookies ? Client.cookiesToString(cookies) : this.cookies;
        this.agent = agent ? agent : this.agent;
    }

    public request(url: string, init?: RequestInit): Promise<Response> {
        const config: RequestInit = Object.assign({}, {
            method: "GET",
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/84.2",
                "content-type": "text/html,image/webp,*/*;q=0.8",
                "Referer": this.host
            },
            agent: this.agent === null ? undefined : this.agent
        }, init);

        return fetch(url, config);
    }

    public requestEX(path: string, init?: RequestInit): Promise<Response> {
        init = Object.assign({},
            {
                headers: { "Cookie": this.cookies === null ? undefined : this.cookies }
            }, init);

        return this.request(this.host + path, init)
            .then((response) => {
                if (response.status === 509) {
                    new Error("509 Bandwidth Limit Exceeded");
                }

                return response;
            });
    }

    public requestImg(url: string): Promise<Buffer> {
        return fetch(url)
            .then((response) => response.buffer());
    }

    public static cookiesToString(cookies: UserCookies): string {
        return Object.keys(cookies).map((key) => {
            return `${key}=${cookies[key]}`;
        }).join(";");
    }
}