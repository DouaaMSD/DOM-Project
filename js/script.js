document.addEventListener("DOMContentLoaded", function () {
    const quantityPlusButtons = document.querySelectorAll(".fa-plus-circle");
    const quantityMinusButtons = document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fa-heart");
    const totalPriceElement = document.querySelector(".total");
    const unitPrices = document.querySelectorAll(".unit-price");
    const quantityElements = document.querySelectorAll(".quantity");
  
    // update total price
    function updateTotalPrice() {
      let totalPrice = 0;
      unitPrices.forEach((unitPrice, index) => {
        totalPrice += parseInt(unitPrice.textContent) * parseInt(quantityElements[index].textContent);
      });
      totalPriceElement.textContent = totalPrice + " $";
    }
  
    //  quantity increase
    function increaseQuantity(index) {
      let quantity = parseInt(quantityElements[index].textContent);
      quantity++;
      quantityElements[index].textContent = quantity;
      updateTotalPrice();
    }
  
    // quantity decrease
    function decreaseQuantity(index) {
      let quantity = parseInt(quantityElements[index].textContent);
      if (quantity > 0) {
        quantity--;
        quantityElements[index].textContent = quantity;
        updateTotalPrice();
      }
    }
  
    //  quantity plus buttons
    quantityPlusButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        increaseQuantity(index);
      });
    });
  
    //  quantity minus buttons
    quantityMinusButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        decreaseQuantity(index);
      });
    });
  
    //  delete buttons
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const cardBody = button.closest(".card-body");
        cardBody.parentElement.remove();
        updateTotalPrice();
      });
    });
  
    //  like buttons
    likeButtons.forEach((button) => {
      button.addEventListener("click", function () {
      button.classList.toggle("liked");
      button.classList.toggle("fas");
      button.classList.toggle("far");
      });
    });



  });
  



