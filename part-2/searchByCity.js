const fs = require('fs');
const city = process.argv[2];
const clients = JSON.parse(fs.readFileSync("clients.json"));
let search = [];
let capitalize = city.toLowerCase().split(" ");

for(let i = 0; i < capitalize.length; i++){
  capitalize[i] = capitalize[i].charAt(0).toUpperCase() + capitalize[i].slice(1);
}

capitalize = capitalize.join(" ");

console.log("Finding clients in City \"" + city + "\"...");

for(let i = 0; i < clients.length; i++) {
  if(clients[i].city.includes(capitalize)){
    search.push(clients[i]);
  }
}

for(let i = 0; i < search.length; i++) {
  delete search[i].no_employees;
  delete search[i].phone;
  delete search[i].created_at;
}

console.log("[");

for(let i = 0; i < search.length; i++){
  console.log("  {");
  console.log("    \"id\": " + search[i].id + ",");
  console.log("    \"rep_name\": \"" + search[i].rep_name + "\",");
  console.log("    \"company\": \"" + search[i].company + "\",");
  console.log("    \"city\": \"" + search[i].city + "\",");
  console.log("    \"state\": \"" + search[i].state + "\"");
  if(i+1 < search.length){
    console.log("  },");
  } else {
    console.log("  }");
  }
}

console.log("]");
