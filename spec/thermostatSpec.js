'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('reads the current temperature', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});
