console.log("This file is running!");

let defaultEnv = {
    PORT: 5050,
    DATABASE_URI: "asdasd:asdasd",
    JWT_SECURITY_KEY: "asdasdas",
    SECRET_KEY: "apple",
    SECURE_API_KEY: "sdfas76d5f7as6d5fasd"
};

let contentToWrite = "";

// What it should look like:
// PORT=5050
// DATABASE_URI="asdasd:asdasd"
// JWT_SECURITY_KEY="asdasdas"
// SECRET_KEY="apple"
// SECURE_API_KEY="sdfas76d5f7as6d5fasd"

Object.keys(defaultEnv).forEach(
    envKey => {
        // Add a line to the contentToWrite variable with the key name and value
        contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
    }
);

// Give us an idea of what gets stored in the file
console.log(contentToWrite);

// All the file handling operations will be performed using fs
const fs = require("node:fs");

// Synchronous way
// fs.writeFileSync(".env", contentToWrite);

// Asynchronous way
// fs.writeFile(filepath, fileContents, callback);
fs.writeFile(".env", contentToWrite, (error) => {
    if (error){
        console.log("Error encountered: ", error.message);
    }
    else {
        console.log("File written successfully!");
    }
});


console.log("File has been written.");