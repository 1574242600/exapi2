import { RequestInit }  from "node-fetch";
import { UserCookies } from "../types";

let host = "https://exhentai.org";
let agent: RequestInit["agent"] = null;
let cookies: UserCookies = null; 

export function setHost(_host: string): void {
    host = _host;
}

export function setAgent(_agent: RequestInit["agent"]): void {
    agent = _agent;
}

export function setCookies(_cookies: UserCookies): void {
    cookies = _cookies;
}

export function getHost(): string {
    return host;
}

export function getAgent(): RequestInit["agent"] | null {
    return agent;
}

export function getCookies(): userCookies | null {
    return cookies;
}
