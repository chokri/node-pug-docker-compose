var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
		user: [{
			id: 1,
			name: 'John Doe',
			email: 'john.doe@example.com'
		},
		{
			id: 2,
			name: 'Jane Doe',
			email: 'Jane.doe@example.com'
		}
	]
	});
});

module.exports = router;
