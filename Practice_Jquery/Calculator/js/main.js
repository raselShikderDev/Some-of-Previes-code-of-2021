function insertNumber(numbers){
	
	var existingNumber = $("#result").val()
	$("#result").val(existingNumber + numbers);
}


function clearResult(){
	$("#result").val("");
}


function calculate(){
	var calculateResult = eval($("#result").val())
	$("#result").val(calculateResult)
}


function delteNumber(){
	var presentValue = $("#result").val();
		if(presentValue!=''){
			$("#result").val(presentValue.slice(0,-1));
		}
}