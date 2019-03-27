console.log("up and running")

////Space Battle\\\\


const USS_Assembly = {
	hull: 20,
	firepower: 5,
	accuracy: .7,

}
USS_Assembly.hull()

const alien_Ship = {
	hull: Math.floor(Math.random() * 3) + 4,
	firepower: Math.floor(Math.random() * 3) + 2,
	accuracy: Math.floor(Math.random() * .6) + .8, //come back to this later
	attack: function (){
		return USS_Assembly.hull - alien_Ship.firepower;

	}

	
}
console.log(alien_Ship.accuracy);
alien_Ship.attack()


const game = () => {
	
}








































