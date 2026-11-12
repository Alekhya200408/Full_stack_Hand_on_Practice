import { Router } from "express";
import {CreateTask, getAlltasks, getTask, updateTask} from '../controllers/TaskController.js'


const Taskroute=Router()

Taskroute.post('/create',CreateTask)
Taskroute.get('/',getAlltasks)
Taskroute.get('/:id',getTask)
Taskroute.patch('/:id',updateTask)

export default Taskroute