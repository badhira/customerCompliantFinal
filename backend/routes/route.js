// const express = require('express');
// const customer = require('../models/customer');
// const router = express.Router();

// const Customer = require('../models/customer');

// //retrieving data

// router.get('/customer', (req, res, next) => {
//     Customer.find(function(err, customers) {
//         res.json(customers);
//     })
// });

// //add customer

// router.post('/customer', (req, res, next) => {

//     let newCustomer = new Customer({
//         name: req.body.name,
//         email: req.body.email,
//         mobileNo: req.body.mobileNo,
//         productId: req.body.productId,
//         productType: req.body.productType,
//         compliant: req.body.compliant,
//         invoiceUrl: req.body.invoiceUrl

//     });
//     newCustomer.save((err, customer) => {
//         if (err) {
//             res.json({ msg: 'customer to add contact' });
//         } else {
//             res.json({
//                 msg: 'customer added successfully'
//             });
//         }

//     })
// });

// //deleting contact
// router.delete('/customer/:id', (req, res, next) => {
//     //logic to delete customer
//     Customer.remove({ _id: req.params.id }, function(err, result) {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });
// });
username = "admin"
password = "1234"

router.post('/adminLogin', jsonParser, (req, res, next) => {

    let userData = req.body

    if (!username) {
        res.status(401).send('Invalid Username')
    } else
    if (password !== userData.password) {
        res.status(401).send('Invalid password ')
    } else {
        let payload = { subject: username + password }
        let token = jwt.sign(payload, 'secretKey')

        res.status(200).send({ token })
    }
})



module.exports = router;