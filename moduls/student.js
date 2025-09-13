import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
    {
        name : String,
        age : Number,
        string : String,
        email : String
    }
)
//mongoose connection
const Student = mongoose.model("students", studentSchema)

export default Student;