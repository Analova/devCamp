const Bootcamp = require("../models/Bootcamp");

// @desc Get all bootcmaps
//@route GET /api/v1/bootcamps
//@acess Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc Get a single  bootcmaps
//@route GET /api/v1/bootcamps/:id
//@acess Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc Create new bootcam
//@route POST /api/v1/bootcamps/:id
//@acess Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc Update a single  bootcmaps
//@route PUT /api/v1/bootcamps/:id
//@acess Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, mesg: `Update bootcamp ${req.params.id} ` });
};

// @desc Delete a single  bootcmaps
//@route DELETE /api/v1/bootcamps/:id
//@acess Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, mesg: `Delete bootcamp ${req.params.id} ` });
};
