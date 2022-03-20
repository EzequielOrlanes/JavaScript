/*PREVISÃO DO TEMPO*/

const LOCAL_FORECAST = {
  today: { min: 19, max: 32 },
  tomorrow: { min: 21, max: 31 },
};

function getMaxOfTemperature(forcast) {
  const maxOfTomorrow = undefined;
  return maxOfTomorrow;
}

////--->>>>>>>>>

function getMaxOfTemperatureTomorrow(forecast) {
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTemperatureTomorrow(LOCAL_FORECAST));
