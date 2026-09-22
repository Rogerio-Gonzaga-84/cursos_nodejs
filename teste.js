


const crypto = require("crypto");

const start = Date.now();

function logHastTime(){
    crypto.pbkdf2("a","b",1000000, 512, "sha512", ()=>{
        console.log(`Hash: ${Date.now() - start}`);

    })
}

logHastTime();
logHastTime();
logHastTime();
logHastTime();