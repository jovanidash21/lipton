/*
          JJJJJJJJJJJ     OOOOOOOOO     VVVVVVVV           VVVVVVVV   AAA               NNNNNNNN        NNNNNNNNIIIIIIIIII
          J:::::::::J   OO:::::::::OO   V::::::V           V::::::V  A:::A              N:::::::N       N::::::NI::::::::I
          J:::::::::J OO:::::::::::::OO V::::::V           V::::::V A:::::A             N::::::::N      N::::::NI::::::::I
          JJ:::::::JJO:::::::OOO:::::::OV::::::V           V::::::VA:::::::A            N:::::::::N     N::::::NII::::::II
            J:::::J  O::::::O   O::::::O V:::::V           V:::::VA:::::::::A           N::::::::::N    N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O  V:::::V         V:::::VA:::::A:::::A          N:::::::::::N   N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O   V:::::V       V:::::VA:::::A A:::::A         N:::::::N::::N  N::::::N  I::::I  
            J:::::j  O:::::O     O:::::O    V:::::V     V:::::VA:::::A   A:::::A        N::::::N N::::N N::::::N  I::::I  
            J:::::J  O:::::O     O:::::O     V:::::V   V:::::VA:::::A     A:::::A       N::::::N  N::::N:::::::N  I::::I  
JJJJJJJ     J:::::J  O:::::O     O:::::O      V:::::V V:::::VA:::::AAAAAAAAA:::::A      N::::::N   N:::::::::::N  I::::I  
J:::::J     J:::::J  O:::::O     O:::::O       V:::::V:::::VA:::::::::::::::::::::A     N::::::N    N::::::::::N  I::::I  
J::::::J   J::::::J  O::::::O   O::::::O        V:::::::::VA:::::AAAAAAAAAAAAA:::::A    N::::::N     N:::::::::N  I::::I  
J:::::::JJJ:::::::J  O:::::::OOO:::::::O         V:::::::VA:::::A             A:::::A   N::::::N      N::::::::NII::::::II
 JJ:::::::::::::JJ    OO:::::::::::::OO           V:::::VA:::::A               A:::::A  N::::::N       N:::::::NI::::::::I
   JJ:::::::::JJ        OO:::::::::OO              V:::VA:::::A                 A:::::A N::::::N        N::::::NI::::::::I
     JJJJJJJJJ            OOOOOOOOO                 VVVAAAAAAA                   AAAAAAANNNNNNNN         NNNNNNNIIIIIIIIII

*/

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