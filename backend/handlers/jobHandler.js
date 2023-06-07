const {jobModel} = require("../models/jobModel")
const fs = require("fs");
const { validationImage, imageUpload } = require("../utils/utils");
const ErrorResponse = require("../utils/errorResponse");
//create-jobs
const addJobs = async (req, res, next) => {
    try {
        
        const body = req.body
        const imageFile = req.files.resume
       
        if(!validationImage(imageFile,res)) return false
        const imageFileName = imageUpload("upload",imageFile)

        const job = await jobModel.create({
            title: body.title,
            description: body.description,
            salary: body.salary,
            location: body.location,
            jobType: body.jobType,
            user: req.user.id,
            resume:'upload/'+imageFileName
        })
       res.status(201).json({
        success:true,
        job
       })
        
            } catch (error) {
                console.log(error);
                next(error);
            }
        };
        //getAllJobTypes
        const getAllJobs=async(req,res,next)=>{
            try {
                const job = await jobModel.find()
                console.log(jobs)
                res.status(201).json({
                    job
                })
            } catch (error) {
                console.log(error)
                next(error)
                
            }
        }
        //getsingleJob(by-id)
        const getSingleJob=async(req,res,next)=>{
            try {
                const id = req.user._id.toJSON()
                const job = await jobModel.findOne({user:id})
                if(!job){
                    return next(new ErrorResponse("Id not match",404))
                }
                res.status(200).json({
                    success:true,
                    job
                })
            } catch (error) {
                console.log(error)
                next(error)
                
            }
        }
        
        module.exports = {
            addJobs,
            getAllJobs,
            getSingleJob,
        };

                
                

        
                


            

                
                
                
                




        
            
            
       
        
        









