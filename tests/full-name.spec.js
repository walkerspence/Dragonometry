var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var full_name = require('../student-work.js').full_name;

describe('full_name()', function () {
	it('returns full name as a string given first and last name', function() {
		expect(full_name("John", "Appleseed")).to.equal("John Appleseed"); 
	});

	it('transforms numeric input into strings', function() {
		expect(full_name(1, 2)).to.equal("1 2");
	});

	it('concatanates NaN with NaN input', function() {
		expect(full_name(1, NaN)).to.equal("1 NaN");
	});

	it('returns input + undefined if only given one input', function() {
		expect(full_name("John", )).to.equal("John undefined");
	});
});