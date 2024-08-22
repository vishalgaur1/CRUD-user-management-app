import express from 'express'
import {create, deleteUser, getall, getOne, update} from '../controller/userController.js'
const route = express.Router()

route.post("/create", create)
route.get("/getall", getall)
route.get("/getone/:id", getOne)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteUser)



export default route