import _fetch, { RequestInit, Response }  from "node-fetch";
import { getHost, getCookies, getAgent } from "./config";
import { userCookies } from "../types";

export default function fetch(url: string, init?: RequestInit): Promise<Response> {
    const agent = getAgent();

    const config: RequestInit = Object.assign({}, {
        method: "GET",
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/84.2",
            "content-type": "text/html,image/webp,*/*;q=0.8",
            "Referer": getHost()
        },
        agent: agent === null ? undefined : agent
    }, init);

    return _fetch(url, config);
}

export function fetchEX(path: string, init?: RequestInit): Promise<string> {
    const cookies = getCookies();

    init = Object.assign({}, 
        { 
            headers: { "Cookie": cookies === null ? undefined : cookiesToString(cookies) } 
        }, init);

    return fetch(getHost() + path, init)
        .then((response) => {  
            if (response.status === 509) {
                new Error("509 Bandwidth Limit Exceeded");
            }

            return response;
        })
        .then((response) => response.text());
}

export function fetchImg(url: string): Promise<Buffer> {
    return fetch(url)
        .then((response) => response.buffer());
}

function cookiesToString(cookies: userCookies): string {
    return Object.keys(cookies).map((key) => {
        return `${ key }=${ cookies[key] }`;
    }).join(";");
}