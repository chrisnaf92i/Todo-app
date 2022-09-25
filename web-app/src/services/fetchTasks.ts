import { query } from "./rest"

export const fetchTask = () => {
    return query("/api/tasks", "GET")
}