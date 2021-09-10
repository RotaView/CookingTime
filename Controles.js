var Pantalla1;
var Pantalla2;
var Pantalla3;
var Pantalla4;
var Pantalla5;

var numPantalla;

var MusicMenu;
var ClickSound;

var botonSiguiente;
var botonMenu;

var Controles=
{
    preload:function () //----------LOAD----------
    {
        EmpezarMusicaMenu=0;

        numPantalla=1;
        game.load.image('Pantalla1', './Images/Pantalla1.png');
        game.load.image('Pantalla2', './Images/Pantalla2.png');
        game.load.image('pantalla3', './Images/pantalla3.png');
        game.load.image('pantalla4', './Images/pantalla4.png');
        game.load.image('pantalla5', './Images/pantalla5.png');

        game.load.spritesheet('botonMenu', './Images/spritesheetMenu.png', 188, 68);
        game.load.spritesheet('botonSiguiente', './Images/spritesheetSiguiente.png', 188, 68);

        game.load.audio('MusicMenu', './Sounds/MusicaMenuIttyBitty8Bit.mp3');
        game.load.audio('ClickSound', './Sounds/Click.wav');
    
    }
    ,
    create:function() //----------CREATE----------
    {
        Pantalla1 = game.add.image(0, 0, 'Pantalla1');
        Pantalla2 = game.add.image(0, 0, 'Pantalla2');
        Pantalla3 = game.add.image(0, 0, 'Pantalla3');
        Pantalla4 = game.add.image(0, 0, 'Pantalla4');
        Pantalla5 = game.add.image(0, 0, 'Pantalla5');
        Pantalla1.visible = true;
        Pantalla2.visible = false;
        Pantalla3.visible = false;
        Pantalla4.visible = false;
        Pantalla5.visible = false;

        botonSiguiente = game.add.button(950-188-20, 810, 'botonSiguiente', this.IrSiguiente, this, 1, 0, 2);
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
    ,
    IrSiguiente:function (){
        ClickSound.play();
        numPantalla=numPantalla+1;
        if(numPantalla==1){
            Pantalla5.visible = false;
            Pantalla1.visible = true;
        }else if(numPantalla==2){
            Pantalla1.visible = false;
            Pantalla2.visible = true;
        }else if(numPantalla==3){
            Pantalla2.visible = false;
            Pantalla3.visible = true;
        }else if(numPantalla==4){
            Pantalla3.visible = false;
            Pantalla4.visible = true;
        }else if(numPantalla==5){
            Pantalla4.visible = false;
            Pantalla5.visible = true;
        }else if(numPantalla==6){
            numPantalla=1;
            Pantalla5.visible = false;
            Pantalla1.visible = true;
        }
    }

}