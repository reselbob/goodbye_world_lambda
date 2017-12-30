'use strict';
const chai = require('chai');
chai.should();
const assert = require('chai').assert;
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

const lambda = require('../index');

describe('Basic Tests: ', () => {
    it('Can run lambda', done => {
        const event = {word: 'tiger '};
        const context = null;
        lambda.handler(event, context, function (err, data) {
            if (err) {
                done(err);
            } else {
                console.log(data);
                const obj = JSON.parse(data);
                expect(obj).to.an('object');
                done();
            }
        });
    });

});