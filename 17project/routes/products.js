const express = require('express')

const router = express.Router()

const {getallproducts, gettestingproducts} = require('../controler/products')


router.route('/').get(getallproducts)
router.route('/test').get(gettestingproducts)


module.exports = router
