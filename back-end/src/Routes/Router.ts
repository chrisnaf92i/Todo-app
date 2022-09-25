import { Request, Response, Router } from "express";
import * as taskController from "../controller/task"

const router = Router();

router.get("/api", (req: Request, res:Response) => {
    res.send("Bienvenu sur ma to do list");
})

router.get("/api/tasks", taskController.get)
router.delete("/api/tasks/:id", taskController.deleteTask)
router.put("/api/tasks/:id", taskController.changeDoneTask)
export default router;