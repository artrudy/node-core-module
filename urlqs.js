const url = require("url");

const querystring = require("querystring");

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

//querystring.parse()

const myQs = "year=2023&month=october&day=24";
const q = querystring.parse(myQs);

console.log(q);
console.log(q.month);

//querystring.strungify()

const myQs2 = querystring.stringify({
  year: 2023,
  month: "october",
  day: 24,
});
console.log(myQs2);
