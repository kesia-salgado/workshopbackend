import express from "express";
import ProjetoController from "../controllers/projetoController.js";

const router = express.Router();

router
  .get("/", ProjetoController.getAllProjetos)
  .post("/", ProjetoController.createProjetos)
  .put("/:", ProjetoController.upDateProjetos)
  .get("/:", ProjetoController.getByIdProjetos)
  .delete("/:", ProjetoController.deleteProjetos)

export default router;