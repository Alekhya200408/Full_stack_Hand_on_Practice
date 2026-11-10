import { Router } from "express";
import {CreateTask} from '../controllers/TaskController.js'


const Taskroute=Router()

Taskroute.post('/create',CreateTask)

export default Taskroute