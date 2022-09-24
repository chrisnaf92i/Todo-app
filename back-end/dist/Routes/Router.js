"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/api", (req, res) => {
    res.send("Bienvenu sur ma to do list");
});
exports.default = router;
