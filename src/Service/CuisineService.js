const axios = require("axios");
const OPTIONS = { headers: { "user-key": "c8b86c9516e61ce12fb4477dafa249b1" } }

module.exports= async function getCuisineId(cuisine) {
    let response = await axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=260`, OPTIONS);
    //console.log(JSON.stringify(response.data)); // print the response so that its understanble, used JSON.stringify
    //console.log(response.data.cuisines.filter(o => o.cuisine.cuisine_name == "Italian")); //gives the array.
    //console.log(response.data.cuisines.find(o => o.cuisine.cuisine_name == "Italian")); //find method gives the object not the array.
    let item = response.data.cuisines.find(o => o.cuisine.cuisine_name == cuisine);
    //console.log("item"+item);
    let cuisineId =(item.cuisine.cuisine_id);
    return cuisineId;  // return is used to return the value of the function in the mainMenu. Always have return statement in functions.




    
    
}




