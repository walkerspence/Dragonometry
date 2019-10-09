var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var divide = require('../student-work.js').divide;

describe('divide()', function() {
	it('divides two numbers', function() {
		expect(divide(3, 2)).to.be.closeTo(1.5, .1); 
		expect(divide(-2, -2)).to.equal(1);
		expect(divide(0, 4)).to.equal(0);
		expect(divide(5, 0)).to.equal(Infinity); 
	});

	it('returns a number', function() {
		expect(divide(2.4, 2)).to.be.a('number');
	});

	it('returns NaN with num and string input', function() {
		expect(divide(2, "hello")).to.be.NaN;
	});

	it('returns NaN when NaN inputted', function() {
		expect(divide(NaN, 2)).to.be.NaN;
	});

	it('returns NaN when arg is empty', function() {
		expect(divide(2, )).to.be.NaN;
	});
});