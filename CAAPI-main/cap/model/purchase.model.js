// const mongoose = require('mongoose');

// const purchaseSchema = new mongoose.Schema({

   
// //     partyName: {
// //         type:String,
// //         required: true
// //     },
// //     phoneNo: {
// //         type:Number,
// //         required: true
// //     },
// //     billNo: {
// //         type: Number,
// //         required: true
// //         },
// //     date:  {
// //         type:Date,
// //         required: true
// //     },
    
// //     items: {
// //         // type: String,
// //         type: [Array],
// //         required: true
// //     },
// //     firmId: {
// //         type: ObjectId,
// //         ref: "firmRegistration",
// //         required: true,
// //       },
// //     itemName: {
// //         type: String,
// //         required: true
// //     },
// //     qty: {
// //         type:Number,
// //         required: true
// //     },
// //     rate: {
// //         type:Number,
// //         required: true
        
// //     },
    
// //     totalAmount: {
// //         type:Number,
// //         required: true
// //     },
// //     userId: {
// //          type: "String",
// //          required: true
// //  }



// // partyName: {
// //     type: String,
// //     required: true
// // },
// // phoneNo: {
// //     type: String,
// //     required: true
// // },
// // billNo: {
// //             type: Number,
// //             required: true
// //             },
// // date: {
// //     type: Date,
// //     required: true
// // },
// // item: [
// //     {
// //         idNumber: {
// //             type: Number,
// //             required: true
// //         },
// //         itemName: {
// //             type: String,
// //             required: true
// //         },
// //         qty: {
// //             type: Number,
// //             required: true
// //         },
// //         rate: {
// //             type: Number,
// //             required: true
// //         },
// //         totalAmount: {
// //             type: Number,
// //             required: true
// //         }
// //     }
// // ],   
// //  firmId: {
// //     type: String, // You can change the type to the appropriate type for your firm ID
// //     required: true
// // },
// // totalAmount: {
// //     type: Number,
// //     default: 0
// // }



// // ====================================


// partyName: {
//     type: String,
//     required: true
// },
// phoneNo: {
//     type: String,
//     required: true
// },
// gstNo: {
//     type: Number,
//     required: true
// },
// date: {
//     type: Date,
//     required: true
// },
// item: {
//     type: [{ idNumber: {
//         type: Number,
//         required: true
//     },  itemName: {
//         type: String,
//         required: true
//     },
//     qty: {
//         type: Number,
//         required: true
//     },
//     pricePerUnit: { 
//         price:{ type: Number, required: true},
//         unit: { type: String, required: true}
// },
// tax: {
//     cgst: { type: Number, required: true},
//     igst: { type: Number, required: true},
// },
// hns: {
//     type: Number,
//     required: true
// },
// totalAmount: {
//     type: Number,
//     required: true
// }
// }]
// },

// firmId: {
//     type: ObjectId,
//     ref: "firmRegistration",
//     required: true,
//   },
//   totalAmount: {
//     type:Number
// },
// userId: {
//     type: "String"
// }
// },
// {
// timestamps: true,
// });
    

// const Purchase= mongoose.model('Purchase', purchaseSchema);

// module.exports = Purchase;


const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Import ObjectId from mongoose.Types

const purchaseSchema = new mongoose.Schema({
    partyName: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    gstNo: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    item: {
        type: [
            {
                idNumber: {
                    type: Number,
                    required: true
                },
                itemName: {
                    type: String,
                    required: true
                },
                qty: {
                    type: Number,
                    required: true
                },
                pricePerUnit: {
                    price: { type: Number, required: true },
                    unit: { type: String, required: true }
                },
                tax: {
                    cgst: { type: Number, required: true },
                    igst: { type: Number, required: true }
                },
                hns: {
                    type: Number,
                    required: true
                },
                totalAmount: {
                    type: Number,
                    required: true
                }
            }
        ]
    },
    firmId: {
        type: ObjectId, // Use ObjectId as the type
        ref: "firmRegistration",
        required: true,
    },
    totalAmount: {
        type: Number
    },
    userId: {
        type: String
    }
}, {
    timestamps: true,
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;


