const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({});

});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate();
});

router.get("/api/workouts", (req, res) => {
  Workout.find();
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7);
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id);
});

module.exports = router;