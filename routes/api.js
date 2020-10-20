const router = require("express").Router();
const Workout = require("../models/workout.js");

// Creates a brand new workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Finds workout by ID and updates that workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
      { $push: { exercises: body } },
      { new: true }
  )
  .then(dbWorkout => res.json(dbWorkout))
  .catch(err => {
    res.status(400).json(err);
  });
});

// Finds the last workout
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Pulls all workouts and makes charts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Finds workout and deletes it
// router.delete("/api/workouts", ({ body }, res) => {
//   Workout.findByIdAndDelete(body.id)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;