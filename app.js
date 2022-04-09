// Function for generating a random value 
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  methods: {
    // Function for reducing the monster's health
    attackMonster() {
      // Const refernece to getRandomValue function, which then gets taken out of the monster's health per attack
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth -= attackValue

      // Call attackPlayer function 
      this.attackPlayer()
    },

    // Function for reducing the player's health
    attackPlayer() {
      // Const refernece to getRandomValue function, which then gets taken out of the player's health per attack
      const attackValue = getRandomValue(8, 15)
      this.playerHealth -= attackValue
    }
  }
}).mount("#game");
