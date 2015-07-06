head.load("../assets/phaser-official/build/phaser.min.js",
          "../assets/_game/boot.js",
          "../assets/_game/preloader.js",
          "../assets/_game/title.js",
          function readyF(){
    //alert("Hello, World");
    var game = new Phaser.Game("100%", "100%", Phaser.AUTO, '');
    game.state.add('Boot', Adama.Boot);
    game.state.add('Preloader', Adama.Preloader);
    game.state.add('Title', Adama.Title);
    game.state.start('Boot');
});