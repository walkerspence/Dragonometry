var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var subtract = require('../student-work.js').subtract;

describe('subtract()', function() {
	it('subtracts two numbers', function() {
		expect(subtract(3, 2.5)).to.equal(0.5); 
		expect(subtract(-2, -2)).to.equal(0);
		expect(subtract(0, 4)).to.equal(-4);
		expect(subtract(5, -2)).to.equal(7); 
	});

	it('returns a number', function() {
		expect(subtract(2.4, 2)).to.be.a('number');
	});

	it('returns NaN with num and string input', function() {
		expect(subtract(2, "hello")).to.be.NaN;
	});

	it('returns NaN when NaN inputted ', function() {
		expect(subtract(NaN, 2)).to.be.NaN;
	});

	it('returns NaN when arg is empty', function() {
		expect(subtract(2, )).to.be.NaN;
	});
});