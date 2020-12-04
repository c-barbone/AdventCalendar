var myCal = document.getElementById("adventCal");
var currentDate = new Date();

function Door(calendar, day, j) {

	this.jour = j;
	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
  	this.adventPicture = messages[j-1][0];
  
	this.x = ( 0.04 * calendar.width + ((day- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height) );

	this.content = function() { 
		
		var node = document.createElement("li");
		document.getElementById("adventDoors").appendChild(node);
		node.id = "door" + this.jour;
		node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

		var innerNode = document.createElement("a");
		document.getElementById("door" + this.jour).appendChild(innerNode);
		innerNode.innerHTML = this.jour;
		innerNode.href = "#";

    var innerPicture = document.createElement("li");
    document.getElementById("adventDoors").appendChild(innerPicture);
    innerPicture.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";
	innerPicture.innerHTML = "<img class='rotate' src="+this.adventPicture+" width='100%' height='100%'>";
	if(!localStorage.getItem("jour"+j+"")){innerPicture.style.display = "none";}
		else{innerPicture.style.display='block';}
    

    
		if( ( currentDate.getMonth() + 1 ) < 12 || currentDate.getDate() < this.jour ) {
			innerNode.className = "disabled";
			innerNode.onclick = function() {
				return false;
			}
		} else {
			innerNode.onclick = function() {
        
          /*
          ** MUSIQUE DE NOël
          */
		let adventMusic = messages[j-1][1];
          let audioPlayer = document.createElement("audio");
          audioPlayer.src = adventMusic;
          audioPlayer.type = 'audio/mpeg';
          audioPlayer.autoplay = true;
          audioPlayer.style = "display:none;";
        
          document.body.appendChild(audioPlayer);
		  localStorage.setItem("jour"+j+"",j);
          
        
        innerPicture.style.display='block';
				return false;
			}
		}	
	};

}

(function() {
	console.log(myCase)
	var doors = [];
	var j=0;
	for(var i = 0; i < 24; i++) {
		j=myCase[i]
		console.log(j);
		doors[i] = new Door(myCal, i+1 , j);
		doors[i].content();

	}

	return doors;
})();



