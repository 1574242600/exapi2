import fs from "fs";
import crypto from "crypto";

export default async function sha1(file: fs.ReadStream): Promise<string> {
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