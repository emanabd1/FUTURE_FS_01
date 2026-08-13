import mongoose from 'mongoose';
const schema = new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,trim:true,lowercase:true},subject:{type:String,trim:true},message:{type:String,required:true,trim:true},createdAt:{type:Date,default:Date.now}},{timestamps:true});
export default mongoose.model('Contact',schema);
