var entryInput = document.getElementById("entry")
var stopLossInput = document.getElementById("stopLoss")
var riskAmountInput = document.getElementById("riskAmount")

entryInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calc()
  }
});

stopLossInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calc()
  }
});

riskAmountInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calc()
  }
});

function calc() {
  var entry = entryInput.value
  var stopLoss = stopLossInput.value
  var riskAmount = riskAmountInput.value

  var quantity = Math.abs(riskAmount/(entry-stopLoss))

  document.getElementById("quantity").innerHTML = quantity.toFixed(3)
}