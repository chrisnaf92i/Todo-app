import { query } from "./rest"

export const deleteOneTask = async (id:string) => {
    await query(`/api/tasks/${id}`, "DELETE")
}