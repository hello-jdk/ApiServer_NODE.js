import express from "express";
import uuidAPIKey from "uuid-apikey";
const app = express();

const server = app.listen(3001, () => {
  console.log("Start Server : localhost 3001");
});

const key = {
  apiKey: "2C7JG40-74J4W9Q-GWC169N-AH6VQ8K",
  uuid: "130f2810-3924-4e26-8718-1326544dbba2",
};

//users API
app.get("/api/users/:apikey/:type", async (req, res) => {
  let { apikey, type } = req.params;

  if (!uuidAPIKey.isAPIKey(apikey) && !uuidAPIKey.check(apikey, key.apiKey)) {
    res.send("apikey is not valid");
  }

  if (type == "seoul") {
    let data = [
      {
        name: "강남사람",
        city: "seoul",
      },
      {
        name: "중구사람",
        city: "seoul",
      },
    ];
    res.send(data);
  } else if (type == "jeju") {
    let data = [
      {
        name: "서귀포사람",
        city: "jeju",
      },
      {
        name: "제주시사람",
        city: "jeju",
      },
    ];
    res.send(data);
  } else {
    res.send(`${type} is not available`);
  }
});

//sales API
app.get("/api/sales/:year", async (req, res) => {
  let { year } = req.params;

  if (year == "2020") {
    let data = [
      {
        product: "반도체",
        amount: 100,
      },
    ];
    res.send(data);
  } else if (year == "2021") {
    let data = [
      {
        product: "JAVA",
        amount: 2000,
      },
    ];
    res.send(data);
  } else if (year == "2022") {
    let data = [
      {
        product: "NODE.js",
        amount: 300000,
      },
    ];
    res.send(data);
  } else {
    res.send("지원하지않는 연도");
  }
});
