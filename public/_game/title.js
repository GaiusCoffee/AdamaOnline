(function (Adama,undefined){
    Adama.Title = function(game){
        this.background = null;
        this.titleButtonOnline = null;
        this.titleButtonOffline = null;
    };
    Adama.Title.prototype = {
        create: function () {
            this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'titleBG');
            this.titleButtonOnline = this.add.sprite(
                (this.game.width / 2), 
                (this.game.height / 1.5), 
                'titleButtonUpOnline');
            this.titleButtonOnline.anchor.set(0.5, 0);
            this.titleButtonOffline = this.add.sprite(
                (this.game.width / 2), 
                (this.game.height / 1.3), 
                'titleButtonUpOffline');
            this.titleButtonOffline.anchor.set(0.5, 0);
        },
        update: function() {
            // Do some nice funky main menu effect here
        },
        resize: function (width, height) {
            this.bg.width = width;
            this.bg.height = height;            
            this.titleButtonOnline.x = (this.game.width / 2);
            this.titleButtonOnline.y = (this.game.height / 1.5);
            this.titleButtonOffline.x = (this.game.width / 2);
            this.titleButtonOffline.y = (this.game.height / 1.3);
        }
    };
}(window.Adama = window.Adama || {}));
