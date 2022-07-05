const fetch = require("node-fetch");
const myArgs = process.argv.slice(2);
fetch(
  `https://api.nationalize.io/?name=${myArgs[0]}`
)
  .then((response) => response.json())
  .then((data) => {
    var data_list = [];
    const searchRegExp = /,/gi;
    const replaceWith = "";
    if (data["country"].length == 0) {
      console.error("sorry , no data found");
    } else {
      for (let i = 0; i < data["country"].length; i++) {
        data_list.push(
          `The probability that ${myArgs[0]} is from ${data["country"][i]["country_id"]} is ${data["country"][i]["probability"]}\n`
        );
      }
      console.log(data_list.toString().replace(searchRegExp, replaceWith));
    }
  })
  .catch((err) => console.log(err));




