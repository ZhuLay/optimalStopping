function send(){var a=document.getElementById("result");a.value="";var b=document.getElementById("first").value/100,c=document.getElementById("back").value/100;1==b&&(b=.999);checkNum(b,c)&&(a.value=Math.round(100*Math.pow(Math.pow(b,2)/(b-c*(1-b)),1/(1-b))),document.getElementById("analysisDiv").setAttribute("style",""),document.getElementById("resultFont1").innerHTML=a.value+"\u500b",document.getElementById("resultFont2").innerHTML=a.value+"%")}
function checkNum(a,b){var c="";1==a?a=.999:1<a?c+="\u7b2c\u4e00\u6b21\u6210\u529f\u7387 \u8acb\u8f38\u5165\u6b63\u78ba\u7684\u767e\u5206\u6bd4\n":0==a&&(c+="\u7b2c\u4e00\u6b21\u6210\u529f\u7387 \u4e0d\u53ef\u70ba0\n");1<b&&(c+="\u56de\u982d\u6210\u529f\u7387 \u8acb\u8f38\u5165\u6b63\u78ba\u7684\u767e\u5206\u6bd4\n");b>=a&&(c+="\u56de\u982d\u6210\u529f\u7387 \u4e0d\u53ef\u4ee5 >= \u7b2c\u4e00\u6b21\u6210\u529f\u7387\n");.099>a-b&&(c+="\u7b2c\u4e00\u6b21\u6210\u529f\u7387 \u8981\u6bd4 \u56de\u982d\u6210\u529f\u7387 \u591a10%\n");
return""!=c?(alert(c),!1):!0};