import express from "express";
import fs from "fs";
import cors from "cors";

const camp = express();

camp.use(cors());
camp.use(express.json());

// GET products
camp.get("/api/requests", (req, res) => {
  const data = fs.readFileSync("campusData.json", "utf-8");

  const requests = JSON.parse(data);

  res.json(requests);
});

// POST product
camp.post("/api/requests", (req, res) => {
  const data = fs.readFileSync("campusData.json", "utf-8");
  const requests = JSON.parse(data);

  const newId =
    requests.length > 0
      ? requests[requests.length - 1].id + 1
      : 1;

  const newData = {
    id: newId,
    name: req.body.name,
    email: req.body.email,
    category: req.body.category,
    problem: req.body.problem,
    priority: req.body.priority,
  };

  requests.push(newData);

  fs.writeFileSync(
    "campusData.json",
    JSON.stringify(requests, null, 2)
  );

  res.json(newData);
});

// DELETE product
camp.delete("/api/requests/:id", (req, res) => {
  const data = fs.readFileSync("campusData.json", "utf-8");

  let requests = JSON.parse(data);

  const id = parseInt(req.params.id);

  requests = requests.filter((request) => request.id !== id);

  fs.writeFileSync("campusData.json", JSON.stringify(requests, null, 2));

  res.json({
    message: "Student request removed successfully",
  });
});

camp.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});