'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('reads the current temperature', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('raises the current temperature by one degree', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('lowers the current temperature by one degree', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of ten degrees', function() {
    thermostat.temperature -= 10;
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
