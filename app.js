// Function for generating a random value 
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },
  methods: {
    // Function for reducing the monster's health
    attackMonster() {
      // Increment round
      this.currentRound++

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
    },

    // Function for a special attack
    specialAttack() {
      // Increment round
      this.currentRound++

      // Const refernece to getRandomValue function, which then gets taken out of the monster's health per attack
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth -= attackValue

      // Call attackPlayer function 
      this.attackPlayer()
    }
  },
  computed: {
    // Computed propertis for monster and player health bar styling
    monsterHealthBar() {
      return { width: this.monsterHealth + '%' }
    },
    playerHealthBar() {
      return { width: this.playerHealth + '%' }
    },
    // Computed property for disabling and enabling special attack on every 3rd round
    specialAttackIsAvailable() {
      if (this.currentRound % 3 !== 0) {
        return true;
      } else {
        return false
      }
    }
  }
}).mount("#game");
