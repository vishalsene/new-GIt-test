function totalCost(){
p = document.getElementById("pizza").value;
num = /^[0-9]+$/;
if(p.match(num)){
ptotal = p*19.5;
total = p*19.5;
}
else{
	alert("Must enter a number in first box");
}
b = document.getElementById("burger").value;
if(b.match(num)){
btotal = b*15.5;
total += b*15.5;

}
else{
	alert("Must enter a number in second box");
}
sa = document.getElementById("salad").value;
if(sa.match(num)){
satotal = b*15.5;
total += b*15.5;

}
else{
		alert("Must enter a number in third box");
}
so = document.getElementById("soup").value;
if(so.match(num)){
sototal = so*5;
total += so*5;

}
else{
		alert("Must enter a number in fourth box");
}

document.getElementById("cost").innerHTML = "Pizza (Quantity =" + p +"): $" + ptotal +
"</br>" + "Burger (Quantity =" + b +"): $" + btotal + "</br>" + "Salad (Quantity =" + sa +"): $" + satotal + "</br>" +
"Soup (Quantity =" + so +"): $" + sototal + "</br></br>" + "Final Total: $" + total;
return false;
}

