import { Router } from 'express'

const route = Router()

let data = '<div>Preview</div>'

// GET API to fetch the Data
route.get('/fetch', (req, res) => {
    res.status(200).send({
        statusCode: 200,
        status: true,
        data,
    })
})

// POST API to update the data
route.post('/update', (req, res) => {
    if (req.body?.data) {
        data = req.body?.data
        res.status(200).send({
            statusCode: 200,
            status: true,
            data,
        })    
    }
    else {
        res.status(500).send({
            statusCode: 500,
            status: false,
            error: 'Invalid body',
        })
    }
})

export default route;