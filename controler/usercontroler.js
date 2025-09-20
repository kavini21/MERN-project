import User from "../moduls/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

export function loginUser(req,res){
    const email = req.body.email
    const password =req.body.password


    //user email check
    User.findOne({email: email}).then(
        (user)=>{
            if(user == null){
                res.status(404).json({
                    message : "User not found"
                })
        }else{
            const isPasswordCorrect = bcrypt.compareSync(password,user.password) //check password is correct or not
            if (isPasswordCorrect){
                const token = jwt.sign(  // add jsonwebtoken 
                   { email : user.email,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    role : user.role,
                    img : user.img

                   },
                   "wgk-gayanthi21$" //token password

                )




                res.json({
                    message : "Login successful",
                    token : token
                   
                })
            }else(
                res.status(401).json({
                    message : "Invalid password"
                })
            )
        }
    }
    )

}

