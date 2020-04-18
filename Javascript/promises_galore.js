const fetch = require("node-fetch");
var parseString = require("xml2js").parseString;

var promise = new Promise(async function (resolve, reject) {
  // do a thing, possibly async, then…

  const url =
    "https://www.animenewsnetwork.com/encyclopedia/reports.xml?id=155&nlist=5&nskip=100&type=manga";

  const response = await fetch(url);
  let text = await response.text();

  if (text.length > 0) {
    resolve(text);
  } else {
    reject(Error("It broke"));
  }
});

promise.then(
  function (result) {
    parseString(result, function (err, result) {
      console.dir(result);
      console.log(result.report);
    });
  },
  function (err) {
    console.log(err); // Error: "It broke"
  }
);

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1 * 1000)
//   .then(() => console.log("1 second"))
//   .catch(console.log("failed"));
