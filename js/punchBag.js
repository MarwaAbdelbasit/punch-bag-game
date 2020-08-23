var bomb = new Audio('audio/Explosion.mp3'),
    punch = new Audio('audio/PUNCH.mp3');

new Vue({
  el: '#game',
  data: {
    bag: 'img/bag.png',
    bagBurst: 'img/bag-burst.png',
    ended: false,
    health: 100,
  },
  methods: {
    punch: function() {
      punch.play();
      this.health -= 10;
      if(this.health <= 0) {
        this.ended = true;
        bomb.play();
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }
  }
});
