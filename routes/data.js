const {addData, More, Food, Fitness, Hollywood, Bollywood, Tech, Latest, TopTech, TopFit, TopFood, TopBolly, TopHolly, Actual, Home} = require ("../controller/data");
const router = require ("express").Router();

router.get("/food", Food);
router.get("/fitness", Fitness);
router.get("/hollywood", Hollywood);
router.get("/bollywood", Bollywood);
router.get("/tech", Tech);
router.get("/latest", Latest);
router.get("/toptech", TopTech);
router.get("/topfit", TopFit);
router.get("/topfood", TopFood);
router.get("/topbolly", TopBolly);
router.get("/topholly", TopHolly);
router.get("/actual", Actual);
router.get("/home", Home);
router.get("/more", More);
router.get("/addData", addData);

module.exports=router;