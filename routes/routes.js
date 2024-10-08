const {checkEmployee,addEmployee,checkProfile,leaveRequest,getTimesheetsStatus,getTimesheetsShow,getTimesheets,timeSheetupload,getLeaves,leaveChangeRequest,getLeavesForeachPerson,getEmployees}=require('../controllers/user')
const express=require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const router=express.Router();
const app = express();
app.use(express.json());
const genAI = new GoogleGenerativeAI('AIzaSyDLvb6js3llevV9xAM2dWfyVwj_mGKAebM');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
router.route('/genratereason').post(async (req,res)=>{
    console.log("hello server");
    const {reason}=req.body;
    const prompt =`You are an expert in crafting appropriate leave requests for a software company. 
    Based on the provided ${reason}, generate a concise and professional leave request message.
    if you want more information about the reason take one random example based on that generate. 
    Ensure the reason is clearly communicated and is acceptable for managerial approval. 
    The output should be in 50 words, with just the reason based and formatted as follows: Leave Request: reason. 
    Do not include any additional suggestions or newline characters.`;
    try{
        const FirstResponse = await model.generateContent(prompt);
        console.log("Answer:", FirstResponse.response.text());
        return res.json({message:FirstResponse.response.text()});
    }catch(err){
        console.error(err);
        return res.status(500).json({error:err.message});
    }
})
router.route("/register").post(addEmployee);
router.route("/login").post(checkEmployee);
router.route("/profile").post(checkProfile);
router.route("/leave").post(leaveRequest);
// router.route("/generate").post(generateReason);
router.route("/leaverequests").get(getLeaves);
router.route("/leavechange").post(leaveChangeRequest);
router.route("/leavesforeachperson").post(getLeavesForeachPerson);
router.route("/employeesearch").post(getEmployees);
router.route("/timesheet").post(timeSheetupload);
router.route("/gettimesheets").get(getTimesheets);
router.route("/timesheetsShow").post(getTimesheetsShow);
router.route("/gettimesheetsstatus").post(getTimesheetsStatus);
module.exports=router;