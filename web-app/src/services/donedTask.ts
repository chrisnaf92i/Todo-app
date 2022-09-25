import { query } from "./rest"

export const changeDoneTaks = async (id:string) => {
    await query(`/api/tasks/${id}`, "PUT")
}