import User from "../moduls/user.js";

export function createUser(req,res){
     
    const user = new User(
        {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        }
    )

    user.save().then(()=>{
    res.json({
        message : "User added successfully"
    })

}).catch(()=>{
    res.json({
        message : "Error in adding user"
    })

     
}) 
}