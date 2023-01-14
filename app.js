const Express=require("express")
const Cors=require("cors")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")


var college=Express()


college.get("/",(req,res)=>{
    res.send("welcome")
})

college.post("/studentadd",(req,res)=>{
    res.send("add")
})

college.post("/studentsearch",(req,res)=>{
    res.send("search")
})

college.get("/studentviewall",(req,res)=>{
    res.send("viewall ")
})

college.post("/studentdelete",(req,res)=>{
    res.send("delete")
})


college.post("/facultyadd",(req,res)=>{
    res.send("add faculty details")
})

college.post("/facultysearch",(req,res)=>{
    res.send("search faculty details")
})


college.post("/facultydelete",(req,res)=>{
    res.send("delete faculty details")
})


college.listen(3000)