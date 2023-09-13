//import the model
const Todo=require("../models/Todo");


exports.getTodo=async(req,res)=>{
    try{
        //fetch all todos from database

        const todos=await Todo.find({});

        //response

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched"
        });





       

    }
    catch(err){
        console.err(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server Error"

        })

       

    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //extract  todo items basis on id
        const id=req.params.id;
        const todo =await Todo.findById({_id:id});

        //data for given id is not found
        if(!todo){
            return res.status(400)
            .json({
                success:false,
                message:"No Data found with this id"
            });

        }
        //data for given id found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`
        })
    }

    catch(err){
        console.err(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error"
        })

    }
}