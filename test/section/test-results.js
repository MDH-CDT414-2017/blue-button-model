"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/results');

var expect = chai.expect;

describe('results section tests', function () {
    it('sample valid_0', function () {
        var valid = bbm.validator.validate(samples.valid_0, 'results');
        expect(valid).to.be.true;
    });

    it('sample invalid_0', function () {
        var valid = bbm.validator.validate(samples.invalid_0, 'results');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        var al = util.errorsToArrayIndices(result);
        expect(al).to.deep.equal([0]);
    });

    it('sample invalid_1', function () {
        var valid = bbm.validator.validate(samples.invalid_1, 'results');
        expect(valid).to.be.false;
        var result = bbm.validator.getLastError();
        var al = util.errorsToArrayIndices(result);
        expect(al).to.deep.equal([1]);
    });
});
