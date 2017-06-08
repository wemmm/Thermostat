$(document).ready(function() { // standard input
  var thermostat = new Thermostat(); // new instance
  $('#temperature').text(thermostat.temperature); // #temperature is element id on html page , argument what you want to show

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemperature(); // updates the model
    $('#temperature').text(thermostat.temperature); // updates the view
  })
  $('#temperature-down').on('click', function() { // event listener
    thermostat.decreaseTemperature(); // updates the model
    $('#temperature').text(thermostat.temperature); // updates the view
  })
  $('#temperature-reset').on('click', function() { // event listener
    thermostat.reset(); // updates the model
    $('#temperature').text(thermostat.temperature); // updates the view
  })
  $('#power-saving').on('click', function() { // event listener
    thermostat.togglePsm(); // updates the model
    $('#power_saving_status').text(thermostat.psmGetter());
  })

})
