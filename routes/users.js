var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
// meant to invoke a finding from nodejsscan
var employeeId = req.foo;
var sql = "SELECT * FROM trn_employee WHERE employee_id = " + employeeId;

// meant to invoke a finding from nodejsscan
res.set('X-XSS-Protection', '0')

// meant to invoke a finding from secret finders (truffleHog, GitLeaks, etc.)
var password = "aW5jb2duaXRqb2ViQGdtYWlsLmNvbQ==";
var strKey = { "RSA private key": "-----BEGIN EC PRIVATE KEY-----" }

  res.send('respond with a resource');
});

module.exports = router;
