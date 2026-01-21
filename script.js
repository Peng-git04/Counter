const value = document.getElementById("counterValue");
const decrease = document.getElementById("decreaseBtn");
const increase = document.getElementById("increaseBtn");

let count = 0;
value.textContent = count;

function updateValue(){
    value.textContent = count;
}
increaseBtn.addEventListener ("click", function () {
    count++;
    updateValue();
});
decreaseBtn.addEventListener ("click", function () {
    count--;
    updateValue();
});



