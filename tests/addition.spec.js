var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var add = require('../student-work.js').add;

describe('Addition', function() {
	it('returns a number', function() {
		expect(add(2, 2.4, 2)).to.be.a('number');
	});

	it('returns NaN when NaN inputted ', function() {
		expect(add(NaN, 2)).to.be.NaN;
	});

	it('returns NaN when arg is empty', function() {
		expect(add(2, )).to.be.NaN;
	});

	it('adds two numbers', function() {
		expect(add(2.5, 3)).to.equal(5.5); 
		expect(add(-2, -2)).to.equal(-4);
		expect(add(4, 0)).to.equal(4);
		expect(add(5, -2)).to.equal(3); 
	});
});

