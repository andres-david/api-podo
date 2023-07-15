const { Router } = require("express");
const router = Router();
const contractsCtrl = require("../controller/contracts.controller");

router.get("/contracts", contractsCtrl.getContracts);
router.get("/contracts-coupon", contractsCtrl.getContractsByCoupon);
router.get("/contracts-status", contractsCtrl.getContractsByStatus);
router.get("/contracts-origin", contractsCtrl.getContractsByOrigin);
router.get("/coupons", contractsCtrl.getCoupons);
router.get("/status", contractsCtrl.getStatus);
router.get("/origin", contractsCtrl.getOrigin);

module.exports = router;
