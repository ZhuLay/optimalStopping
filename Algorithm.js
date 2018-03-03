function send(){
	var resultDiv = document.getElementById("result");
	resultDiv.value = "";
	var first = document.getElementById("first").value / 100;
	var back = document.getElementById("back").value / 100;
	if (first == 1){
		first = 0.999;
	}
	if( !checkNum(first,back) ){
		return;
	}
	var temp1 = Math.pow(first,2);
	var temp2 = first - ( back*(1 - first) );
	var temp3 = 1 / (1-first);
	var result = Math.pow(temp1/temp2,temp3);
	resultDiv.value = Math.round(result*100);
	
	
	document.getElementById("analysisDiv").setAttribute("style","");
	document.getElementById("resultFont1").innerHTML = resultDiv.value + "個";
	document.getElementById("resultFont2").innerHTML = resultDiv.value + "%";
}
function checkNum(first,back){
	var errorMsg = "";
	if (first == 1){
		first = 0.999;
	}else if (first > 1){
		errorMsg += "第一次成功率 請輸入正確的百分比\n";
	}else if (first == 0){
		errorMsg += "第一次成功率 不可為0\n";
	}
	if (back > 1){
		errorMsg += "回頭成功率 請輸入正確的百分比\n";
	}
	if (back >= first){
		errorMsg += "回頭成功率 不可以 >= 第一次成功率 喔～\n";
	}
	if (first - back < 0.1){
		errorMsg += "第一次成功率 要比 回頭成功率 多10% 喔～\n";
	}
	
	if (errorMsg != ""){
		alert(errorMsg);
		return false;
	}else{
		return true;
	}
}