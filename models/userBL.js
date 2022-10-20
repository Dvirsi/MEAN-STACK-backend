const User = require('./userModel');

const getAllUsers = () => {
    return User.find({});
}

const getUser = (id) => {
    return User.findById(id);
}

const addUser = async(obj) => {
    let newUser = new User (
        {
            name : obj.name,
            email : obj.email,
            street : obj.street,
            city : obj.city,
            zipcode : obj.zipcode,
            tasks : obj.tasks,
            posts : obj.posts
        })
        await newUser.save();
        return newUser._id.toString();
}

const updateUser = async(id, obj) => {
    await User.findByIdAndUpdate(id, 
    {
        name : obj.name,
        email : obj.email,
        street : obj.street,
        city : obj.city,
        zipcode : obj.zipcode,
        posts : obj.posts,
        tasks : obj.tasks
    })
}


const deleteUser = async(id) => {
    await User.findByIdAndDelete(id);
}

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser }