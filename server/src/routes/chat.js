import {Router} from 'express'; import {answerQuestion} from '../services/rag.js';
const router=Router();
router.post('/',async(req,res)=>{try{const q=req.body?.question?.trim();if(!q)return res.status(400).json({message:'Question is required'});res.json(await answerQuestion(q));}catch(e){console.error(e);res.status(500).json({message:'Chatbot error'});}});
export default router;
