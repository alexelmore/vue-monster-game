Vue.createApp({
  data() {
    return {
        playerHealth:100,
        monsterHealth:100
    };
  },
  methods:{
      // Function for reducing the monster's health
      attackMonster(){
          // Random value that gets taken out of the monster's health
         const attackValue = Math.floor(Math.random() * (12-5)+5)

         this.monsterHealth -= attackValue
      }
  }
}).mount("#game");
