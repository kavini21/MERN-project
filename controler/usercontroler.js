import User from "../moduls/user.js";
import bcrypt from "bcrypt";
export function createUser(req,res){


    const hashedPassword = bcrypt.hashSync(req.body.password,10) // hashing 10 type
     
    const user = new User(
        {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : hashedPassword,
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