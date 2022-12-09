const mongoose=require("mongoose")

const newUserSchema={
	password:String ,
	email:String,
	date:String,
	name:String,
	number:String
}

const Register=mongoose.model("students",newUserSchema)

module.exports=Register