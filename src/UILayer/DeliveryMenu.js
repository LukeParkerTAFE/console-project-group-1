
const askQuestion = require("../Common/AskFunctions");
const {searchService, cuisine, category } = require("../Service");
//const cuisine = require("../Service/CuisineService");
//const category = require("../Service/CatagoriesService");

module.exports = async function deliveryMenu() {

    let searchUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=260&entity_type=city&count=10&`;
    

    console.log("SELECT THE CUISINE");
    console.log("[1] Italian");
    console.log("[2] Indian");
    console.log("[3] Lebanese")
    console.log("[4] Japanese");
    console.log();
    let id;
    let cat = await category("Delivery");
    let ansIsDelivery = await askQuestion("Please select an option from above: ");
    console.log();
    switch (ansIsDelivery) {


        case "1":
            console.log("Top 10 Italian Restuarants in Sydney ");
            console.log();
            id = await cuisine("Italian");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;
            break;
        case "2":
            console.log(" Top 10 Indian Restuarants in Sydney ");
            console.log();
            id = await cuisine("Indian");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;
            break;
        case "3":
            console.log(" Top 10 Labanese Restuarants in Sydney ");
            console.log();
            id = await cuisine("Lebanese");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;
            break;
        case "4":
            console.log("Top 10 Japanese Restuarants in Sydney");
            console.log();
            id = await cuisine("Japanese");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;
            break;



            default:
                console.log("Please enter a number from 1 to 4");
                console.log();
                break;
    }
}
