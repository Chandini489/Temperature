const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

celsiusInput.addEventListener("input", () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;
  fahrenheitInput.value = fahrenheit.toFixed(2);
  kelvinInput.value = kelvin.toFixed(2);
});

fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5 / 9;
  const kelvin = celsius + 27
  celsiusInput.value = celsius.toFixed(2);
});