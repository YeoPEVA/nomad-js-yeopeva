function printTime() {
              var clock = document.getElementById("clock");           
              var now = new Date();                                               
              var nowTime = now.getFullYear() + "년 " + (now.getMonth()+1) 
			  + "월 " + now.getDate() + "일 " + now.getHours() + "시 " + now.getMinutes() 
			  + "분 " + now.getSeconds() + "초";
              clock.innerHTML = nowTime;           
              setTimeout("printTime()",1000); 
}

window.onload = function() {                         
              printTime();
}