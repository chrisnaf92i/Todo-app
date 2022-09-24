import { Request, Response, Router } from "express";

const router = Router();

router.get("/api", (req: Request, res:Response) => {
    res.send("Bienvenu sur ma to do list");
})

export default router;