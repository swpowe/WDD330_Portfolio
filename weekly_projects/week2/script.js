function obj1() {
  let input = document.getElementById("input_1");
  let output = document.getElementById("output_1");

  output.innerText = input.value;
}

function obj2(num) {
  // let input = document.getElementById('input_2');
  let input = num;
  let output = document.getElementById("output_1");

  if (isNaN(input.value)) {
    errorMesg(2);
  } else {
    let number = input.value;
    let sum = 0;

    for (let i = 0; i <= number; i++) {
      sum += i;
    }

    output.innerText = `Total Sum: ${sum}`;
  }
}

function obj3(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    errorMesg(3);
  } else {
    let output = document.getElementById("output_1");
    output.innerText = `The sum is: ${parseInt(num1) + parseInt(num2)}`;
  }
}

function errorMesg(objNum) {
  let input_1 = document.getElementById("input_1");
  let input_2 = document.getElementById("input_2");
  let output = document.getElementById("output_1");
  if (objNum === 2) {
    alert("Please enter a valid number.");
    input_1.value = ""; //
    console.log("not a number obj: " + objNum);
  } else {
    alert("Please enter a valid number.");
    input_1.value = "";
    input_2.value = "";
    output.innerText = "";
    console.log("not a number obj: " + objNum);
  }
}
