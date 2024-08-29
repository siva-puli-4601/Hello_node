const db = require('../database/db');
require('dotenv').config(); 

const insertEmployee=async (data)=>
{
    
    try{
        const {username,password,role,address,email,imageUrl}=data;
        console.log(data);
        insertQuery="insert into users(username,password,role,address,email,profile) values(?,?,?,?,?,?)";
        const [results]=await db.query(insertQuery,[username,password,role,JSON.stringify(address),email,imageUrl]);
        console.log(results);
        return results.insertId;

    }catch(err)
    {
        throw new Error(`failed to insert ${err.message}`);
    }
}
const checkEmp=async (data)=>
{
    try
    {
     const {email,password}=data;
     console.log(data);
     checkQuery="select * from users where email=? and password=?";
     const [results]=await db.query(checkQuery,[email,password]);
     if(results.length>0)
     {
        return results[0];

     }
     else
     {
        throw new Error(`employee not exists`);
     }
     
    }catch(err)
    {
      throw new Error(`failed to get data`);
    }
}

const getProfile=async (data)=>
{
    try{
    const {email}=data;
    console.log(email);
     checkQuery="select * from users where email=?"
     const [results]=await db.query(checkQuery,[email]);

     if(results.length>0)
     {
        return results[0];

     }
     else
     {
        throw new Error(`employee not exists`);
     }
     
    }catch(err)
    {
        throw new Error(`failed to get data`);
    }

}
const insertLeave=async (data)=>
{
    try{
        console.log("hello leave");
        const {startDate,endDate,leaveType,reason,email,username}=data;
        console.log(data);
        insertQuery="insert into leaverequest(startDate,endDate,leaveType,reason,mail,username) values(?,?,?,?,?,?)";
        const [results]=await db.query(insertQuery,[startDate,endDate,leaveType,reason,email,username]);
        console.log(results);
        return results.insertId;
      }catch(err)
      {
        console.log(err.message);
       throw new Error("failed to insert leaverequest");
      }
}

const getLeavesData=async (data)=>
{
    try{
        console.log("leave data");
        selectQuery="select * from leaverequest";
        const [results]=await db.query(selectQuery);
        return results;
    }catch(err)
    {
        throw new Error("failed to getiing leaverequest");
    }
}

const updateLeave=async (data)=>
{
    try{
        const {email,status}=data;
        console.log("leave update");
        updateLeaveQuery="update leaverequest set status=? where mail=?";
        const results=await db.query(updateLeaveQuery,[status,email]);
        console.log("sivate");
        return "sucessfully updated"+status+" leaverequest";
    }catch(err)
    {
        console.log(err.message);
        throw new Error("failed to update leaverequest");
    }
}
const getLeavesPerson=async (data)=>
{
    try{
        const {email}=data;
        const selectQuery="select * from leaverequest where mail=?";
        const [results]=await db.query(selectQuery,[email]);
        return results;
    }catch(err)
    {
      throw new Error("failed to get leaverequest for user");
    }
        
}
module.exports={insertEmployee,checkEmp,getProfile,insertLeave,getLeavesData,updateLeave,getLeavesPerson};