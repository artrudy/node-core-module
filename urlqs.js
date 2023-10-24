const url = require("url");

//url.parse()

const myUrl = url.parse(
  "https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/37196834#overview"
);

console.log(myUrl);

//url.format()

const myUrl2 = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1000,
    premium: true,
  },
});

console.log(myUrl2);
