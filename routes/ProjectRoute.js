const express = require('express')
const router = express.Router()
const Project = require('../Schema/Project')

router.post('/addproject',(req,res)=>{
  const project = new Project ({
    projectName: req.body.project_name,
    developerName: req.body.developer_name,
    mainStack: req.body.main_stack,
    tags: req.body.tags,
    imgUrls: req.body.img_urls,
    demoUrl: req.body.demo_url,
    repoUrl: req.body.repo_url,
    documentationUrl: req.body.documentation_url
  })

  project.save()
    .then((result)=>{
      res.status(201).json(result)
    })
    .catch((err)=>{
      res.json({error:err.message})
    })
})

router.get('/', (req,res)=>{
  res.contentType('application/json')
  Project.find()
    .then((result)=>{
      res.json(result)
    })
    .catch((err)=>{
      res.json({error:err.message})
    })
})

router.delete('/delete/:project_id', (req,res)=>{
  const projectId = req.params.project_id
  Project.deleteOne({_id:projectId})
    .then((result)=>{
      res.status(202).json(result)
    })
    .catch((err)=>{
      res.json({error:err.message})
    })
})

router.patch('/update/:project_id', (req,res)=>{
  Project.findByIdAndUpdate(req.params.project_id,
      { projectName: req.body.project_name,
        developerName: req.body.developer_name,
        mainStack: req.body.main_stack,
        tags: req.body.tags,
        imgUrls: req.body.img_urls,
        demoUrl: req.body.demo_url,
        repoUrl: req.body.repo_url,
        documentationUrl: req.body.documentation_url},
        { safe: true, upsert: true })
    .then((result)=>{
      res.json(result)
    })
    .catch((err)=>{
      res.json({error:err.message})
    })
})

module.exports = router