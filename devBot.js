function introl(){
				const ask=prompt("what is your name ?");
				
					$("h6").html("hello"+" "+ask+" "+"am Roh-Bot");
					
			}
		const voice=()=>{
	window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
	const recognition=new SpeechRecognition();
	recognition.lang="en_us";
	recognition.onresult=(talk)=>{
	const SpeechToText=talk.results [0][0].transcript;
			
			if(SpeechToText=='Time'){
				setInterval(function(){
					let say=new Date().toLocaleTimeString();
					$(".out").text(say);
						
				},1000);
				  
			} else if(SpeechToText=='who are you'){
				const ans=["i am yhoung AI","I am Dev bot","I am Roh-Bot"];
					let pick=ans[Math.floor(Math.random()*3)];
					$("#reply").text(pick);
			} if(SpeechToText=='black'){
				$("body").css("background-color","black");
			} else if(SpeechToText=="white"){
				$("body").css("background-color","white");
			}
			if(SpeechToText=="nice to meet you"){
				const rep=["Nice to meet you too","ooh thanks pal","you are kind ","same so how was your day","I love your attitude","ooh am tired"];
					var reply=rep[Math.ceil(Math.random()*6)];
					$("#reply").text(reply);
			}
			else if(SpeechToText=="good"){
				$("#reply").text("awesome");
			}if(SpeechToText=="browser") {
					alert(`your are using \t ${navigator.appName}`)
			} else if(SpeechToText=="version"){
				alert(`your are using \t ${navigator.appVersion}`)
			}if(SpeechToText=="hello" || "Good morning" || "Good afternoon" || "Good evening"){
				const put=["same","Good day","how are you doing ?"
					 ];
					 const chop=put[Math.floor(Math.random()*4)];	
					$("#reply").text(chop);
			}else if(SpeechToText=="am fine" || "fine"){
				$("#reply").text("Good to hear");
			} if(SpeechToText=="play"){
			//show music (maroon 5 memories)
			var aud=document.getElementsByTagName("audio")[0];
			aud.style.display="block";
			//play the music
			aud.loop=true; 
			aud.play();
			}
			else if(SpeechToText==""){
				alert("you did not say anything");
			}if(SpeechToText=="photo"){
				var drop=document.querySelector(".img-thumbnail").style. display="block";
			}
			else{
				$(".form-control").css("font-weight","bold")
					$(".form-control").val(SpeechToText);
			}
	}
	
	recognition.start();
	 }
	 	
	  
	
	 //more updates still coming 
	 //bot still under construction 