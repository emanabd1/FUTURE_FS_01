import {Router} from 'express'; import Project from '../models/Project.js';
const router=Router();
router.get('/',async(req,res)=>{try{const items=await Project.find().sort({order:1,createdAt:-1}).lean();res.json(items);}catch(e){res.status(500).json({message:'Could not load projects'});}});
export default router;
