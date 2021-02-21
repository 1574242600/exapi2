import fs from "fs";
import crypto from "crypto";
import FormData from "form-data";
import { fetchEX } from "../fetch";

/**
 * 获取文件 sha1
 * @name getFileHash
 * @param file fs.ReadStream 文件只读流
 * @return Promise<string[] | string | null> 
 */
export default async function getFileHash(file: fs.ReadStream, similar: false): Promise<string>;
export default async function getFileHash(file: fs.ReadStream, similar: true): Promise<string[] | null>;
export default async function getFileHash(file: fs.ReadStream, similar: boolean): Promise<string[] | string | null>  {
    return similar 
        ? postFile(file) 
        : sha1(file);
}

export async function postFile(file: fs.ReadStream): Promise<string[] | null> {
    const form = new FormData();

    form.append("sfile", file);
    form.append("fs_similar", "on");

    const response = await fetchEX("/upload/image_lookup.php",
        {
            method: "POST",
            redirect: "manual",
            body: form,
        }
    );

    const hashArray = response.headers.get("Location").match(/([a-z0-9]{40})/g);
    return hashArray;
}

export async function sha1(file: fs.ReadStream): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const sha1 = crypto.createHash("sha1");
            file.on("data", function(chunk) {
                sha1.update(chunk);
            });
            
            file.on("end", function() {
                const hash = sha1.digest("hex");
                resolve(hash);
            });
        } catch(e) {
            reject(e);
        }
    });
}