import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true,
    }, 
    fullName: {
        type: String, 
        required: false,
    }, 
    password: {
        type: String, 
        required: true, 
    }, 
    phoneNumber: {
        type: String, 
        required: true,
    }, 
    avatar: {
        url: {
            type: String, 
            required: false, 
        }
    }
})  

const UserModel = mongoose.model('users', userSchema)

export default UserModel