const User =require("../models/User");
// create
exports.createUser = async (req,res) =>{
    const user  = await
User.create(req.body);
    res.status(201).json(user);
};
// Read All
exports.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
};

// Read One 
exports.getUser = async (req, res) =>{
    const user = await 
User.findBYId(req.params.id);
    res.json(user);
};

// Update 
exports.updateUser = async (req, res) =>{
    const user = await
User.findBYIdAndUpdate(
      req.params.id,
      req.body,
      { new: true}    
);
res.json(user);
};

//Delete
exports.deleteUser = async (req,res) => {
    await
User.findBYIdAndDelete(req.params.id);
    res.json({message: "User deleted" });
};
