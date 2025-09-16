import Student from "../moduls/student.js";

export function getStudents(req,res){
    Student.find().then(
        (data)=>{
            res.status(200).json(data)
        }
    )
}
export function saveStudent(req, res){
    console.log(req.body);
 
 const student = new Student (
    {
    name : req.body.name,
    age : req.body.age,
    string : req.body.string,
    email : req.body.email
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