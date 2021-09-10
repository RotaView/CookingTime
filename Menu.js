var ImgMenu;
var botonPlay;
var botonControles;
var botonCreditos;

var MusicMenu;
var ClickSound;

var Menu=
{
    preload:function () //----------LOAD----------
    {
        EmpezarMusicaMenu=0; 
        game.load.image('FondoMenu', './Images/Menu.png');

        game.load.spritesheet('botonPlay', './Images/spritesheetPlay.png', 188, 68);
        game.load.spritesheet('botonControles', './Images/spritesheetControls.png', 188, 68);
        game.load.spritesheet('botonCreditos', './Images/spritesheetCredits.png', 188, 68);
        game.load.audio('MusicMenu', './Sounds/MusicaMenuIttyBitty8Bit.mp3');
        game.load.audio('ClickSound', './Sounds/Click.wav');

    }
    ,
    create:function() //----------CREATE----------
    {
        ImgMenu = game.add.image(0, 0, 'FondoMenu');

        botonPlay = game.add.button(610, 500, 'botonPlay', this.IrJugar, this, 1, 0, 2);
        botonControles = game.add.button(610, 600, 'botonControles', this.IrControles, this, 1, 0, 2);
        botonCreditos = game.add.button(610, 700, 'botonCreditos', this.IrCreditos, this, 1, 0, 2);

        //--sonidos
        MusicMenu = game.add.audio('MusicMenu');
        MusicMenu.loop = true;
        ClickSound= game.add.audio('ClickSound');
    }
    ,
    update:function() //----------UPDTE----------
    {
        if(EmpezarMusicaMenu==0){
        MusicMenu.play();
        EmpezarMusicaMenu=1;
        }
    }
    ,
    IrJugar:function()
    {
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Level1",Level1); 
    }
    ,
    IrControles:function()
    {
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Controles",Controles);
    }
    ,
    IrCreditos:function()
    {
        ClickSound.play();
        MusicMenu.stop();
        game.state.start("Creditos",Creditos);
    }

}