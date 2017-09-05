const fs = require('fs');
const company = process.argv[2];
const clients = JSON.parse(fs.readFileSync("clients.json"));
let search = [];

console.log("Finding companies with name \"" + company + "\"...");

for(let i = 0; i < clients.length; i++){
  if(clients[i].company.includes(company)){
    search.push(clients[i]);
  }
}

console.log(search);
