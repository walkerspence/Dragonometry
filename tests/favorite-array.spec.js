var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

// var intro = require('../intro.js');

//TODO DELETE
var my_favorite_things = require('../student-work.js').my_favorite_things;

describe('my_favorite_things', function() {
	it('is an array', function() {
		expect(Array.isArray(my_favorite_things)).to.be.true; 
	});

	it('is full of strings', function() {
		for (i = 0; i < 5; i++) {
			expect(typeof my_favorite_things[i]).to.equal("string")
		}
	});

	it('contains more than 5 strings', function() {
		expect(my_favorite_things.length >= 5).to.be.true;
	})
});