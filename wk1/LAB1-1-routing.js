//LAB 1-1: SIMPLE ROUTING WITH THE LOCATION OBJECT
//alert("well hello there");

var ptitle = document.querySelector('#pageTitle');
var mcontent = document.querySelector('#output');
var mcolor = document.querySelector('#mainContent');

if(location.search === "?home") {
    ptitle.innerHTML = "Home Page";
    mcontent.innerHTML = "<h3>Welcome to our website!</h3>";
    mcontent.innerHTML += "<p>We have many wonderful products that you might be interested in.</p>";
    mcolor.style.background = "white";
} 

if(location.search === "?products") {
    ptitle.innerHTML = "Products";
    mcontent.innerHTML = "<h3>Our Top 5 Products</h3>";
    mcontent.innerHTML += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
    mcolor.style.background = "red";
}

if(location.search === "?about") {
    ptitle.innerHTML = "About";
    mcontent.innerHTML = "<h3>About Computer Corp</h3>";
    mcontent.innerHTML += "<p>We have been around a long time, so we know what we're doing.</p>";
    mcontent.innerHTML += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
    mcolor.style.background = "green";
}

var headingsTwo = document.querySelectorAll("h2");
//console.log(headingsTwo);

for(var i=0; i < headingsTwo.length; i++)
{
    headingsTwo[i].style.background = "pink";
}

// //#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
// var contentHome = "<h3>Welcome to our website!</h3>";
// contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
// //==== END OF CONTENT FOR HOME PAGE ####

// //#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
// var contentProducts = "<h3>Our Top 5 Products</h3>";
// contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
// //==== END OF CONTENT FOR PRODUCTS PAGE #### 

// //#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
// var contentAbout = "<h3>About Computer Corp</h3>";
// contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
// contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
// //==== END OF CONTENT FOR ABOUT US PAGE ####
