$(document).ready(function(){
	if(document.cookie.length!=0){
		var registerArray=document.cookie.split("=");
		var customObject= JSON.parse(registerArray[1]);
		$('#name').val(customObject.name);
		$('#email').val(customObject.email);
		$('#age').val(customObject.age);
		$('#dob').val(customObject.dob);
		$('#address').val(customObject.address);
	}
	$(".add").click(function(){
		$var=$("<tr>"+
			"<th><input type='text' class='size' /></th>"+
			"<th><input type='text' class='size'/></th>"+
			"<th><input type='text' class='size' /></th>"+
			"</tr>");
		$(".coursedetail").after($var);		
		
	});
	$(".substract").click(function(){
		$var=$('.coursetable tr:nth-child(2)');
		$var.remove();
	});
	

});

$(function(){

	var bool=true;
	$('#dob').click(function(){
		if($(this).val()== $(this).prop("defaultValue")){
			$(this).val('');
		}
		$( "#dob" ).datepicker();
	});
	$(':text').click(function(){
		if($(this).val()== $(this).prop("defaultValue")){
			$(this).val('');
		}		
	});
	$('#errorbox').hide();
	var nameerror= false;
	var ageerror= false;
	var doberror= false;
	var emailerror= false;
	var addresserror= false;
	
	$('#name').focusout(function(){
		checkname();
	});
	
	$('#email').focusout(function(){
		checkemail();
	});
	
	$('#age').focusout(function(){
		checkage();
	});
	
	$('#age').focusout(function(){
		checkdob();
	});
	
	$('#address').focusout(function(){
		checkaddress();
	});
	
	function checkname(){
		var username_length=$('#name').val().length;
		if(username_length<3 || username_length>10){
			$('#nameerrorbox').html("Name should have length between 3 and 10 characters");
			$('#nameerrorbox').show();
			nameerror=true;
		}else{
			$('#nameerrorbox').hide();
			nameerror=false;
		}
	}
	function checkemail(){
		var email=$('#email').val();
		var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
		if (!filter.test(email)) {
			$('#emailerrorbox').html("Email is not correct");
			$('#emailerrorbox').show();
			emailerror=true;
		}
		else {
			$('#emailerrorbox').hide();
			emailerror=false;
		}
	}
	function checkage(){
		var age=$('#age').val();
		if(!$.isNumeric(age) || age>100){
			$('#ageerrorbox').html("Age should have numbers only and age should be less than 100");
			$('#ageerrorbox').show();
			ageerror=true;
		}else{
			$('#ageerrorbox').hide();
			ageerror=false;
		}
	}
	function checkdob(){
		var dob_length=$('#dob').val().length;
		if(dob_length==0){
			$('#doberrorbox').html("Please enter a valid date");
			$('#doberrorbox').show();
			doberror=true;
		}else{
			$('#doberrorbox').hide();
			doberror=false;
		}
	}
	function checkaddress(){
		var address=$('#address').val().length;
		if(address<10){
			$('#addresserrorbox').html("Adress should have at least 10 characters");
			$('#addresserrorbox').show();
			addresserror=true;
		}else{
			$('#addresserrorbox').hide();
			addresserror=false;
		}
	}
	
	$('#errorset').addClass('formerrorset');
	$('body').click(function(){
		console.log($('#name').val());
		if(nameerror==false && ($('#name').val()!=$('#name').prop("defaultValue") && $('#name').val()!="") &&
				   emailerror==false && ($('#email').val()!=$('#email').prop("defaultValue") && $('#email').val()!='') &&
				   ageerror==false && ($('#age').val()!=$('#age').prop("defaultValue") && $('#age').val()!='')&&
				   doberror==false && ($('#dob').val()!=$('#dob').prop("defaultValue") && $('#dob').val()!='')&&
				   addresserror==false && ($('#address').val()!=$('#address').prop("defaultValue") && $('#address').val()!='')){
					
					$('#nameresultbox').html("Name:"+$('#name').val());
					$('#emailresultbox').html("Email:"+$('#email').val());
					$('#ageresultbox').html("Age:"+$('#age').val());
					$('#dobresultbox').html("DOB:"+$('#dob').val());
					$('#addressresultbox').html("Adress:"+$('#address').val());
					
					var customObject={}
					customObject.name= $('#name').val();
					customObject.email= $('#email').val();
					customObject.age=$('#age').val();
					customObject.dob= $('#dob').val();
					customObject.address=$('#address').val();
					var jsonString= JSON.stringify(customObject);
					
					document.cookie= "cookiestring="+jsonString+";expires= Fri, 18 November 2016 01:00:00 UTC;";
					console.log(document.cookie);
		}
		
	});
	
	$('#resultset').addClass('formresultset');
	
});