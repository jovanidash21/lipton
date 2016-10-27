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

var image1 = new Image()
	image1.src="Images/Slideshow/1.jpg"
var image2 = new Image()
	image2.src="Images/Slideshow/2.jpg"
var image3 = new Image()
	image3.src="Images/Slideshow/3.jpg"
function mySlide()
{
	document.images.slideshow.src=eval("image"+numberImage+".src")
	setTimeout("mySlide()",5000)
	if(numberImage < 3)
	{
		numberImage = numberImage + 1
	}
	else
	{
		numberImage = 1
	}
}
function myValidation()
{
	var noinput = ("<img src=\../Images/Logo/ExclamationPoint.png\>" + "*Please fill out this field!")
	var invalidemail = ("<img src=\../Images/Logo/ExclamationPoint.png\>" + "*Invalid Email Address. Please try again.")
	var invalidzipcode = ("<img src=\../Images/Logo/ExclamationPoint.png\>" + "Invalid Zip Code. Please try again.")
	var invaliddate = ("<img src=\../Images/Logo/ExclamationPoint.png\>" + "*Invalid Date. Please try again.")
	var invalidcontactnumber = ("<img src=\../Images/Logo/ExclamationPoint.png\>" + "*Invalid Contact Number. Please try again.")
	var emailaddress = signupform.emailaddress.value;
	var firstname = signupform.firstname.value;
	var lastname = signupform.lastname.value;
	var address = signupform.address.value;
	var city = signupform.city.value;
	var province = signupform.province.value;
	var zipcode = signupform.zipcode.value;
	var birthday = signupform.birthday.value;
	var contactnumber = signupform.contactnumber.value;
	var emailaddressvalidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var zipcodevalidation = /^([0-9]{4})$/;
	var birthdayvalidation = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
	var contactnumbervalidation = /^([0-9\+]{1,12})$/;
	if (
			(emailaddress == null || emailaddress == "") ||
			(firstname == null || firstname == "") ||
			(lastname == null || lastname == "") ||
			(address == null || address == "") ||
			(city == null || city == "") ||
			(province == "") ||
			(zipcode == null || zipcode == "") ||
			(birthday == null || birthday == "") ||
			(contactnumber == null || contactnumber == "") ||
			(emailaddressvalidation.test(signupform.emailaddress.value) == false) ||
			(zipcodevalidation.test(signupform.zipcode.value) == false) ||
			(birthdayvalidation.test(signupform.birthday.value) == false) ||
			(contactnumbervalidation.test(signupform.contactnumber.value) == false)
		)
	{
		if (emailaddress == null || emailaddress == "") 
		{
			document.getElementById("noemailaddress").innerHTML = noinput;
			document.getElementById("emailaddress").style.borderColor = "#cb061a";
		}
		else if (emailaddressvalidation.test(signupform.emailaddress.value) == false)
		{
			document.getElementById("emailaddress").style.borderColor = "#cb061a";
			document.getElementById("noemailaddress").innerHTML = invalidemail;
		}
		else
		{
			document.getElementById("noemailaddress").innerHTML = '';
			document.getElementById("emailaddress").style.borderColor = "#000000";
		}
		if (firstname == null || firstname == "")
		{
			document.getElementById("nofirstname").innerHTML = noinput;
			document.getElementById("firstname").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nofirstname").innerHTML = '';
			document.getElementById("firstname").style.borderColor = "#000000";
		}
		if (lastname == null || lastname == "")
		{
			document.getElementById("nolastname").innerHTML = noinput;
			document.getElementById("lastname").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nolastname").innerHTML = '';
			document.getElementById("lastname").style.borderColor = "#000000";
		}
		if (address == null || address == "")
		{
			document.getElementById("noaddress").innerHTML = noinput;
			document.getElementById("address").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("noaddress").innerHTML = '';
			document.getElementById("address").style.borderColor = "#000000";
		}
		if (city == null || city == "")
		{
			document.getElementById("nocity").innerHTML = noinput;
			document.getElementById("city").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nocity").innerHTML = '';
			document.getElementById("city").style.borderColor = "#000000";
		}
		if (province == "") 
		{
			document.getElementById("noprovince").innerHTML = noinput;
			document.getElementById("province").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("noprovince").innerHTML = '';
			document.getElementById("province").style.borderColor = "#000000";
		}
		if (zipcode == null || zipcode == "")
		{
			document.getElementById("nozipcode").innerHTML = noinput;
			document.getElementById("zipcode").style.borderColor = "#cb061a";
		}
		else if (zipcodevalidation.test(signupform.zipcode.value) == false)
		{
			document.getElementById("nozipcode").innerHTML = invalidzipcode;
			document.getElementById("zipcode").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nozipcode").innerHTML = '';
			document.getElementById("zipcode").style.borderColor = "#000000";
		}
		if (birthday == null || birthday == "")
		{
			document.getElementById("nobirthday").innerHTML = noinput;
			document.getElementById("birthday").style.borderColor = "#cb061a";
		}
		else if (birthdayvalidation.test(signupform.birthday.value) == false)
		{
			document.getElementById("birthday").style.borderColor = "#cb061a";
			document.getElementById("nobirthday").innerHTML = invaliddate;
		}
		else
		{
			document.getElementById("nobirthday").innerHTML = '';
			document.getElementById("birthday").style.borderColor = "#000000";
		}
		if (contactnumber == null || contactnumber == "") 
		{
			document.getElementById("nocontactnumber").innerHTML = noinput;
			document.getElementById("contactnumber").style.borderColor = "#cb061a";
		}
		else if (contactnumbervalidation.test(signupform.contactnumber.value) == false)
		{
			document.getElementById("nocontactnumber").innerHTML = invalidcontactnumber;
			document.getElementById("contactnumber").style.borderColor = "#cb061a";
		}
		else
		{
			document.getElementById("nocontactnumber").innerHTML = '';
			document.getElementById("contactnumber").style.borderColor = "#000000";
		}
		return false;
	}
	else
	{
		alert("Success!!!")
		return true;
	}
}