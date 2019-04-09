const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /menu'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /menu'
    })
})

router.get('/:menuId',(req, res, next) => {
    const id = req.params.menuID;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:menuId',(req, res, next) => {
    res.status(200).json({
        message: 'Updated menu'
    })
})

router.delete('/:menuId',(req, res, next) => {
    res.status(200).json({
        message: 'Deleted menu'
    })
})

module.exports = router;