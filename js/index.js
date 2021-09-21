function submitForm(){
 		var error=false;
	$(".req").each(function() {
				if($.trim($(this).val())==""){
					$(this).parent().parent().removeClass('state-error').find('em').remove();
					$(this).parent().parent().addClass('state-error').append('<em class="invalid" for="">'+$(this).attr('data-error')+'</em>');
					error=true;
				}else{
					$(this).parent().parent().removeClass('state-error').find('em').remove();
				}
	    });
	if(!error){
		$("input[name=email_address]").parent().parent().removeClass('state-error').find('em').remove();
		var emailval = $('input[name=email_address]').val();
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    if (!re.test(emailval)) {
        	$("input[name=email_address]").parent().parent().addClass('state-error').append('<em class="invalid" for="">Please enter a VALID E-mail</em>');
			error=true;
        }
		var phone = $('input[name=phone_cell]').val();
		phone = phone.replace(/[^0-9]/g, '');
		$("input[name=phone_cell]").val(phone);
		if ((phone.length != 10 && phone.length != 11) || !(/(07|01|02|08)\d{8,9}/.test(phone))) {
			$("input[name=phone_cell]").parent().parent().removeClass('state-error').find('em').remove();
			$("input[name=phone_cell]").parent().parent().addClass('state-error').append('<em class="invalid" for="">Please enter a VALID contact number</em>');
			error=true;
		}
	}
	if(error){
		return false;
	}else{
		validateMobileNumber($("input[name=phone_cell]").val());
	}
}
function validateForm(){	
	var error=false;
	$(".req").each(function() {
				if($.trim($(this).val())==""){
					$(this).parent().parent().removeClass('state-error').find('em').remove();
					$(this).parent().parent().addClass('state-error').append('<em class="invalid" for="">'+$(this).attr('data-error')+'</em>');
					error=true;
				}else{
					$(this).parent().removeClass('state-error').find('em').remove();
				}
	    });
	if(!error){
		$("input[name=email_address]").parent().parent().removeClass('state-error').find('em').remove();
		var emailval = $('input[name=email_address]').val();
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    if (!re.test(emailval)) {
        	$("input[name=email_address]").parent().parent().addClass('state-error').append('<em class="invalid" for="">Please enter a VALID E-mail</em>');
			error=true;
        }
		var phone = $('input[name=phone_cell]').val();
		phone = phone.replace(/[^0-9]/g, '');
		$("input[name=phone_cell]").val(phone);
		if ((phone.length != 10 && phone.length != 11) || !(/(07|01|02|08)\d{8,9}/.test(phone))) {
			$("input[name=phone_cell]").parent().parent().removeClass('state-error').find('em').remove();
			$("input[name=phone_cell]").parent().parent().addClass('state-error').append('<em class="invalid" for="">Please enter a VALID contact number</em>');
			error=true;
		}
	}
	if(error){
		return false;
	}else{
		return true;
	}
}
$(document).ready(function(e) {

$('input[type=text],input[type=tel],input[type=email],select').on('keypress', function(e){
var code  = e.keyCode || e.which;
    if(code == 13)
    {
e.preventDefault();
        submitForm();
    }
});
		$("input[name=phone_cell]").keydown(function (e) {
        		// Allow: backspace, delete, tab, escape, enter and .
        		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
          		   // Allow: Ctrl+A, Command+A
           		 (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
          		   // Allow: home, end, left, right, down, up
           		 (e.keyCode >= 35 && e.keyCode <= 40)) {
            		     // let it happen, don't do anything
             		    return;
       	 		}
        		// Ensure that it is a number and stop the keypress
        		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
           		 e.preventDefault();
        		}
   		 });
		$(".req").each(function() {
			$(this).blur(function(){
				if($.trim($(this).val())==""){
					$(this).parent().parent().removeClass('state-error').find('em').remove();
					$(this).parent().parent().addClass('state-error').append('<em class="invalid" for="">'+$(this).attr('data-error')+'</em>');
				}else{
					$(this).parent().parent().removeClass('state-error').find('em').remove();
				}
			});
	    	});
		$("input[name=email_address]").blur(function() {	
			var emailval = $('input[name=email_address]').val();
		        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		        if (emailval!="" && !re.test(emailval)) {
				$(this).parent().parent().removeClass('state-error').find('em').remove();
		        	$("input[name=email_address]").parent().parent().addClass('state-error').append('<em class="invalid" for="">Please enter a VALID E-mail</em>');
		        }
		});
		$("input[name=phone_cell]").blur(function() {	
            var phone = $('input[name=phone_cell]').val();
            phone = phone.replace(/[^0-9]/g, '');
            if ((phone.length != 10 && phone.length != 11) || !(/(07|01|02|08)\d{8,9}/.test(phone))) {
                $(this).parent().parent().removeClass('state-error').find('em').remove();
		$("input[name=phone_cell]").parent().parent().addClass('state-error').append('<em class="invalid" for="">Please enter a VALID contact number</em>');
            }
        });
        

		
    });
	
	
	