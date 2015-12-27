head.load("../assets/phaser-official/build/phaser.min.js",
          "../_game/boot.js",
          "../_game/preloader.js",
          "../_game/title.js",
          function readyF(){
    //alert("Hello, World");
    var game = new Phaser.Game("100%", "100%", Phaser.AUTO, '');
    game.state.add('Boot', Adama.Boot);
    game.state.add('Preloader', Adama.Preloader);
    game.state.add('Title', Adama.Title);
    game.state.start('Boot');
});