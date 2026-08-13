import {Router} from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import {required} from '../middleware/validate.js';
const router=Router();
router.post('/',required(['name','email','message']),async(req,res)=>{try{const item=await Contact.create(req.body); if(process.env.SMTP_HOST&&process.env.CONTACT_TO_EMAIL){const t=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||587),secure:Number(process.env.SMTP_PORT)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}); await t.sendMail({from:process.env.SMTP_USER,to:process.env.CONTACT_TO_EMAIL,replyTo:req.body.email,subject:req.body.subject||`Portfolio contact from ${req.body.name}`,text:req.body.message});} res.status(201).json({message:'Message sent successfully',id:item._id});}catch(e){res.status(500).json({message:'Could not send message'});}});
export default router;
