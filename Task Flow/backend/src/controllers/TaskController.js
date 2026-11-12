import mongoose from "mongoose"
import TaskModel from "../models/TaskModel.js"

const CreateTask=async(req,res)=>{
    const {title,description,status,priority}=req.body
    try {
        if(!title?.trim()||!description?.trim()){
            return res.status(400).json({
                message:"all fields are required"
            })
        }

        const isExistTask=await TaskModel.findOne({
            title:title.trim().toLowerCase()
        })

        if (isExistTask){
            return res.status(409).json({
                message:"Task name is already Exist,it prevents for making duplicates try some new task name"
            })
        }

        const task=await TaskModel.create({
        title:title.trim().toLowerCase(),
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

const getAlltasks=async(req,res)=>{
    try {
       
        const tasks=await TaskModel.find()

        return res.status(200).json({
            message:"All Tasks retrieved Successfully",
            tasks:tasks
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }

    
}

const getTask=async (req,res) => {
    try {
        const {id}=req.params
        const task=await TaskModel.findOne({
        _id:id
         })

         if (!task) {
            return res.status(404).json({
                message:"No Task Found"
            })
         }

     return res.status(200).json({
        message:"Task Retrieved Successfully",
        task:task
     })
}
     catch (error) {
    return res.status(500).json({
        error:error.message
    })    
    }
}

const updateTask=async (req,res) => {
    try {
        const {id}=req.params
        const {title,description,status}=req.body

    const task=await TaskModel.findById(
        id
    )
    if (!task) {
        return res.status(404).json({
            message:"Task not found"
        })
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;

    await task.save()

    return res.status(200).json({
        message:"Task updated successfully",
        task:task
    })
    } catch (error) {
        return res.status(500).json({
        error:error.message
    }) 
    }
}

const deletetask=async (req,res) => {
    try {
        const {id}=req.params
    const task=await TaskModel.findByIdAndDelete({
        _id:id
    })

    if(!task){
        return res.status(404).json({
            message:"Task not found"
        })
    }
    return res.status(200).json({
        message:'Task Deleted Successfully',
        task:task
    })
    } catch (error) {
      return res.status(500).json({
        error:error.message
      })  
    }
}
export  {CreateTask,getAlltasks,getTask,updateTask,deletetask};

