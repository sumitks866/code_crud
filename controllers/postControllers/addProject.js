const Project = require('../../models/projectModal')
const {UploadImage} = require('../../utils/uploadImage')

module.exports = async(req,res) => {
  let imageUrls = []
  try{
    for(let i=0;req.body.images && i<req.body.images.length;i++) {
      const fileUploadResp = await UploadImage(req.body.images[i])
      imageUrls.push(fileUploadResp.secure_url)
    }
  
    const project = new Project ({
      projectName: req.body.project_name,
      developerName: req.body.developer_name,
      mainStack: req.body.main_stack,
      tags: req.body.tags,
      demoUrl: req.body.demo_url,
      repoUrl: req.body.repo_url,
      imgUrls:imageUrls,
      documentationUrl: req.body.documentation_url
    })

    const result = await project.save()
    res.status(201).send(result)
  }catch (err) {
    console.log(err.message)
    if(err.http_code)
      return res.status(err.http_code).send({ errorMsg: err.message })
    return res.status(406).send({ errorMsg: err.message })
  }

}