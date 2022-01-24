const hp = ["samsung","vivo"];
const phone = ["iphone","readme"]

hp.concat(hp.concat(phone).join(","));
console.log(hp.join(","));