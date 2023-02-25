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
                name: 'Nord CE 2 Lite 5G',
                brand: 'OnePlus',
                price: 349,
                category: 'mobile'
            },
            {
                name: '11 Pro',
                brand: 'OnePlus',
                price: 869,
                category: 'mobile'
            },
            {
                name: 'Nord 2',
                brand: 'OnePlus',
                price: 569,
                category: 'mobile'
            },

        ]
        const result = await db.insertMany(products)
        if (result.acknowledged) {
            console.log(`${result.insertedCount} documents were inserted`);

        }
}

insert().catch(console.dir);




