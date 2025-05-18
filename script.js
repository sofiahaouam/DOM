function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const resultDiv = document.getElementById("result");
  
    if (isNaN(amount) || isNaN(rate)) {
      resultDiv.innerHTML = "<span style='color:red'>Please enter valid numbers.</span>";
      return;
    }
  
    const converted = amount * rate;
    resultDiv.innerHTML = `Converted amount: $${converted.toFixed(2)}`;
  }
  