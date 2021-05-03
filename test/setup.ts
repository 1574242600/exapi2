import Client from "../src/request/Client";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
global.__DATA_PATH__ = {
    html: {
        index: {
            l: `${__dirname}/data/html/index/l.html`
        },
        gallery: {
            m: `${__dirname}/data/html/gallery/m.html`,
            l: `${__dirname}/data/html/gallery/l.html`
        }
    }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
///@ts-ignore
global.Client = new Client({ host: "http://localhost:50000" });