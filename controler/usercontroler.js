export function createUser(req,res){
     
    const user = new User(
        {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : req.body.password,
            role : req.body.role
        }
    )

    student.save().then(()=>{
    res.json({
        message : "Student added successfully"
    })
}).catch(()=>{
    res.json({
        message : "Error in adding student"
    })

}) 
}