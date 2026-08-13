import mongoose from 'mongoose';
const schema = new mongoose.Schema({title:{type:String,required:true},description:String,stack:[String],category:String,image:String,liveUrl:String,githubUrl:String,featured:Boolean,order:Number},{timestamps:true});
export default mongoose.model('Project',schema);
