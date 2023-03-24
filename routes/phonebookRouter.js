const express = require("express");
const phonebookController = require("../controllers/phonebookController");
const phonebookRouter = express.Router();

phonebookRouter.get("/", phonebookController.getIndexPage);
phonebookRouter.get("/Add", phonebookController.getAddForm);
phonebookRouter.get("/Update/:id", phonebookController.getUpdateForm);
phonebookRouter.post("/Add", phonebookController.createContact);
phonebookRouter.post("/Update", phonebookController.updateContact);
phonebookRouter.post("/Delete", phonebookController.deleteContact);

module.exports = phonebookRouter;
