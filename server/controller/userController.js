import User from "../model/userModel.js"

export const create = async(req, res)=>{
    try {

        const userData = new User(req.body)

        if (!userData) {
            return res.status(404).json({msg: "User Data not found"})
        }
        const savedData = await userData.save()
        res.status(200).json({msg:"User Created Succefully"})

    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const getall = async(req, res)=>{
    try {

        const userData = await User.find()

        if (!userData) {
            return res.status(404).json({msg: "Users' Data not found"})
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const getOne = async(req, res)=>{
    try {

        const id = req.params.id 
        const userExist = await User.findById(id)

        if (!userExist) {
            return res.status(404).json({msg: "User not found"})
        }
        res.status(200).json(userExist)

    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id 
        const userExist = await User.findById(id)

        if (!userExist) {
            return res.status(401).json({msg: "User not found"})
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({msg: "User updated successfully"})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const deleteUser = async(req, res)=>{
    try {

        const id = req.params.id 
        const userExist = await User.findById(id)

        if (!userExist) {
            return res.status(401).json({msg: "User not found"})
        }

        const deletedData = await User.findByIdAndDelete(id, req.body, {new: true})
        res.status(200).json({msg: "User deleted Successfully"})

    } catch (error) {
        res.status(500).json({error: error})
    }
}

