function compute_visa() {
    var amount = document.getElementById('amount').value;
    var interest = document.getElementById('interest').value;
    var period = document.getElementById('period').value;
    var total = document.getElementById('total');
    var sum = 0;

    sum = Math.round((amount * (1 + (interest / 100))) / period);

    total.innerHTML = sum;

    total.style.border = "1px dashed red";
}

function reset() {

    document.getElementById('amount').value = "";
    document.getElementById('interest').value = "";
    document.getElementById('period').value = "";
    var total = document.getElementById('total')
    total.innerHTML = "";
    total.style.border = "";

}
