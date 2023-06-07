const {jobModel} = require("../models/jobModel")
const fs = require("fs");
const { validationImage, imageUpload } = require("../utils/utils");
const ErrorResponse = require("../utils/errorResponse");
//create-jobs
const addJobs = async (req, res, next) => {
    try {
        
        const body = req.body
        const imageFile = req.files.resume
       
        if(!validationImage(imageFile.mimetype,res)) return false
        const imageFileName = await imageUpload("uploads",imageFile)

        const job = await jobModel.create({
            title: body.title,
            description: body.description,
            salary: body.salary,
            location: body.location,
            jobType: body.jobType,
            user: req.user.id,
            resume:'uploads/'+imageFileName
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
                console.log(job)
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
                const id = req.params.id
                const job = await jobModel.findById(id)
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
        //editJob(by-id)
        const editSingleJob=async(req,res,next)=>{
            try{
                body=req.body
                const id = req.params.id
               const job = await jobModel.findByIdAndUpdate(id,{new:true})
              if(!job) return next(new ErrorResponse("id not found",404))
            //   console.log(job)
              if(req.files&&req.files.resume){
                const imageFile = req.files.resume
                if(!validationImage(imageFile.mimetype,res)){
                    return next(new ErrorResponse("Invalid file format!!",406))
                }
                 fs.unlink(job.resume,function(err){
                     if(err) return next(new ErrorResponse("unable to edit image",500))
                  })
                   
                   const imageFileName = await imageUpload("uploads",imageFile)
                   job.resume = imageFileName?`uploads/${imageFileName}`:null
                }
                job.title=body.title
                job.description = body.description
                job.salary=body.salary
                job.location=body.location
                job.available =body.available
                job.jobType = body.jobType
                await job.save()
                res.status(200).json({
                  success:true.valueOf,
                  job
                })
              }catch(error){
                  console.log(error)
                  next(error)
              }
  
          }
          module.exports = {
              addJobs,
              getAllJobs,
              getSingleJob,
              editSingleJob,
          };
                   
                 
                  
            
    
                   
    
               

        
                

                
                


        
                


            

                
                
                
                




        
            
            
       
        
        









