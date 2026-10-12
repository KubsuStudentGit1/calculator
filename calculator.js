document.addEventListener("DOMContentLoaded", function() {
    const calcBtn = document.getElementById("calc-btn");
    const productSelect = document.getElementById("product-select");
    const quantityInput = document.getElementById("product-quantity");
    const resultSpan = document.getElementById("result");
    const errorDiv = document.getElementById("error-message");

    calcBtn.addEventListener("click", function() {
        const quantityValue = quantityInput.value.trim();
        
        const regex = /^[1-9]\d*$/;

        if (!regex.test(quantityValue)) {
            errorDiv.textContent = "Ошибка: введите целое положительное число!";
            errorDiv.style.display = "block";
            resultSpan.textContent = "0";
            return;
        }

        errorDiv.style.display = "none";
        errorDiv.textContent = "";

        const price = parseInt(productSelect.value, 10);
        const quantity = parseInt(quantityValue, 10);

        const totalCost = price * quantity;
        resultSpan.textContent = totalCost;
    });
});
