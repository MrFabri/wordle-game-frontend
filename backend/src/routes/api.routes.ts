import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    response: "welcome to the api",
  });
});

router.get("/hello", (req: Request, res: Response) => {
  res.json({
    response: "hello",
  });
});

router.get('/*', (req: Request, res: Response) => {
  res.status(404).json({
    status: res.statusCode,
    response: 'Error, we could not find this resource!'
  })
});

export default router;
