const Mongoose=require("mongoose")
let cSchema=Mongoose.Schema(
    {
        name:String,   
        rollno:String,
        college:String,
        place:String,
        district:String,
        facultyname:String,
        facultynumber:String,
        subject:String,
        department:String
       
    }
)
let cModel=Mongoose.model("college",cSchema)
module.exports=cModel