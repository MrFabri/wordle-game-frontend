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

router.get('/*', (req, res) => {
  res.status(404).json({
    status: res.statusCode,
    response: 'Error, we could not find this resource!'
  })
});

export default router;
