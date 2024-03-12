const { Router } = require("express");
const getDriversRouter = require('./getDriversRouter');
const createDriverRouter = require('./createDriverRouter');
const getTeamsRouter = require('./getTeamsRouter');

const router = Router();

router.use('/drivers', getDriversRouter);

router.use('/post', createDriverRouter);

router.use('/teams', getTeamsRouter);


module.exports = router;
