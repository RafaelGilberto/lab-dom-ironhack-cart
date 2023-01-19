// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let result = Number(price.innerHTML) * quantity.value;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = `${result}`;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let total = 0;
  const product = document.getElementsByClassName("product");
  for (let i = 0; i < product.length; i++) {
    total += updateSubtotal(product[i]);
  }
  // ITERATION 3
  const updateTotal = document.querySelector("#total-value span");
  console.log(updateTotal);
  updateTotal.innerHTML = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const rmvButton = document.getElementsByClassName("btn btn-remove");
  for (let i = 0; i < rmvButton.length; i++) {
    rmvButton.onClick = () => {
      removeProduct(rmvButton[i]);
    };
  }
});
