 
 let myDate = new Date();
 console.log(myDate);

 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toTimeString());
 console.log(myDate.getHours());
 console.log(myDate.getDay());
 console.log(myDate.getMonth());

 let myCreatedDate = new Date(2006, 4, 12, 12, 0); // my birthday!
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2006-05-12"); // my birthday!
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("05-12-2006"); // my birthday!
console.log(myCreatedDate3.toLocaleString());

let timeStamp = Date.now();

console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
