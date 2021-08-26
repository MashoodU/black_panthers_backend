const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel.js');

// Post a new product
// http://localhost:3001/products/create
router.post('/create',
    (req, res) => {

        // Use the UserModel to create a new document
        ProductModel
        .create(
            {
                bookName: req.body.bookName,
                genre: req.body.genre,
                author: req.body.author,
                description: req.body.description,
                price: req.body.price,
                productImage: req.body.productImage
            }
        )
        .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        );
    }
);



router.post('/update',
    (req, res) => {

            ProductModel
            .findOneAndUpdate(
                {
                    category: req.body.category,
                    productName: req.body.productName,
                    soldBy: req.body.soldBy,
                    description: req.body.description,
                    bidPrice: req.body.price
                }
            )           
            .then(
                (dbDocument) => {
                    res.send(dbDocument);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
            
    }
        
)

module.exports = router;