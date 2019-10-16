var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var list_of_five = require('../student-work.js').list_of_five;

describe('list_of_five', function() {
	it('is an array', function() {
		expect(Array.isArray(list_of_five)).to.be.true;
	});

	it('has length five', function() {
		expect(list_of_five.length).to.equal(5); 
	});

	it('contains all numbers', function () {
		for (i = 0; i < 5; i++) {
			expect(typeof list_of_five[i]).to.equal("number")
		}
	})
});