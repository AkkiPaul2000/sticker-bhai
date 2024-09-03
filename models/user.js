import mongoose,{Schema,models} from 'mongoose'

const useSchema=new Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},},
    {timestamp:true},
)

const User=models.User || mongoose.model('User',useSchema)

export default User;