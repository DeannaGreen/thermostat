'use strict';

function Thermostat() {
  this._temperature = 20;
  this._powerSavingMode = true;
};

Thermostat.prototype.increase = function(){
  if (this._powerSavingMode === true) {
    if (this._temperature < 25) {
      return this._temperature ++;
    };
  } else if (this._powerSavingMode === false){
    if (this._temperature < 32) {
      return this._temperature ++;
    };
  };
};

Thermostat.prototype.decrease = function(){
  if (this._temperature > 10){
    this._temperature --;
  };
};

Thermostat.prototype.powerSavingModeOn = function(){
  this._powerSavingMode = true;
};

Thermostat.prototype.powerSavingModeOff = function(){
  this._powerSavingMode = false;
};

Thermostat.prototype.reset = function(){
  this._temperature = 20;
};

Thermostat.prototype.usage = function(){
  if (this._temperature < 18) {
    return "low-usage"
  } else if (this._temperature < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  };
};
