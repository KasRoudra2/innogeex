import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String, 
    email : String,
    password: String,
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;