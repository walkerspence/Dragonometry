var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var add_five = require('../student-work.js').add_five;

describe('add_five()', function() {
	it('adds five numbers', function() {
		expect(add_five(3, 2, 1, 3, 2)).to.equal(11); 
		expect(add_five(-2, -2, -2, 2, 2)).to.equal(-2);
	});

	it('returns a number', function() {
		expect(add_five(2.4, 2, 3.6, -2, 4)).to.be.a('number');
	});

	it('concatanates nums and strings', function() {
		expect(add_five(2, "hello", "oops", 9, 10)).to.equal("2hellooops910");
	});

	it('returns NaN when NaN inputted', function() {
		expect(add_five(NaN, 2, 2, 2, 2)).to.be.NaN;
	});

	it('returns NaN when arg is empty', function() {
		expect(add_five(2, )).to.be.NaN;
	});
});