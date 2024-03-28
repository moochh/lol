function calc() {
  var entry = document.getElementById("entry").value
  var stopLoss = document.getElementById("stopLoss").value
  var initialCost = document.getElementById("initialCost").value
  var risk = document.getElementById("riskAmount").value

  var quantity = Math.abs(risk/(entry-stopLoss))
  var leverage = quantity*entry/initialCost

  document.getElementById("quantity").innerHTML = "Quantity: " + quantity.toFixed(3)
  document.getElementById("leverage").innerHTML = "Leverage: " + Math.ceil(leverage) + "x"
}


