const {insertEmployee,checkEmp,getProfile,insertLeave,getLeavesData,updateLeave,getLeavesPerson}=require('../services/userService');
const addEmployee=async (req,res)=>
{
    console.log("hello");
    try{
    const data=req.body;
    console.log("controller",data)
    const result=await insertEmployee(data);
    console.log(result);
    return res.status(201).json({message:result});
    }catch(err){
        return res.status(404).json({message: err.message});
    }
}
const checkEmployee=async (req,res)=>
{
    try{
        console.log("hello");
  const data=req.body;
  const result=await checkEmp(data);
  console.log("control",result);
  return res.status(200).json({message:result});
    } catch(err)
    {
        return res.status(404).json({message: err.message});
    }
}
const checkProfile=async (req,res)=>
{
    try{
        console.log("profile");
        console.log("hello");
        const data=req.body;
        const result=await getProfile(data);
        return res.status(200).json({message:result});
    }catch(err)
    {
        return res.status(404).json({message: err.message});
    }
}

const leaveRequest=async (req,res)=>
{
    try{
        const data=req.body;
        const result=await insertLeave(data);
        return res.status(201).json({message:result});
    }catch(err)
    {
        return res.status(404).json({message: err.message});
    }
}

const getLeaves=async (req,res)=>
{
    try{
        console.log("leaves");
        const result=await getLeavesData();
        return res.status(200).json({message:result});

    }catch(err)
    {
        return res.status(404).json({message: err.message});
    }
}
const leaveChangeRequest=async (req,res)=>
{
  try{
    const data=req.body;
    console.log("leave change",data);
    const result=await updateLeave(data);
    console.log("leave change result",result);
    return res.status(200).json({message:result});
  }catch(err)
  {
    return res.status(404).json({message: err.message});
  }
}
const getLeavesForeachPerson=async (req,res)=>
{
    try{
        console.log("leaves");
        const data=req.body;
        const result=await getLeavesPerson(data);
        return res.status(200).json({message:result});

    }catch(err)
    {
        return res.status(404).json({message: err.message});
    }
}



module.exports={addEmployee,checkEmployee,checkProfile,leaveRequest,getLeaves,leaveChangeRequest,getLeavesForeachPerson};