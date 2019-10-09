var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

// var intro = require('../intro.js');

//TODO DELETE
var multiply = require('../student-work.js').multiply;

describe('multiply()', function() {
	it('multiplies two numbers', function() {
		expect(multiply(3, 2.27)).to.be.closeTo(6.81, .1); 
		expect(multiply(-2, -2)).to.equal(4);
		expect(multiply(0, 4)).to.equal(0);
		expect(multiply(5, -2)).to.equal(-10); 
	});

	it('returns a number', function() {
		expect(multiply(2.4, 2)).to.be.a('number');
	});

	it('returns NaN with num and string input', function() {
		expect(multiply(2, "hello")).to.be.NaN;
	});

	it('returns NaN when NaN inputted', function() {
		expect(multiply(NaN, 2)).to.be.NaN;
	});

	it('returns NaN when arg is empty', function() {
		expect(multiply(2, )).to.be.NaN;
	});
});