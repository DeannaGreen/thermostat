$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat._temperature);

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increase(); // update model
    updateTemperature(); // update view
  })

  $('#temperature-down').on('click', function() {
    thermostat.decrease();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving-status').text('ON')
    $('#max-temp').text('25')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving-status').text('OFF')
    $('#max-temp').text('32')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.usage());
    $('#degree').attr('class', thermostat.usage());
  };

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = ENV["THERMOSTAT_API"]
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
    $('#current-location').text(city);
  };

  $('#powersaving-on').click(function(){
    $('#powersaving-on').removeClass("btn btn-dark");
    $('#powersaving-on').addClass("btn btn-success");
    $('#powersaving-off').removeClass("btn btn-danger");
    $('#powersaving-off').addClass("btn btn-dark");
  });

  $('#powersaving-off').click(function(){
    $('#powersaving-off').removeClass("btn btn-dark");
    $('#powersaving-off').addClass("btn btn-danger");
    $('#powersaving-on').removeClass("btn btn-success");
    $('#powersaving-on').addClass("btn btn-dark");
  });
})
