// import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},

	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	update: function(objColVals, conditoin, cb) {
		orm.update("burgers",objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export the file
module.exports = burger;