const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  var campgrounds = [
      { name : "Great Mediterranian Peak", img : "https://www.photosforclass.com/download/flickr-2164766085"},
      { name : "Granite Hill", img : "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f0c770aeecb0b8_960.jpg&user=Free-Photos"},
      { name : "Salmon Creek", img : "https://www.photosforclass.com/download/flickr-7121863467"},
  ]
  res.render("campgrounds", {campgrounds: campgrounds});
});

const port = 3000;
const url = "127.0.0.1";
app.listen(port, url, function() {
  console.log("Yelpcamp website is up and running!");
});
