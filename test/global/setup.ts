import TestServer from "../testServer/testServer";
import router from "../testServer/router";

export = async (): Promise<void> => {
    const testServer = new TestServer(router);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    global.__TEST_SERVER__ = testServer;

    await testServer.start();
}


