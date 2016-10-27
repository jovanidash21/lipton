function myValidation()
{
	var noinput = ("*Please fill out this field!")
	var invalid = ("*The input is INVALID. Please try again.")
	var odd = ("This Number is ODD")
	var even = ("This Number is EVEN")
	var input = document.getElementById("number").value;
	var inputvalidation = /^([0-9\-\+]{1,6})$/;
	if (input == null || input == "")
	{
		document.getElementById("answer").innerHTML = noinput;
		document.getElementById("answer").style.color = "#cb061a";
		document.getElementById("number").style.boxShadow = "0px 0px 20px #cb061a";
	}
	else if (inputvalidation.test(oddevenform.number.value) == false)
	{
		document.getElementById("answer").innerHTML = invalid;
		document.getElementById("answer").style.color = "#cb061a";
		document.getElementById("number").style.boxShadow = "0px 0px 20px #cb061a";
	}
	else if (input >= 0)
	{
		while (input > 1)
		{
			input = input - 2;
		}
		if (input == 1)
		{
			document.getElementById("answer").innerHTML = odd;
			document.getElementById("answer").style.color = "#000000";
			document.getElementById("number").style.boxShadow = "none";
		}
		else if (input == 0)
		{
			document.getElementById("answer").innerHTML = even;
			document.getElementById("answer").style.color = "#000000";
			document.getElementById("number").style.boxShadow = "none";
		}
		else
		{
			document.getElementById("answer").innerHTML = invalid;
			document.getElementById("answer").style.color = "#cb061a";
			document.getElementById("number").style.boxShadow = "0px 0px 20px #cb061a";
		}
	}
	else if (input == -0 || input == +0)
	{
		document.getElementById("answer").innerHTML = invalid;
		document.getElementById("answer").style.color = "#cb061a";
		document.getElementById("number").style.boxShadow = "0px 0px 20px #cb061a";
	}
	else if (input < 0)
	{
		input = input * -1
		while (input > 1)
		{
			input = input - 2;
		}
		if (input == 1)
		{
			document.getElementById("answer").innerHTML = odd;
			document.getElementById("answer").style.color = "#000000";
			document.getElementById("number").style.boxShadow = "none";
		}
		else if (input == 0)
		{
			document.getElementById("answer").innerHTML = even;
			document.getElementById("answer").style.color = "#000000";
			document.getElementById("number").style.boxShadow = "none";
		}
		else
		{
			document.getElementById("answer").innerHTML = invalid;
			document.getElementById("answer").style.color = "#cb061a";
			document.getElementById("number").style.boxShadow = "0px 0px 20px #cb061a";
		}
	}
	else
	{
		document.getElementById("answer").innerHTML = invalid;
		document.getElementById("answer").style.color = "#cb061a";
		document.getElementById("number").style.boxShadow = "0px 0px 20px #cb061a";
	}
	return false;
}
function myClear()
{
	document.getElementById("answer").innerHTML = '';
	document.getElementById("number").style.boxShadow = "none";
}