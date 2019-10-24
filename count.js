	//create a global variable and the it
var down=10;
		var run=setInterval(()=>{
				down-=1; 
			var drp=document.querySelector(".reduce");
				drp.innerHTML=down;
					/*stop timer when it  0*/
					if(down===0){
						clearInterval(run);
							let show=document.querySelector(".load");
						
							show.style.display="block";
					}
					
			},1000
		
		);
		//Time script 
		const time=()=>{
			let greet=new Date().toLocaleTimeString();
				document.getElementById("time").innerHTML=greet;
					if(greet<=12){
						document.getElementById("talk").innerHTML="GOOD MORNING";
					}
					else if(greet>=13 && greet==16){
						document.getElementById("talk").innerHTML="GOOD AFTERNOON";
					
					}
					else{
						document.getElementById("talk").innerHTML="GOOD MORNING";
						
					}
		}
			setInterval(time,1000);
		time();
