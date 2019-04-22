'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

 it('starts at 20 degrees', function (){
   expect(thermostat._temperature).toEqual(20);
 });

 it ('_temperature can be increased', function (){
   thermostat.increase()
   expect(thermostat._temperature).toEqual(21);
 });

 it ('_temperature can be decreased', function (){
   thermostat.decrease()
   expect(thermostat._temperature).toEqual(19);
 });

 it ('minimum temperature is 10', function (){
   thermostat._temperature = 10
   thermostat.decrease()
   expect(thermostat._temperature).toEqual(10);
 });

 it ('has max temperature of 25 if power saving mode is on', function(){
   thermostat._temperature = 25
   thermostat.increase()
   expect(thermostat._temperature).toEqual(25);
 })

 it ('has max temperature of 32', function(){
   thermostat._temperature = 32
   thermostat.powerSavingModeOff()
   thermostat.increase()
   expect(thermostat._temperature).toEqual(32);
 })

 it ('power saving mode on by default', function(){
   expect(thermostat._powerSavingMode).toEqual(true);
 });

 it ('can reset temperature to 20', function(){
   thermostat.reset()
   expect(thermostat._temperature).toEqual(20);
 });

 it ('if temperature is < 18 then returns low usage', function(){
   thermostat._temperature = 10
   expect(thermostat.usage()).toEqual("low-usage")
 });

 it ('if temperature is < 25 then returns medium usage', function(){
   thermostat._temperature = 24
   expect(thermostat.usage()).toEqual("medium-usage")
 });

 it ('if temperature is > 25 then returns high usage', function(){
   thermostat._temperature = 30
   expect(thermostat.usage()).toEqual("high-usage")
 });
});
