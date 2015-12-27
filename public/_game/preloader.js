(function (Adama,undefined){
    Adama.Preloader = function(game){
        this.background = null;
        this.preloadBar = null;
        this.ready = false;
    };
    Adama.Preloader.prototype = {
        preload: function () {
            this.background = this.add.tileSprite(
                0, 0, 
                this.game.width, this.game.height, 
                'titleBG');
            this.preloadBar = this.add.sprite(
                (this.game.width / 2), 
                (this.game.height / 2), 
                'titlePreloaderBar');
            this.preloadBar.anchor.set(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('titleButtonUpOnline', 
                            '../images/ui/blue_button_up.png');
            this.load.image('titleButtonDownOnline', 
                            '../images/ui/blue_button_down.png');
            this.load.image('titleButtonUpOffline', 
                            '../images/ui/grey_button_up.png');
            this.load.image('titleButtonDownOffline', 
                            '../images/ui/grey_button_down.png');
        },
        create: function () {
            this.state.start('Title');
        }
    };
}(window.Adama = window.Adama || {}));
