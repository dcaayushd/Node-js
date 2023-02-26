const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-comm')

////    Basic Example
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
// })
// const main = async () => {

//     const productModel = mongoose.model('products', productSchema)
//     let data = new productModel({ name: 'A30', price: 130 })
//     let result = await data.save()
//     console.log(result)
// }
// main()

////    Save in DB
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String,
// })
// const saveInDB = async () => {
//     const productModel = mongoose.model('products', productSchema)
//     let data = new productModel(
//         {
//             name: '12 S Ultra',
//             price: 1299,
//             brand: 'Xiaomi',
//             category: 'mobile',
//         }
//     )
//     let result = await data.save()
//     console.log(result)
// }
// saveInDB()

////    Update in DB
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
})
// const updateInDB = async () => {
//     const productModel = mongoose.model('products', productSchema)
//     let data = await productModel.updateOne(
//         { name: '12 S Ultra' }, 
//         {
//             $set: { price: 1399 } 
//         }
//     )
//     console.log(data)
// }

// updateInDB()

// const deleteInDB = async () => {
//     const productModel = mongoose.model('products', productSchema)
//     let data = await productModel.deleteOne({name:'A30'})
//     console.log(data)
// }

// deleteInDB()


////    Find in DB
const findInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    let data = await productModel.find({})
    console.log(data)
}

findInDB()

