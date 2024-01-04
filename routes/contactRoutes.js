import express from "express";
import { DeleteContact, ReadContact, ReadContactById, UpdateContact, createContact } from "../controller/contactControlller.js";

 const router = express.Router();

router.post('/contact', createContact);
router.get('/contact', ReadContact);
router.get('/contact/:id', ReadContactById);
router.put('/contact/:id', UpdateContact );
router.delete('/contact/:id', DeleteContact)


export default router;

