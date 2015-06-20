function compute() {
    var begin = count = document.getElementById('begin').value;
    var number = document.getElementById('number').value;
    var sequence = document.getElementById('sequence').value;
    var total = document.getElementById('total');
    var sum = 0;
    for (i = 0; i < number; i++) {
        if (i === 0) {
            sum = parseInt(count);
        } else {
            count = parseInt(count) + parseInt(sequence);
            sum = parseInt(count) + parseInt(sum);
        }

    }
    total.innerHTML = sum;
    total.style.border = "1px dashed red";
}

function reset() {

    document.getElementById('begin').value = "";
    document.getElementById('number').value = "";
    document.getElementById('sequence').value = "";
    var total = document.getElementById('total')
    total.innerHTML = "";
    total.style.border = "";

}

function compute_visa() {
    var amount = document.getElementById('amount').value;
    var interest = document.getElementById('interest').value;
    var period = document.getElementById('period').value;
    var total = document.getElementById('total_visa');
    var total_other = document.getElementById('total_other');
    var sum = 0;

    sum = Math.round((amount * (1 + (interest / 100))) / period);

    total_other.innerHTML = "各期:" + parseInt(sum);

    total_other.style.border = "1px dashed red";

    if (sum * period < amount * (1 + (interest / 100))) {
        var diff = (amount * (1 + (interest / 100))) - (sum * period);
        total.innerHTML = "第一期:" + parseInt(sum + diff);
        total.style.border = "1px dashed red";
    }


}

function reset_visa() {

    document.getElementById('amount').value = "";
    document.getElementById('interest').value = "";
    document.getElementById('period').value = "";
    var total = document.getElementById('total_visa')
    var total_other = document.getElementById('total_other');
    total_other.innerHTML = "";
    total.innerHTML = "";
    total_other.style.border = "";
    total.style.border = "";

}
