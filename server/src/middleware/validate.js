export function required(fields){return (req,res,next)=>{for(const f of fields){if(!req.body?.[f]?.toString().trim()) return res.status(400).json({message:`${f} is required`});} next();};}
