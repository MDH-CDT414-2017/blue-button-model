"use strict";

var chai = require('chai');

var bbm = require('../../index.js');

var util = require('../lib/util');
var samples = require('../samples/section/claims');

var expect = chai.expect;

describe('claims section tests', function () {
    it('sample valid_0', function () {
        bbm.validator.validateSection(samples.valid_0, 'claims');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.true;
    });

    it('sample invalid_0', function () {
        bbm.validator.validateSection(samples.invalid_0, 'claims');
        var result = bbm.validator.getLastError();
        expect(result.valid).to.be.false;
        var al = util.arrayLocations(result.errors);
        expect(al).to.deep.equal([0, 2]);
    });
});
