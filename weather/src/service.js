const cities = require('./_city.json');

exports.getCityTip = function(input) {
  let cityList=[];
  for (value of cities) {
    if(value.city_name.includes(input) && value.city_code != "") {
      cityList.push(value);
    }
  }
  return cityList;
};