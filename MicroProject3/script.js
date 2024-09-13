let string = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // handling operators before 0
    if (input.value == 0 && ["+", "-", "*", "/"].includes(e.target.innerHTML)) {
      return;
    }

    // handling evaluation
    if (e.target.innerHTML == "=") {
      if (string.includes(".")) {
        string = eval(string);
        let result = Number(string);
        string = result.toFixed(2);
      }
      string = eval(string);
      let res = Number(string);
      input.value = res.toFixed(2);
    } else if (["+", "-", "*", "/"].includes(e.target.innerHTML)) {
      // Add spaces around the operator
      string += ` ${e.target.innerHTML} `;
      input.value = string;
    } else {
      if (string == "0") {
        string = e.target.innerHTML;
      } else {
        string = string + e.target.innerHTML;
      }
      input.value = string;
    }
  });
});

// reset
document.querySelector(".reset").addEventListener("click", () => {
  string = "0";
  input.value = string;
});

// delete
document.querySelector(".delete").addEventListener("click", (e) => {
  string = string.toString();
  string.length > "1" ? (string = string.slice(0, -1)) : (string = "0");
  input.value = string;
});
