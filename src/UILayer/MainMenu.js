const askQuestion = require("../Common/AskFunctions");

 //const takeAway = require("./TakeAwayMenu");
 const {delivery, takeAway} = require("../UILayer");
 



async function Program() {
    console.log("Welcome to the Grp1 restuarant search")

    
    let shouldLoop = true;
    //while (shouldLoop) {
    console.log("MAIN MENU");
    console.log("[1] Delivery");
    console.log("[2] Take Away");
    console.log("[3] Exit");
    let answer = await askQuestion("Please select an option from above: ");
    console.log();
    
        
    
    switch (answer) {
        case "1": // DELIVERY MENU
            await delivery();
           //await catagory();
    
            break;

        case "2": // TAKE AWAY MENU
        await takeAway();
        

        case "3": // EXIT
            shouldLoop = false;
            break;
        default:
            console.log("Please enter a number from 1 to 3");
            console.log();
            break;
    }
}

console.log(" ");
console.log("Thank you for using the Grp1 Restuarant Search ");


//}

Program().then(() => {
    process.exit(0);
});