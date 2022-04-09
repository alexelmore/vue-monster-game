// Function for generating a random value 
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      heals: 2,
      specialAttacks: 2,
      results: '',
      gameOver: false
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
      // Call checkGameStatus function
      this.checkGameStatus()
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
      // Decrement specialAttacks
      this.specialAttacks = this.specialAttacks - 1;
      // Const refernece to getRandomValue function, which then gets taken out of the monster's health per attack
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth -= attackValue
      // Call attackPlayer function 
      this.attackPlayer()
      // Call checkGameStatus function
      this.checkGameStatus()
    },

    // Function to heal player
    healPlayer() {
      // Increment round
      this.currentRound++
      // Decrement availableHeals
      this.heals = this.heals - 1
      // Const refernece to getRandomValue function, which then gets added  to the player's health
      const healthValue = getRandomValue(10, 25)
      if (this.playerHealth + healthValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healthValue;
      }
      // Call attackPlayer function 
      this.attackPlayer()
      // Call checkGameStatus function
      this.checkGameStatus()
    },

    // Function that checks the game status and ends it when the monster, the player or both reach 0 health or below
    checkGameStatus() {
      if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
        if (this.playerHealth > 0 && this.monsterHealth <= 0) {
          this.results = 'Great Job! You Won!'
        } else if (this.playerHealth <= 0 && this.monsterHealth > 0) {
          this.results = 'Sorry! The Monster Won'
        } else {
          this.results = 'It Is A Draw!'
        }
        this.gameOver = true
      }
    },

    // Function asking player if they would like to play another game
    playAgain() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.heals = 2;
      this.specialAttacks = 2
      this.gameOver = false
    },

    // Function the gets called if player decides to surrender
    bigLoser() {
      this.playerHealth = 0;
      this.checkGameStatus()
    }
  },
  computed: {
    // Computed properties for monster and player health bar styling
    monsterHealthBar() {
      if (this.monsterHealth <= 0) {
        return { width: 0 + '%' }
      } else {
        return { width: this.monsterHealth + '%' }
      }

    },
    playerHealthBar() {
      if (this.playerHealth <= 0) {
        return { width: 0 + '%' }
      } else {
        return { width: this.playerHealth + '%' }
      }
    },
    // Computed property for disabling and enabling special attack on every 3rd round
    specialAttackIsAvailable() {
      if (this.specialAttacks === 0) {
        return false;
      } else {
        return true
      }
    },
    // Computed property tracking available heals 
    canHeal() {
      if (this.heals === 0) {
        return false
      } else {
        return true
      }
    },
  },


}).mount("#game");
