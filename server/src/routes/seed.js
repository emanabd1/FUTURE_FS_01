import {Router} from 'express'; import Knowledge from '../models/Knowledge.js';
const router=Router();
router.post('/',async(req,res)=>{try{await Knowledge.deleteMany({}); await Knowledge.insertMany(req.body); res.json({message:'Knowledge seeded',count:req.body.length});}catch(e){res.status(500).json({message:e.message});}});
export default router;
