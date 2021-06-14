// const express = require('express')
// const router = express.Router()
// const Project = require('../models/projectModal')
// const {UploadImage} = require('../utils/ImageUpload')

// router.post('/api/upload',async(req,res)=>{
//   try{
//     const result = UploadImage(req.body.data)
//     console.log(result)
//     res.json(result)
//   }catch (err) {
//     console.log(err)
//     res.json(err)
//   }
// })

// router.post('/addproject',async (req,res)=>{

//   let imageUrls = []
//   try{
    
//     for(let i=0;req.body.images && i<req.body.images.length;i++) {
//       const fileUploadResp = await UploadImage(req.body.images[i])
//       imageUrls.push(fileUploadResp.secure_url)
//     }
  
//     const project = new Project ({
//       projectName: req.body.project_name,
//       developerName: req.body.developer_name,
//       mainStack: req.body.main_stack,
//       tags: req.body.tags,
//       demoUrl: req.body.demo_url,
//       repoUrl: req.body.repo_url,
//       imgUrls:imageUrls,
//       documentationUrl: req.body.documentation_url
//     })

//     const result = await project.save()
//     res.status(201).json(result)
//   }catch (err) {
//     console.log(err.message)
//     if(err.http_code)
//       res.status(err.http_code)
//     else res.status(406).send({ errorMsg: err.message })
//   }
// })

// router.get('/', (req,res)=>{
//   res.contentType('application/json')
//   console.log('sendig projects')
//   Project.find()
//     .then((result)=>{
//       res.json(result)
//     })
//     .catch((err)=>{
//       res.json({error:err.message})
//     })
// })

// router.delete('/delete/:project_id', (req,res)=>{
//   const projectId = req.params.project_id
//   Project.deleteOne({_id:projectId})
//     .then((result)=>{
//       res.status(202).json(result)
//     })
//     .catch((err)=>{
//       res.json({error:err.message})
//     })
// })

// router.patch('/update/:project_id', (req,res)=>{
//   Project.findByIdAndUpdate(req.params.project_id,
//       { projectName: req.body.project_name,
//         developerName: req.body.developer_name,
//         mainStack: req.body.main_stack,
//         tags: req.body.tags,
//         imgUrls: req.body.img_urls,
//         demoUrl: req.body.demo_url,
//         repoUrl: req.body.repo_url,
//         documentationUrl: req.body.documentation_url},
//         { safe: true, upsert: true })
//     .then((result)=>{
//       res.json(result)
//     })
//     .catch((err)=>{
//       res.json({error:err.message})
//     })
// })

// module.exports = router