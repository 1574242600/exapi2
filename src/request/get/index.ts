
import Html from "./Html";
import Json from "./Json";
import Other from "./Other";
import Client from "../Client";

export default (Client: Client): {
    Html: Html
    Json: Json
    Other: Other
} => {
    return {
        Html: new Html(Client),
        Json: new Json(Client),
        Other: new Other(Client)
    };
};