import { Router } from "express";
import {CreateTask, deletetask, getAlltasks, getTask, updateTask} from '../controllers/TaskController.js'


const Taskroute=Router()

Taskroute.post('/create',CreateTask)
Taskroute.get('/',getAlltasks)
Taskroute.get('/:id',getTask)
Taskroute.patch('/:id',updateTask)
Taskroute.delete('/:id',deletetask)

export default Taskroute