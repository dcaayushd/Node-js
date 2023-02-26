const mongoose = require('mongoose')

const main =async() =>{
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
    })
    const productModel = mongoose.model('products', productSchema)
    let data = new productModel({name: 'A30', price:130})
    let result = await data.save()
    console.log(result)
}

main()