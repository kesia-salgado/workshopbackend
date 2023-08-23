import Router from "express";

const router = Router();

router.get("/", function (req, res){
    res.status(200).send({
        title: "Hello World! Bem vindes a Api do meu Portfólio Criativo!",
        version: "1.0.0",
    });
});

export default router;