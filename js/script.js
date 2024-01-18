document.addEventListener("DOMContentLoaded", function () {
  // Luas Persegi Form
  const calculateAreaForm = document.getElementById("calculateArea");
  const luasPersegiInput = document.getElementById("luasPersegiInput");
  const resultCalculateArea = document.getElementById("resultCalculateArea");

  calculateAreaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const sideLength = parseFloat(luasPersegiInput.value);
    if (!isNaN(sideLength)) {
      const luas = sideLength * sideLength;
      resultCalculateArea.innerHTML = `Luas: ${luas}`;
    } else {
      resultCalculateArea.innerHTML = "Masukkan panjang sisi yang valid.";
    }
  });

  // Reset Luas Persegi Form
  const resetLuasButton = document.getElementById("resetLuas");
  resetLuasButton.addEventListener("click", function () {
    luasPersegiInput.value = "";
    resultCalculateArea.innerHTML = "";
  });

  // Keliling Persegi Form
  const calculatePerimeterForm = document.getElementById("calculatePerimeter");
  const kelilingPersegiInput = document.getElementById("kelilingPersegiInput");
  const resultCalculatePerimeter = document.getElementById(
    "resultCalculatePerimeter"
  );

  calculatePerimeterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const sideLength = parseFloat(kelilingPersegiInput.value);
    if (!isNaN(sideLength)) {
      const keliling = 4 * sideLength;
      resultCalculatePerimeter.innerHTML = `Keliling: ${keliling}`;
    } else {
      resultCalculatePerimeter.innerHTML = "Masukkan panjang sisi yang valid.";
    }
  });

  // Reset Keliling Persegi Form
  const resetKelilingButton = document.getElementById("resetKeliling");
  resetKelilingButton.addEventListener("click", function () {
    kelilingPersegiInput.value = "";
    resultCalculatePerimeter.innerHTML = "";
  });
});
