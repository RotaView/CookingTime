var Pantalla6;

var MusicMenu;
var ClickSound;

var botonMenu;

var Creditos=
{
    preload:function () //----------LOAD----------
    {
        EmpezarMusicaMenu=0;

        game.load.image('Pantalla6', './Images/pantalla6.png');

        game.load.spritesheet('botonMenu', './Images/spritesheetMenu.png', 188, 68);

        game.load.audio('MusicMenu', './Sounds/MusicaMenuIttyBitty8Bit.mp3');
        game.load.audio('ClickSound', './Sounds/Click.wav');
    
    }
    ,
    create:function() //----------CREATE----------
    {
        Pantalla6 = game.add.image(0, 0, 'Pantalla6');

        botonMenu = game.add.button(20, 810, 'botonMenu', this.IrMenu, this, 1, 0, 2);

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
    IrMenu:function (){
        ClickSound.play();
        MusicMenu.stop(); 
        game.state.start("Menu",Menu);  
    }

}