const catchAsync = require('../utils/catchAsync.js');
const AppError = require('./../utils/appError');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    console.log(req.params.id);
    // let doc = await Model.findById(req.params.id);
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('No document found with that id', 404));
    }
    console.log('Deleting...');
    res.status(204).json({ status: 'success', data: null });
  });
exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!doc) {
      return next(new AppError('No tour found with that id', 404));
    }
    res.status(200).json({
      status: 'success',
      data: { data: doc, updatedAt: req.requestAt }
    });
  });
