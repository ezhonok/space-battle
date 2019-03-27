console.log("up and running")

////Space Battle\\\\


const USS_Assembly = {
	hull: 20,
	firepower: 5,
	accuracy: .7,
	attack: function(){
		console.log("attacked current alienship");
	}
}
// USS_Assembly.hull()

class AlienShip {
	constructor (){
	this.hull = Math.floor(Math.random() * 3) + 4;
	this.firepower =Math.floor(Math.random() * 3) + 2;
	this.accuracy = (Math.random() * (.8 - .6) + .6).toFixed(1);
	this.attack = function (){
		// return (USS_Assembly.hull - AlienShip.firepower)
		}
	}
}
// const alienShip1 = new AlienShip()
// console.log(alienShip1);

// console.log(alien_Ship.accuracy);
// alien_Ship.attack()


const game = {
	start: function(){
		const greeting = prompt("Somewhere in Cattus Galaxy, you are cruisng along in your brand new spaceship, curled up by the fireplace with a cup of tea when >>><<!!!BAM!!!>><<< You are being attacked by an evil alien Cockroach spaceship!!! What do you do?! Type DEFEND MY SHIP to fight or TAIL BETWEEN LEGS to retreat and go back to safety")
		if (greeting === "DEFEND MY SHIP") {
			console.log("You got it! Let's kill them bugs!");
		
		if (greeting === "TAIL BETWEEN LEGS") 
			console.log("Well, I guess you are going home....");
		} else { console.log("Hit REFRESH and Type either TAIL BETWEEN LEGS or DEFEND MY SHIP")

		}
		},
	createAllienship: function(){
	for (let i = 0; i <=6; i++){
		let alienShip = new AlienShip()
	console.log(alienShip);
	}
	
	},
	createPlayerShip: function(){
		const confirm = prompt (`Your ship has ${USS_Assembly.hull} hp and ${USS_Assembly.firepower} attack points. Type OK to fight`);
			if (confirm === "OK"){
				this.createAllienship()
			}
		},
	end: function(){

	}

}
game.start()
// console.log(alienShip[i]);
game.createPlayerShip()

//game shouls start the game
//players will take turns
//should have the prompts










































