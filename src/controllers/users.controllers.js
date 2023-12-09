import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
    try {
    const users = await User.findAll();
    res.status(200).send({users: users})
    } catch (error){
        return res.status(500).send({message: error.message});
    }
}

export const getOneUser = async (req, res) => {
    try {
        const {
            userId
        } = req.params;
        const user = await User.findByPk(userId);
        if(!user){
            throw new Error('User not found');
        }
        res.status(200).send({user: user})  
    }catch (error){
        return res.status(500).send({message: error.message});
    }

    
}


export const createUser = async (req, res) => {
    try {
        const {
            userId, userName, userStatus
        } = req.body;     

        const newUser = await User.create({
            userid: userId, 
            username: userName, 
            userstatus: userStatus
        });
        res.status(200).send({user: newUser});
    } catch (error){
        return res.status(500).send({message: error.message});
    }   
}

export const update = async (req, res) => {
    try {
        
        const {
            userId
        } = req.params;

        const {
            userName,
            userStatus
        } = req.body;

        const user = await User.findByPk(userId);
        
        if(user){
            user.username = userName;
            user.userstatus = userStatus;
            await user.save();
            res.status(200).send({message: user});
        }
     
    } catch (error){
        return res.status(500).send({message: error.message});
    }   
}


export const deleteUser = async (req, res) => {
    try {
        const {
            userId
        } = req.params;
        const userDeleted = await User.destroy({
            where:{
                userid: userId
            }
        });
        res.status(200).send({userDeleted: userDeleted})  
    }catch (error){
        return res.status(500).send({message: error.message});
    }
}