function calc() {
  var entry = document.getElementById("entry").value
  var stopLoss = document.getElementById("stopLoss").value
  var accountCapital = document.getElementById("accountCapital").value
  var riskPercentage = document.getElementById("riskPercentage").value

  if (riskPercentage == "") {
    var risk = 5
  } else {
    var risk = accountCapital * riskPercentage / 100;
  }

  var quantity = Math.abs(risk/(entry-stopLoss))
  var leverage = quantity*entry/risk/3

  document.getElementById("quantity").innerHTML = "Quantity: " + quantity.toFixed(3)
  document.getElementById("leverage").innerHTML = "Leverage: " + leverage.toFixed(1) + "x"
}


