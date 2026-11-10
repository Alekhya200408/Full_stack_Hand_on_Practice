import { Router } from "express";
import {CreateTask, getAlltasks} from '../controllers/TaskController.js'


const Taskroute=Router()

Taskroute.post('/create',CreateTask)
Taskroute.get('/',getAlltasks)

export default Taskroute