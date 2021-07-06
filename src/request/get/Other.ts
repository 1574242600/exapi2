import fs from "fs";
import FormData from "form-data";
import Client from "../Client";
import sha1 from "@utils/sha1";

export default class Other {
    private Client: Client;

    constructor(Client: Client) {
        this.Client = Client;
    }

    /**
     * 获取文件 sha1
     * @name getFileHash
     * @param file fs.ReadStream 文件只读流
     * @return Promise<string[] | string | null> 
     */
    async getFileHash(file: fs.ReadStream, similar: false): Promise<string>;
    async getFileHash(file: fs.ReadStream, similar: true): Promise<string[] | null>;
    async getFileHash(file: fs.ReadStream, similar: boolean): Promise<string[] | string | null> {

        async function postFile(Client: Client, file: fs.ReadStream): Promise<string[] | null> {
            const form = new FormData();

            form.append("sfile", file);
            form.append("fs_similar", "on");

            const response = await Client.requestEX("/upload/image_lookup.php",
                {
                    method: "POST",
                    redirect: "manual",
                    body: form,
                }
            );

            const hashArray = response.headers.get("Location").match(/([a-z0-9]{40})/g);
            return hashArray;
        }

        return similar
            ? postFile(this.Client, file)
            : sha1(file);
    }

    
    /**
    * 获取原始图片链接 
    * @name  getFullImageUrl
    * @param id number 画廊id
    * @param page number 图片索引
    * @param token string 图片token
    */
    async getFullImageUrl(id: string, page: number, token: string): Promise<string> {
        const response = await this.Client.requestEX(`/fullimg.php?gid=${id}&page=${page}&key=${token}`, { redirect: "manual" });
        return response.headers.get("Location");
    }
}