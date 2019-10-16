var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

var get_number = require('../student-work.js').get_number;

describe('get_number()', function() {
	it('returns the correct number', function() {
		expect(get_number([3, 2, 1, 3, 2], 2)).to.equal(1); 
		expect(get_number([5, 6, 4, 2, 3], 0)).to.equal(5);
		expect(get_number([5, 6, 4, 2, 3], 4)).to.equal(3);
	});
});