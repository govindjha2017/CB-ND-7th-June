const {Cashfree} = require("cashfree-pg");

var cashfree = new Cashfree(Cashfree.SANDBOX, process.env.APP_ID, process.env.SECRET_KEY)

module.exports = cashfree;