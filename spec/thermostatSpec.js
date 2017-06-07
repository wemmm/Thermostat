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

  it('has PSM on by default', function() {
    expect(thermostat.psm).toEqual(true);
  });

  it('it can turn PSM off', function() {
    thermostat.togglePsm();
    expect(thermostat.psm).toEqual(false);
  });

  it('has a maximum temperature of twenty-five degrees if PSM is on', function() {
    thermostat.temperature += 5;
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('can be reset to a default temperature of twenty degrees', function(){
    thermostat.temperature += 3;
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('it returns high-usage when temperature is above twenty-five degrees', function() {
    thermostat.togglePsm()
    thermostat.temperature +=6;
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });

  it('returns medium usage when temperature is between twenty-four and eighteen degrees', function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it('it returns low-usage when temperature is under eighteen degrees', function() {
    thermostat.temperature -=3;
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });



});
