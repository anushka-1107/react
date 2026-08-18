const express = require('express')

const getallproducts = async (req , res) => {
    res.status(200).json({ msg : 'products list'})
}


const gettestingproducts = async (req, res) => {
    res.status(200).json({ msg : 'testing product list'})
}



module.exports = {getallproducts, gettestingproducts}