require('dotenv').config();
const {API_KEY}= process.env
const {Sneakers,Colors} = require('../db')
const axios = require('axios')
const respuesta = require('./respuesta.json')

const getApiInfo= async() => {
let res= await Sneakers.findAll({
    include: [{
        model: Colors,
        as: 'colors'
    }]
})
console.log("estoy en el json",res)
return res
    
}
module.exports= {

getApiInfo,
}




// const apiUrl=  await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=60&addRecipeInformation=true`);
    // const apiInfo= apiUrl.data.results.map( item => {
    //     const apiInfo= respuesta.results.map( item => {
    //   return {
    //     "box_condition": item.box_condition,
    //     "brand_name": item.brand_name,
    //     "category": item.category,
    //     "collection_slugs": item.collection_slugs,
    //     "color": item.color,
    //     "designer": item.designer,
    //     "details":  item.details,
    //     "gender": item.gender,
    //     "grid_picture_url": item.grid_picture_url ,
    //     "has_picture": item.has_picture,
    //     "has_stock": item.has_stock,
    //     "id": item.id,
    //     "keywords": [],
    //     "main_picture_url": item.main_picture_url,
    //     "midsole": item.midsole,
    //     "name": item.name,
    //     "nickname": item.nickname,
    //     "original_picture_url": item.original_picture_url,
    //     "product_template_id": item.product_template_id,
    //     "release_date": item.release_date,
    //     "release_date_unix": item.release_date_unix, 
    //     "release_year": item.release_year, 
    //     "retail_price_cents": item.retail_price_cents, 
    //     "shoe_condition": item.shoe_condition,
    //     "silhouette": item.silhouette,
    //     "size_range": item.size_range,  
    //     "sku": item.sku,
    //     "slug": item.slug,
    //     "status": item.status,
    //     "story_html": item.story_html,
    //     "upper_material": item.upper_material,
      
    //   }
    // })
   