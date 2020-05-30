
const axios = require("axios");
const OPTIONS = { headers: { "user-key": "c8b86c9516e61ce12fb4477dafa249b1" } }

module.exports =async function getCategoryService(catagory) {
    let response = await axios.get(`https://developers.zomato.com/api/v2.1/categories`, OPTIONS);
    let item =(response.data.categories.find(o => o.categories.name == catagory));
    console.log(item);
    let categoryId = (item.categories.id);
    return categoryId ;
    
}
