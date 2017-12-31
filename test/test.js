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
                expect(data).to.an('object');
                done();
            }
        });
    });

    it('simple failing test', done => {
        expect(1===1).to.be.true;
        done();
    });
});