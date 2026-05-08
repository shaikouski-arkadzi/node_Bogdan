import express from "express";
import { getUsersHandler, postUsersHandler } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsersHandler);
router.post("/", postUsersHandler);

export default router;
