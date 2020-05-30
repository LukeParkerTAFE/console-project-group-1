const axios = require("axios");
const OPTIONS = { headers: { "user-key": "c8b86c9516e61ce12fb4477dafa249b1" } }

module.exports = 
    async function searchRestuarant(url) {
        let response = await axios.get(url,OPTIONS)
        let list1 = response.data.restaurants.map(items => {
            return {
                "Restaruant Name": items.restaurant.name,
                "Address": items.restaurant.location.address,

            }
        });
        console.table(list1);
    }


    
    


    // searchIndianForTakeAway: async function () {
    //     let response = await axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=260&entity_type=city&count=10&cuisines=148&category=5", OPTIONS)
    //     let list1 = response.data.restaurants.map(items => {
    //         return {
    //             "Restaruant Name": items.restaurant.name,
    //             "Address": items.restaurant.location.address,

    //         }
    //     });
    //     console.table(list1);
    // },
    
    //this is function reusablity, check what are the attributes repeating and assign a variable for that. 









