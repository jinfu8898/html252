function compute()
{
	var begin = count = document.getElementById('begin').value;
	var number = document.getElementById('number').value;
	var sequence = document.getElementById('sequence').value;
	var total = document.getElementById('total');
	var sum = 0;
	for (i=0;i<number;i++)
	{
		if (i ===0) {
           sum = parseInt(count);
		}else{
		   count = parseInt(count) + parseInt(sequence);
           sum = parseInt(count) + parseInt(sum);
		}

	}
	total.innerHTML=sum;
	total.style.border="1px dashed red";
}

function reset()
{

    document.getElementById('begin').value = "";
	document.getElementById('number').value = "";
	document.getElementById('sequence').value = "";
	var total = document.getElementById('total')
	total.innerHTML="";
	total.style.border="";

}