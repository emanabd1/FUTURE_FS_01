import mongoose from 'mongoose';
const schema = new mongoose.Schema({title:{type:String,required:true},content:{type:String,required:true},tags:[String],order:Number},{timestamps:true});
export default mongoose.model('Knowledge',schema);
