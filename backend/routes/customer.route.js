const express = require('express');
const router = express.Router();
const customerModel = require('../models/customer.js')
const mongoose = require('mongoose');



router.post('/', async(req, res) => {
    try {
        console.log('body', req.body)
        let existingCus = await customerModel.findOne({
            name: req.body.name,
            email: req.body.email,
            mobileNo: req.body.mobileNo,
            productId: req.body.productId,
            productType: req.body.productType,
            compliant: req.body.compliant,
            invoiceUrl: req.body.invoiceUrl,
            status: req.body.status

        })
        if (!existingCus) {

            const customer = new customerModel({
                name: req.body.name,
                email: req.body.email,
                mobileNo: req.body.mobileNo,
                productId: req.body.productId,
                productType: req.body.productType,
                compliant: req.body.compliant,
                invoiceUrl: req.body.invoiceUrl,
                status: req.body.status

            });
            let data = await customer.save();
            res.json({
                success: 1,
                message: 'customer saved successfully',
                data: data
            })
        } else {
            res.json({
                success: 0,
                message: 'customer data already exist',
            })
        }
    } catch (error) {
        res.json({
            success: 0,
            message: 'something went wrong' + error
        })

    }
});

//get

router.get('/', async(req, res) => {
    try {
        let allCustomers = await customerModel.find();
        res.json({
            success: 1,
            message: 'customer listed successfully',
            items: allCustomers
        })
    } catch (error) {
        res.json({
            success: 0,
            message: 'something went wrong while fetching list customers' + error,
        })


    }
});

router.get('/:id', async(req, res) => {
    let id = req.params.id;
    var isValid = mongoose.Types.ObjectId.isValid(id)
    if (isValid) {
        try {
            let singleCustomer = await customerModel.findById({ _id: id })

            res.json({
                success: 1,
                message: 'single customer listed successfully',
                item: singleCustomer
            })

        } catch (error) {
            res.json({
                success: 0,
                message: 'something went wrong' + error,
            })
        }

    } else {
        res.json({
            success: 0,
            message: 'invalid id',
        })
    }
})

router.put('/:id', async(req, res) => {
    let id = req.params.id;
    var isValid = mongoose.Types.ObjectId.isValid(id);
    if (isValid) {
        try {
            let data = await customerModel.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    mobileNo: req.body.mobileNo,
                    productId: req.body.productId,
                    productType: req.body.productType,
                    compliant: req.body.compliant,
                    invoiceUrl: req.body.invoiceUrl,
                    status: req.body.status

                },

            })
            res.json({
                success: 1,
                message: 'single Customer updated successfully',
                item: data,
                data: data
            })

        } catch (error) {
            res.json({
                success: 0,
                message: 'something went wrong while editing' + error,
            })
        }
    } else {
        res.json({
            success: 0,
            message: 'invalid id',
        })
    }
})

//delete
router.delete('/:id', async(req, res) => {
    let id = req.params.id;
    try {

        await customerModel.deleteOne({ id: id })
        res.json({
            success: 1,
            message: 'Customer deleted successfully'
        })
    } catch (error) {
        res.json({
            success: 0,
            message: 'something went wrong' + error
        })

    }

})

module.exports = router



// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// const empModel = require('../models/emp.model');



// router.post('/', async(req, res) => {
//     console.log('body', req.body)
//     try {
//         const employs = new empModel({
//             firstName: req.body.firstName,
//             middleName: req.body.middleName,
//             lastName: req.body.lastName,
//             age: req.body.age

//         })
//         await employs.save();
//         res.json({
//             success: 1,
//             message: 'employee saved successfuly saved'
//         })


//     } catch (error) {
//         res.json({
//             success: 0,
//             message: 'something went wrong while saving emp' + error,
//         })
//     }

// })

// router.get('/', async(req, res) => {
//     try {

//         let allEmployess = await empModel.find();
//         res.json({
//             success: 1,
//             message: 'employee listed successfully',
//             item: allEmployess
//         })

//     } catch (error) {
//         res.json({
//             success: 0,
//             message: 'something went wrong while listing employees ' + error,

//         })

//     }

// })
// router.get('/:id', async(req, res) => {
//     let id = req.params.id;
//     let validId = mongoose.Types.ObjectId.isValid(id);
//     if (validId) {
//         try {
//             let singleEmployee = await empModel.findById({ _id: id })
//             res.json({
//                 success: 1,
//                 message: 'single employee listed successfully',
//                 item: singleEmployee
//             })
//         } catch (error) {
//             res.json({
//                 success: 0,
//                 message: 'something went wrong while listing single employees ' + error,
//             })
//         }
//     } else {
//         res.json({
//             success: 0,
//             message: 'invalid id'
//         })
//     }
//     console.log({ id })


// });


// router.put('/:id', async(req, res) => {
//     let id = req.params.id;
//     let validId = mongoose.Types.ObjectId.isValid(id);
//     if (validId) {
//         try {
//             let updatedData = await empModel.findByIdAndUpdate({ _id: id }, {
//                 $set: {
//                     firstName: req.body.firstName,
//                     middleName: req.body.middleName,
//                     lastName: req.body.lastName,
//                     age: req.body.age
//                 }
//             })
//             res.json({
//                 success: 1,
//                 message: ' single employee updated successfully',
//                 item: singleEmployess
//             })
//         } catch (error) {
//             res.json({
//                 success: 0,
//                 message: 'something went wrong while updating ' + error,
//             })
//         }

//     }
// });

// router.delete('/:id', async(req, res) => {
//     let id = req.params.id;
//     let validId = mongoose.Types.ObjectId.isValid(id);
//     if (validId) {
//         try {
//             await empModel.deleteOne({ _id: id })
//             res.json({
//                 success: 1,
//                 message: 'employee deleted successfully',
//             })

//         } catch (error) {
//             res.json({
//                 success: 0,
//                 message: 'something went wrong while deleting employee' + error,

//             })

//         }
//     }
// })

// module.exports = router