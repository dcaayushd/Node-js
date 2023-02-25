const dbConnect = require('./mongodb')

// const insertOne = async ()=>{
//     const db = await dbConnect()
//     const result = await db.insertOne({
//         name:'Nord CE 2 Lite 5G',
//         brand: 'OnePlus',
//         price: 349,
//         category: 'mobile'
//     })
//     if(result.acknowledged){
//         console.log('Data inserted successfully')
//     }

// }

// insertOne()


const insert = async () => {
    
        const db = await dbConnect()
        const products = [
            {
                name: 'Iphone XR',
                brand: 'Apple',
                price: 449,
                category: 'mobile'
            },
            {
                name: 'Iphone 14 Pro',
                brand: 'Apple',
                price: 899,
                category: 'mobile'
            },
            {
                name: 'Iphone 11',
                brand: 'Apple',
                price: 249,
                category: 'mobile'
            },

        ]
        const result = await db.insertMany(products)
        if (result.acknowledged) {
            console.log(`${result.insertedCount} products were inserted`);

        }
}

insert().catch(console.dir);




