//impor the model
const Todo=require("../models/Todo");


//define route handler

exports.createTodo=async(req,res)=>{
    try{

        //extrac title  and description from request body
        const {title, description} =req.body;

        //crete a new Todo object and insert into DB
        const response =await Todo.create({title, description});

        //send a json response with successfull flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Successfully"
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        );

    }
}