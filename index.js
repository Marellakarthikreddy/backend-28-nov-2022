	const express=require("express")
	const app=express()
	const cors=require("cors")
	const bodyParser=require("body-parser")
	const Register=require("./Register schema.js")
	const mongoose=require("mongoose")
	const port=4455
	console.log(Register)
	
	app.use(bodyParser.urlencoded({
	extended:true
	}))
	app.use(bodyParser.json())
	app.use(cors())
	mongoose.connect("mongodb+srv://karthikreddymarella:Karthik7680903279@cluster0.yytl740.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("Created mongodb database")
	})
	.catch((err)=>{
		console.log(err)
	})
	app.get("/",(req,res)=>{
		res.send("hi this is server")
	})
	
	app.post("/Register",(req,res)=>{
		const {password,email,date,name,number}=req.body
		//const username="dummyuser",password="dummypassword"
		const newUser=new Register({
		password:password,
		email:email,
		date:date,
		name:name,
		number:number	
		})
		
		newUser.save()
	})
	
	app.listen(port,()=>console.log("server is started"))
	