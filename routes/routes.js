const express = require('express')
const router = express.Router()

router.route('/').get(require('../controllers/getControllers/getProjects'))

router.route('/addproject').post(require('../controllers/postControllers/addProject'))

router.route('/deleteproject/:project_id').delete(require('../controllers/deleteControllers/deleteProject'))

router.route('/updateproject/:project_id').patch(require('../controllers/updateControllers/updateProject'))

module.exports = router