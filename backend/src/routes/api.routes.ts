import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    response: "welcome to the api",
  });
});

router.get("/hello", (req, res) => {
  res.json({
    response: "hello",
  });
});

export default router;
