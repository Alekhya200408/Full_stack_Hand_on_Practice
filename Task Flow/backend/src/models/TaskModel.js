import mongoose from "mongoose";
const {Schema}=mongoose
const TaskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','in-progress','completed'],
        default:'pending'
    },
    priority:{
         type:String,
        enum:['low','medium','high'],
        default:'medium'
    }
},{
    timestamps:true
})

const TaskModel=mongoose.model("Task",TaskSchema)

export default TaskModel