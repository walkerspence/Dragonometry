var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var sinon = require('sinon');

//TODO DELETE
var favorite_things_logger = require('../student-work.js').favorite_things_logger;

describe('my_favorite_things', function() {
	var console_spy;

	beforeEach(function() {
		console_spy = sinon.spy(console, "log");
	});

	afterEach(function () {
		console_spy.restore();
	});

	it('calls console.log n times, where n = length of the array', function() {
		var test_array = [[1, 2, 3], 
						  [1, 2, 3, 4], 
						  [], 
						  [0], 
						  [1, 2, 3, 4, 5, 6, 7, 8]];
		var calls = 0;

		for (i = 0; i < test_array.length; i++) {
			favorite_things_logger(test_array[i]);
			calls += test_array[i].length; 
			expect(console_spy.callCount).to.equal(calls); 
		}
	});

	it('calls console.log with the correct inputs', function () {				
		favorite_things_logger([1, "hello", 7, "alsk"]);
		expect(console_spy.args[0][0]).to.equal(1);
		expect(console_spy.args[1][0]).to.equal("hello");
		expect(console_spy.args[2][0]).to.equal(7);
		expect(console_spy.args[3][0]).to.equal("alsk");
	});

});


