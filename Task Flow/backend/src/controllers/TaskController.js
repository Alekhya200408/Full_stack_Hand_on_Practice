import TaskModel from "../models/TaskModel.js"

const CreateTask=async(req,res)=>{
    const {title,description,status,priority}=req.body
    try {
        if(!title?.trim()||!description?.trim()){
            return res.status(400).json({
                message:"all fields are required"
            })
        }

        const task=await TaskModel.create({
        title,
        description,
        status,
        priority
    })

    return res.status(201).json({
        message:"Task Created Successfully",
        task:task
    })

    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export  {CreateTask};

