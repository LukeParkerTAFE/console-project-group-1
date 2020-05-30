const askQuestion = require("../Common/AskFunctions");
const searchService = require("../Service/SearchService");
const category = require("../Service/CategoriesService");
const cuisine = require("../Service/CuisineService");

module.exports = async function takeAwayMenu() {
    let id;
    let cat = await category("Takeaway");
    let searchUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=260&entity_type=city&count=10&`;

    console.log("TAKE AWAY");
    console.log("[1] Italian");
    console.log("[2] Indian");
    console.log("[3] Lebanese")
    console.log("[4] Japanese");
    let ansIsDelivery1 = await askQuestion("Please select an option from above: ");
    switch (ansIsDelivery1) {
        case "1":

            console.log("Top 10 Italian Restuarants for Take Away");
            console.log();
            id = await cuisine("Italian");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;


            break;

        case "2":
            console.log("Top 10 Indian Restuarants for Take Away ");
            console.log();
            id = await cuisine("Indian");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;


            break;
        case "3":
            console.log("Top 10 Labanese Restuarants for Take Away");
            console.log();
            id = await cuisine("Labanese");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;

            break;
        case "4":
            console.log("Top 10 Japanese Restuarants for Take Away ");
            console.log();
            id = await cuisine("Japanese");
            await searchService(searchUrl + `cuisines=${id}&category=${cat}`);
            shouldLoop = false;


            break;

        default:
            break;

    }
}





