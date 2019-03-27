console.log("up and running")

////Space Battle\\\\


const USS_Assembly = {
	hull: 20,
	firepower: 5,
	accuracy: .7,

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
	console.log("Let's fight!");

	},
	createAllienship: function(){
	for (let i = 0; i <=6; i++){
		let alienShip = new AlienShip()
	console.log(alienShip);
	}
	// return alienShip
	},

	end: function(){

	}

}
game.start()
// console.log(alienShip[i]);
game.createAllienship()

//game shouls start the game
//players will take turns
//should have the prompts










































