Bouffe.LE_Preloader = function(game) {};
Bouffe.LE_Preloader.prototype = {
    init: function(arg) {
        this.levelData = arg;
    },
	preload: function() {
            this.load.image('sky', 'assets/sky.png');
            this.load.image('background1', 'assets/Background1.png');
            this.load.image('background2', 'assets/background2.png');
            this.load.image('background3', 'assets/background3.png');
            this.load.image('background4', 'assets/background4.png');
            this.load.image('background5', 'assets/Background5.png');
            this.load.image('background6', 'assets/background6.png');
            this.load.image('background7', 'assets/background7.png');
            this.load.image('platform1', 'assets/platform1.png');
            this.load.image('platform2', 'assets/platform2.png');
            this.load.image('platform3', 'assets/platform3.png');
            this.load.image('platform4', 'assets/platform4.png');
            this.load.image('bumper', 'assets/Bumper.png');
            this.load.image('steak', 'assets/Steak.png');
            this.load.image('banane', 'assets/banana.png');
            this.load.image('patate', 'assets/patate.png');
            this.load.image('carotte', 'assets/carotte.png');
            this.load.image('magikarp', 'assets/poisson.png');
            this.load.image('poulet', 'assets/poulet.png');
            this.load.image('nicolas', 'assets/sel.png');
            this.load.image('haricot', 'assets/flageolaient.png');
            this.load.image('saucisson', 'assets/saucisson test.png');
            this.load.image('andrew', 'assets/Burger.png');
            this.load.image('cornetto', 'assets/glace.png');
            this.load.image('mensonge', 'assets/GATAL.png');
            this.load.image('sprite', 'assets/sodo.png');
			this.load.image('screen-mainmenu', 'assets/MainMenu.png');
			this.load.image('select','assets/select.png');
            this.load.image('bPlateforme','assets/levelEditor/bPlateforme.png');
            this.load.image('bExporter','assets/levelEditor/bExporter.png');
            this.load.image('bBouffe','assets/levelEditor/bBouffe.png');
            this.load.image('bJunkfood','assets/levelEditor/bJunkfood.png');
            this.load.image('bBumpers','assets/levelEditor/bBumpers.png');
            this.load.image('bDelete','assets/levelEditor/bDelete.png');
            this.load.image('menuPlatform','assets/levelEditor/menuPlatform.png');
            this.load.image('menuBouffe','assets/levelEditor/menuBouffe.png');
            this.load.image('menuJunkfood','assets/levelEditor/menuJunkfood.png');
			this.load.spritesheet('button-start', 'assets/button-start.png', 146, 51);
			this.load.spritesheet('button-dude', 'assets/boutondude.png', 100, 100);
			this.load.spritesheet('button-dudette', 'assets/boutondudette.png', 100, 100);
            this.load.spritesheet('dude', 'assets/dude.png', 32, 36);
			this.load.spritesheet('dudette', 'assets/dudette.png', 32, 36);
			this.load.json('level-one', 'levels/lvl1.json');
	},
	create: function() {
		this.game.state.start('LevelEditor',false,false,this.levelData);
	}
};
