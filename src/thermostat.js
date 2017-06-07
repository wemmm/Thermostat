function Thermostat() {
  this.temperature = 20
  this.psm = true
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature
};

Thermostat.prototype.increaseTemperature = function () {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature > 10)
    this.temperature -= 1
  else {
    return "Sorry, I can't do that."
  }

  Thermostat.prototype.togglePsm = function () {
    if (this.psm === true)
      this.psm = false
    else {
      this.psm = true
    }
  };
};
