import { setHost } from "../src/fetch/config";

setHost("http://localhost:50000");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
global.__DATA_PATH__ = {
    html: {
        index: {
            l: `${__dirname}/data/html/index/l/index.html`
        }
    }
};