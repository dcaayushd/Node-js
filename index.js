const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-comm')
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
	category: String,
})
const saveInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    let data = new productModel(
        {
            name: '12 S Ultra',
            price: 1299,
            brand: 'Xiaomi',
            category: 'mobile',
        }
    )
    let result = await data.save()
    console.log(result)
}

saveInDB()