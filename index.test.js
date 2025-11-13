"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:71202138383709699569 LICENSE.md

const {expect} = require('chai')
const MoneyDeva = require('./index.js');

describe(MoneyDeva.me.name, () => {
  beforeEach(() => {
    return MoneyDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(MoneyDeva).to.be.an('object');
    expect(MoneyDeva).to.have.property('agent');
    expect(MoneyDeva).to.have.property('vars');
    expect(MoneyDeva).to.have.property('listeners');
    expect(MoneyDeva).to.have.property('methods');
    expect(MoneyDeva).to.have.property('modules');
  });
})
