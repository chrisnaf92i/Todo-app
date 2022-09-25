import { getErrorMessage } from "../utils";

export const query = async (_url:string, _method:"GET" | "POST" | "PUT" | "PATCH" | "DELETE", _body?:Record<string, unknown>):Promise<any> => {
        let httpStatusError = false;
        try {
            const response = await fetch(_url, {method: _method, headers:{"Content-Type":"application/json"}, ...(_body && {body:JSON.stringify(_body)})})

            const message = await response.json();
            if(!response.ok) {
                httpStatusError = true;
                throw Error(await response.json());
            }

            return message
        }
        catch(error) {
            if(httpStatusError){
                throw Error (getErrorMessage(error));
            }
            throw Error("Imossible de joindre le serveur")
        }
}