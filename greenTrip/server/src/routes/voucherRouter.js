const router = require('express').Router();
const { protect, restrictTo } = require('../controllers/authControllers');
const {
  getAllVoucher,
  createOneVoucher,
  getOneVoucher,
  updateOneVoucher,
  deleteOneVoucher,
} = require('../controllers/voucherController');
const { setUserId } = require('../controllers/handleOps');

router.use(protect);

router.route('/').get(getAllVoucher).post(setUserId, createOneVoucher);

router
  .route('/:id')
  .get(getOneVoucher)
  .patch(restrictTo('adim'), updateOneVoucher)
  .delete(deleteOneVoucher);

module.exports = router;
