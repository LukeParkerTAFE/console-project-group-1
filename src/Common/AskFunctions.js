
// const path = require("path");
// const { StudentDataReader, TeacherDataReader } = require("./DataLayer");
// const { StudentService, TeacherService } = require("./Services");
// const { Student, Teacher } = require("./Models");


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const askQuestion = function (question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


module.exports = askQuestion;