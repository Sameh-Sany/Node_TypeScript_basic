import express, { Request, Response, NextFunction } from "express";

import todosRoutes from "./routes/todos";

const app = express();

app.use(express.json());

app.use("/todos", todosRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: error.message,
  });
});

app.listen(3000);
