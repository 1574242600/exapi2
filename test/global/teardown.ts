export = async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    ///@ts-ignore
    await global.__TEST_SERVER__.stop();
}