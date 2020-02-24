const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, mesg: "Show all  bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, mesg: `Show bootcamp ${req.params.id} ` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, mesg: "Create new bootcamp" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, mesg: `Update bootcamp ${req.params.id} ` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, mesg: `Delete bootcamp ${req.params.id} ` });
});

module.exports = router;
