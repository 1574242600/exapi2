import Client from "./Client";
import get from "./get/index";
import { ClientInit } from "../types";

export default (ClientInit: ClientInit): {
    get: ReturnType<typeof get>
} => {
    const _Client = new Client(ClientInit);

    return {
        get: get(_Client)
    };
};