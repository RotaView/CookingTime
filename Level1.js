        //----------DECLARAR VARIABLES----------
        var player;
        var Fondo;
        var Fondo2;
        var cursors;
        var Estado;
        var VelocidadInicialPlayer;
        var VelocidadPlayer;//Velocidad Extra
        var CountVelocidadPlayer;       
        var Fuego; //TamañoExplosion                
        var NumBombas; //Numero de bombas           
        var NumBombasActuales; //Numero de bombas  

        var VelocidadEnemigo1;
        var VelocidadEnemigo2;

        var map;
        var layer;
        var Metal;
        var Ladrillo;

        var enemigo1s;
        var enemigo1;

        var enemigo2s;
        var enemigo2;

        var Bombas;
        var BombaTime=0;
        var BombaPosicionX;
        var BombaPosicionY;

        var EC; //Explosion centro
        var EPAr; //Explosion Parte Arriba
        var EPDe; //Explosion Parte Derecha
        var EPIz; //Explosion Parte Izquierda

        var a1;
        var a2;
        var a3;
        var a4;

        var vivo;
        var Puerta;

        var onPausa=false;

        var botonPausa;
        var botonMenu;
        var botonRetry;

        var gameOverLetrero;
        var WinLetrero;

        var Cafe;
        var Canasto;
        var Salsa;

        var timer;
        var total;
        var Puntaje;

        var text;
        var text2;
        var text3;
        var text4;
        var text5;
        var text6;
        var text7;

        var HeladoT;
        var PizzaT;
        var CafeT;
        var CanastoT;
        var SalsaT;

        var zz;

        var MusicJugar;
        var ClickSound;
        var PonerBombaSound;
        var ExplosionSound;
        var MuerteEnemigoSound;
        var MuerteJugadorSound;
        var PowerUpSound;
        var LevelCompleteSound;

        var Level1=
        {
                


                preload:function () //----------LOAD----------
                {
                    //----------INICIALIZAR VARIABLES--------------
                    Estado = 'cero';
                    VelocidadInicialPlayer = 60;    //Valor default=50
                    VelocidadPlayer = 0;            //Valor default=0
                    CountVelocidadPlayer=0;         //Valor del contador de Cafe 
                    Fuego = 1;                      //Valor default=1
                    NumBombas = 1;                  //Valor default=1
                    NumBombasActuales = 0;          //Valor default=0
                    VelocidadEnemigo1=100;          //Valor default=100
                    VelocidadEnemigo2=40;           //Valor default=40
                    BombaTime=0;
                    a1=0;
                    a2=0;
                    a3=0;
                    a4=0;
                    vivo=0;                         //Valor default=0
                    total=0;
                    Puntaje=0;
                    text = null;
                    text2 = null;
                    text3 = null;
                    text4 = null;
                    text5 = null;
                    text6 = null;
                    text7 = null;
                    zz=0;
                    EmpezarMusicaJuego=0;
                    //----------FIN INICIALIZAR VARIABLES----------
        
                    game.load.image('Fondo', './Images/Fondo2.png');
                    game.load.spritesheet('chef', './Images/spritesheetChef.png', 38, 64);

                    game.load.tilemap('map', './Assets/Mapa1.csv', null, Phaser.Tilemap.CSV);
                    game.load.image('BloqueMetal', './Assets/Metal1.png');
                    game.load.image('BloqueLadrillo', './Assets/Ladrillo1.png');

                    game.load.spritesheet('Pizza', './Images/spritesheetPizza.png', 40, 64);
                    game.load.spritesheet('Helado', './Images/spritesheetHelado.png', 36, 64);
                    game.load.spritesheet('Chile', './Images/spritesheetChile.png', 64, 64);
                    game.load.spritesheet('Puerta', './Images/spritesheetPuerta.png', 64, 64);

                    game.load.spritesheet('ExpCentro', './Images/spritesheet_Centro.png', 64, 64);
                    game.load.spritesheet('ExpParAba', './Images/spritesheet_Parte_Aba.png', 64, 64);
                    game.load.spritesheet('ExpParAri', './Images/spritesheet_Parte_Ari.png', 64, 64);
                    game.load.spritesheet('ExpParDer', './Images/spritesheet_Parte_Der.png', 64, 64);
                    game.load.spritesheet('ExpParIzq', './Images/spritesheet_Parte_Izq.png', 64, 64);
                    game.load.spritesheet('ExpPunAba', './Images/spritesheet_Punta_Aba.png', 64, 64);
                    game.load.spritesheet('ExpPunAri', './Images/spritesheet_Punta_Ari.png', 64, 64);
                    game.load.spritesheet('ExpPunDer', './Images/spritesheet_Punta_Der.png', 64, 64);
                    game.load.spritesheet('ExpPunIzq', './Images/spritesheet_Punta_Izq.png', 64, 64);

                    game.load.spritesheet('botonPausa', './Images/spritesheetPause.png', 188, 68);
                    game.load.spritesheet('botonMenu', './Images/spritesheetMenu.png', 188, 68);
                    game.load.spritesheet('botonRetry', './Images/spritesheetRetry.png', 188, 68);
                    game.load.image('YouLose', './Images/YouLose.png');
                    game.load.image('YouWin', './Images/YouWin.png');

                    game.load.spritesheet('Cafe', './Images/spritesheetCafe.png', 64, 64);
                    game.load.spritesheet('Canasto', './Images/spritesheetCanasto.png', 64, 64);
                    game.load.spritesheet('Salsa', './Images/spritesheetSalsa.png', 64, 64);

                    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

                    game.load.image('HeladoT', './Images/HeladoT.png');
                    game.load.image('PizzaT', './Images/PizzaT.png');
                    game.load.image('CafeT', './Images/CafeT.png');
                    game.load.image('CanastoT', './Images/CanastoT.png');
                    game.load.image('SalsaT', './Images/SalsaT.png');

                    game.load.audio('MusicJugar', './Sounds/MusicaJuegoHappy8bitLoop.mp3');
                    game.load.audio('ClickSound', './Sounds/Click.wav');
                    game.load.audio('PonerBombaSound', './Sounds/PonerBombaSound.wav');
                    game.load.audio('ExplosionSound', './Sounds/ExplosionSound.wav');
                    game.load.audio('MuerteEnemigoSound', './Sounds/MuerteEnemigoSound.wav');
                    game.load.audio('MuerteJugadorSound', './Sounds/MuerteJugadorSound.wav');
                    game.load.audio('PowerUpSound', './Sounds/PowerUpSound.wav');
                    game.load.audio('LevelCompleteSound', './Sounds/LevelCompleteSound.wav');

                }
                ,
                create:function() //----------CREATE----------
                {
                    Fondo = game.add.image(0,0,'Fondo'); //Imagen de Fondo
                    game.stage.backgroundColor = '#00ffff'; //Color de fondo

                    //Puerta
                    Puerta=game.add.sprite(64*10, 64*7, 'Puerta');
                    //Puerta=game.add.sprite(64*7, 64*9, 'Puerta'); //PosicionPruebas
                    game.physics.arcade.enable(Puerta);
                    Puerta.enableBody = true;
                    Puerta.body.immovable = true;

                    //PowerUps1
                    Cafe = game.add.physicsGroup();
                    Cafe.physicsBodyType = Phaser.Physics.ARCADE;
                    Cafe.enableBody = true;
                    Cafe.create(64*2, 64*5, 'Cafe');
                    Cafe.create(64*5, 64*11, 'Cafe');
                    Cafe.create(64*9, 64*6, 'Cafe');
                    Cafe.create(64*11, 64*13, 'Cafe');
                    Cafe.setAll('body.immovable', true);
                    Cafe.callAll('animations.add', 'animations', 'Titilar', [0,1], 5, true);
                    Cafe.callAll('animations.play', 'animations', 'Titilar');
                    Cafe.forEach(Cafee => {
                        Cafee.body.setSize(50, 50, 7, 7); //ajustar collider de todas los Helados
                        
                    });
                    ACafe = Cafe.getRandom();
                    //PowerUps2
                    Canasto = game.add.physicsGroup();
                    Canasto.physicsBodyType = Phaser.Physics.ARCADE;
                    Canasto.enableBody = true;
                    Canasto.create(64*1, 64*7, 'Canasto');
                    Canasto.create(64*10, 64*3, 'Canasto');
                    Canasto.create(64*11, 64*11, 'Canasto');
                    Canasto.setAll('body.immovable', true);
                    Canasto.callAll('animations.add', 'animations', 'Titilar', [0,1], 5, true);
                    Canasto.callAll('animations.play', 'animations', 'Titilar');
                    Canasto.forEach(Canastoo => {
                        Canastoo.body.setSize(50, 50, 7, 7); //ajustar collider de todas los Helados
                        
                    });
                    ACanasto = Canasto.getRandom();
                    //PowerUps3
                    Salsa = game.add.physicsGroup();
                    Salsa.physicsBodyType = Phaser.Physics.ARCADE;
                    Salsa.enableBody = true;
                    Salsa.create(64*3, 64*3, 'Salsa');
                    Salsa.create(64*5, 64*5, 'Salsa');
                    Salsa.create(64*8, 64*13, 'Salsa');
                    Salsa.create(64*11, 64*8, 'Salsa');
                    Salsa.setAll('body.immovable', true);
                    Salsa.callAll('animations.add', 'animations', 'Titilar', [0,1], 5, true);
                    Salsa.callAll('animations.play', 'animations', 'Titilar');
                    Salsa.forEach(Salsaa => {
                        Salsaa.body.setSize(50, 50, 7, 7); //ajustar collider de todas los Helados
                        
                    });
                    ASalsa = Salsa.getRandom();

                    //TiledMap
                    map = game.add.tilemap('map', 64, 64);
                    //  Create our layer
                    layer = map.createLayer(0);
                    //  Resize the world
                    layer.resizeWorld();
                    //  This isn't totally accurate, but it'll do for now
                    //map.setCollision(7);

                    //Grupo Metal
                    Metal = game.add.physicsGroup();
                    //map.createFromTitles(qu voy a cambiar, por que lo cambio, que le pongo, layer, el grupo);
                    map.createFromTiles(7, -1, 'BloqueMetal', layer, Metal);
                    Metal.setAll('body.immovable', true);
                    //Grupo Ladrillo
                    Ladrillo = game.add.physicsGroup();
                    //map.createFromTitles(qu voy a cambiar, por que lo cambio, que le pongo, layer, el grupo);
                    map.createFromTiles(9, -1, 'BloqueLadrillo', layer, Ladrillo);
                    Ladrillo.setAll('body.immovable', true);
        
                    game.physics.startSystem(Phaser.Physics.ARCADE); //Inicial Fisicas
                    
                    //Explosion
                    EC = game.add.physicsGroup();
                    EC.physicsBodyType = Phaser.Physics.ARCADE;
                    EC.enableBody = true;

                    EPAr = game.add.physicsGroup();
                    EPAr.physicsBodyType = Phaser.Physics.ARCADE;
                    EPAr.enableBody = true;

                    EPDe = game.add.physicsGroup();
                    EPDe.physicsBodyType = Phaser.Physics.ARCADE;
                    EPDe.enableBody = true;

                    EPIz = game.add.physicsGroup();
                    EPIz.physicsBodyType = Phaser.Physics.ARCADE;
                    EPIz.enableBody = true;

                    //Jugador
                    player = game.add.sprite(75, 190, 'chef'); //Agregar al jugador
                    //player = game.add.sprite(384, 640, 'chef'); //Jugador Poscion Pruebas
                    //Animaciones jugador
                    player.animations.add('Derecha', [9, 10, 11, 8], 10, true);
                    player.animations.add('Izquierda', [17, 18, 19, 16], 10, true);
                    player.animations.add('Arriba', [5, 6, 7, 4], 10, true);
                    player.animations.add('Abajo', [1, 2, 3, 0], 10, true);
                    player.animations.add('Morir', [12, 13, 14, 15], 10, true);
                    game.physics.enable(player, Phaser.Physics.ARCADE); //Ponerle Fisicas de Phaser al jugador
                    player.body.collideWorldBounds = true; //Jugador Colicione con los bordes del canvas
                    player.body.setSize(32, 32, 3, 32);//Collider Jugador

                    cursors = game.input.keyboard.createCursorKeys(); //Poner las flechas del techado en la variable cursors
                    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]); //Capturar el boton espacio

                    //Enemigo 1 Pizza
                    enemigo1s = game.add.group();
                    enemigo1s.physicsBodyType = Phaser.Physics.ARCADE;
                    enemigo1s.enableBody = true;
                    //map.createFromTitles(qu voy a cambiar, por que lo cambio, que le pongo, layer, el grupo);
                    map.createFromTiles(2, -1, 'Pizza', layer,  enemigo1s);
                    //  Animaciones de la Pizza
                    enemigo1s.callAll('animations.add', 'animations', 'PizzaNor', [13,14,15,16], 5, true);
                    enemigo1s.callAll('animations.add', 'animations', 'PizzaDer', [0,1,2,3], 5, true);
                    enemigo1s.callAll('animations.add', 'animations', 'PizzaIzq', [9,10,11,12], 5, true);
                    enemigo1s.callAll('animations.add', 'animations', 'Morir', [4,5,6,7,8], 3, true);
                    enemigo1s.callAll('animations.play', 'animations', 'PizzaNor');
                    enemigo1s.forEach(enemigo1 => {
                        enemigo1.body.setSize(32, 38, 4, 25); //ajustar collider de todas las pizas
                    });
                    PizzaActual = enemigo1s.getRandom(); //Escoger una pizza al azar

                    //Enemigo 2 Helado
                    enemigo2s = game.add.group();
                    enemigo2s.physicsBodyType = Phaser.Physics.ARCADE;
                    enemigo2s.enableBody = true;
                    //map.createFromTitles(qu voy a cambiar, por que lo cambio, que le pongo, layer, el grupo);
                    map.createFromTiles(3, -1, 'Helado', layer,  enemigo2s);
                    //  Animaciones del Helado
                    enemigo2s.callAll('animations.add', 'animations', 'HeladoNor', [13,14,15,16], 5, true);
                    enemigo2s.callAll('animations.add', 'animations', 'HeladoDer', [0,1,2,3], 5, true);
                    enemigo2s.callAll('animations.add', 'animations', 'HeladoIzq', [9,10,11,12], 5, true);
                    enemigo2s.callAll('animations.add', 'animations', 'Morir', [4,5,6,7,8], 3, true);
                    enemigo2s.callAll('animations.play', 'animations', 'HeladoNor');
                    enemigo2s.forEach(enemigo2 => {
                        enemigo2.body.setSize(30, 36, 3, 24); //ajustar collider de todas los Helados
                        
                    });
                    HeladoActual = enemigo2s.getRandom(); //Escoger un Helado al azar

                    //Bombas1 Chile
                    Bombas = game.add.physicsGroup();
                    Bombas.physicsBodyType = Phaser.Physics.ARCADE;
                    Bombas.enableBody = true;
                        /*var b = Bombas.create(0, 0, 'Chile');
                        b.name = 'BombaTest';
                        b.exists = false;
                        b.visible = true;
                    BombaActual = Bombas.getRandom();*/ //Ver Collider de las bombas

                                        //Timer
                                        timer = game.time.create(false); //crear timer
                                        timer.loop(1000, this.updateCounter, this); //que el evento ocurra cada 1s
                                        timer.start(); //arancar el timer
                    
                    //Interfaz-----
                    HeladoT = game.add.image((64*6)+4, 64+4, 'HeladoT');
                    HeladoT.scale.set(0.875);
                    PizzaT = game.add.image((64*9)+4, 64+4, 'PizzaT');
                    PizzaT.scale.set(0.875);
                    CafeT = game.add.image((64*3)+4, 0+4, 'CafeT');
                    CafeT.scale.set(0.875);
                    CanastoT = game.add.image((64*6)+4, 0+4, 'CanastoT');
                    CanastoT.scale.set(0.875);
                    SalsaT = game.add.image((64*9)+4, 0+4, 'SalsaT');
                    SalsaT.scale.set(0.875);
                    var style = { font: "Press Start 2P", fill: "#000000", 
                    align: "left", //'center' or 'right'
                    wordWrap: true, wordWrapWidth: 600 };
                    text = game.add.text(10, -35+64, "\nTIME:"+total+"s",style);
                    text.fontSize = 20;
                    text.lineSpacing = 20;
                    text2 = game.add.text(10, -5+64, "\nSCORE:"+Puntaje,style);
                    text2.fontSize = 20;
                    text2.lineSpacing = 20;
                    text3 = game.add.text(64*10+10, -40, "\nX: j"+(Fuego-1),style);
                    text3.fontSize = 40;
                    text3.lineSpacing = 10;
                    text4 = game.add.text(64*7+10, -40, "\nX: j"+(NumBombas-1),style);
                    text4.fontSize = 40;
                    text4.lineSpacing = 10;
                    text5 = game.add.text(64*4+10, -40, "\nX: j"+(CountVelocidadPlayer),style);
                    text5.fontSize = 40;
                    text5.lineSpacing = 10;
                    text6 = game.add.text(64*10+10, -40+64, "\nX: j"+(enemigo1s.length),style);
                    text6.fontSize = 40;
                    text6.lineSpacing = 10;
                    text7 = game.add.text(64*7+10, -40+64, "\nX: j"+(enemigo2s.length),style);
                    text7.fontSize = 40;
                    text7.lineSpacing = 10;

                    //Letreros y Botones
                    botonPausa = game.add.button(950-184, 32, 'botonPausa', this.Pausa, this, 1, 0, 2);
                    gameOverLetrero = game.add.image(0, 0, 'YouLose');
                    WinLetrero = game.add.image(0, 0, 'YouWin');
                    botonMenu = game.add.button(480+20, 700, 'botonMenu', this.IrMenu, this, 1, 0, 2);
                    botonRetry = game.add.button(480-188-20, 700, 'botonRetry', this.Retry, this, 1, 0, 2);
                    gameOverLetrero.visible = false;
                    WinLetrero.visible = false;
                    botonMenu.visible = false;
                    botonRetry.visible = false;

                    //--sonidos
                    MusicJugar = game.add.audio('MusicJugar');
                    MusicJugar.loop = true;
                    ClickSound= game.add.audio('ClickSound');
                    PonerBombaSound= game.add.audio('PonerBombaSound');
                    ExplosionSound= game.add.audio('ExplosionSound');
                    MuerteEnemigoSound= game.add.audio('MuerteEnemigoSound');
                    MuerteJugadorSound= game.add.audio('MuerteJugadorSound');
                    PowerUpSound= game.add.audio('PowerUpSound');
                    LevelCompleteSound= game.add.audio('LevelCompleteSound');

                }
                ,
                update:function() //----------UPDTE----------
                {
                    if(EmpezarMusicaJuego==0){
                        MusicJugar.play();
                        EmpezarMusicaJuego=1;
                    }
                    if(vivo==0){
                    text.text = "\nTIME:"+total+"s";
                    text2.text = "\nSCORE:"+Puntaje;
                    text3.text = "\nX"+(Fuego-1);
                    text4.text = "\nX"+(NumBombas-1);
                    text5.text = "\nX"+(CountVelocidadPlayer);
                    text6.text = "\nX"+(enemigo1s.length);
                    text7.text = "\nX"+(enemigo2s.length);
                    }
                    //console.log(total);
                    enemigo1s.forEach(this.IA,this);
                    enemigo2s.forEach(this.IA2,this);
                    player.body.velocity.x = 0;
                    player.body.velocity.y = 0;
                    //ganar
                    if(enemigo1s.length==0 && enemigo2s.length==0){
                        Puerta.frame = 1;
                        game.physics.arcade.overlap(player, Puerta, this.GanarGame, null, this);
                    }
                    
                    //PowerUps
                    game.physics.arcade.overlap(Cafe, player, this.PowerVelocidad, null, this);
                    game.physics.arcade.overlap(Canasto, player, this.PowerChile, null, this);
                    game.physics.arcade.overlap(Salsa, player, this.PowerFuego, null, this);

                    //Colisiones Jugador
                    if(vivo==0){
                    game.physics.arcade.collide(player, layer);
                    game.physics.arcade.collide(player, Ladrillo);
                    game.physics.arcade.collide(player, Metal);
                    game.physics.arcade.collide(player, Bombas);
                    game.physics.arcade.overlap(player, EC, this.Morirjugador, null, this);
                    game.physics.arcade.overlap(player, EPAr, this.Morirjugador, null, this);
                    game.physics.arcade.overlap(player, EPDe, this.Morirjugador, null, this);
                    game.physics.arcade.overlap(player, EPIz, this.Morirjugador, null, this);
                    game.physics.arcade.overlap(player, enemigo1s, this.Morirjugador, null, this);
                    game.physics.arcade.overlap(player, enemigo2s, this.Morirjugador, null, this);
                    }
                    game.physics.arcade.collide(enemigo1s, Ladrillo);
                    game.physics.arcade.collide(enemigo1s, Metal);
                    game.physics.arcade.collide(enemigo1s, Bombas);
                    game.physics.arcade.overlap(enemigo2s, Metal, this.IA3, null, this);
                    game.physics.arcade.overlap(enemigo2s, Bombas, this.IA3, null, this);

                    game.physics.arcade.overlap(EC, Metal, this.ExpMetal, null, this);
                    game.physics.arcade.overlap(Ladrillo, EC, this.ExpLadrillo, null, this);
                    game.physics.arcade.overlap(EPAr, Metal, this.ExpMetal1, null, this);
                    game.physics.arcade.overlap(Ladrillo, EPAr, this.ExpLadrillo1, null, this);
                    game.physics.arcade.overlap(EPDe, Metal, this.ExpMetal2, null, this);
                    game.physics.arcade.overlap(Ladrillo, EPDe, this.ExpLadrillo2, null, this);
                    game.physics.arcade.overlap(EPIz, Metal, this.ExpMetal3, null, this);
                    game.physics.arcade.overlap(Ladrillo, EPIz, this.ExpLadrillo3, null, this);

                    game.physics.arcade.overlap(enemigo2s, EC, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo2s, EPAr, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo2s, EPDe, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo2s, EPIz, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo1s, EC, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo1s, EPAr, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo1s, EPDe, this.EliminarObj, null, this);
                    game.physics.arcade.overlap(enemigo1s, EPIz, this.EliminarObj, null, this);
                    
                    //Controles
                if(vivo==0){
                    if (cursors.left.isDown)
                    {
                        player.body.velocity.x = -VelocidadInicialPlayer-VelocidadPlayer;
        
                        if (Estado != 'Izquierda')
                        {
                            player.animations.play('Izquierda');
                            Estado = 'Izquierda';
                        }
                    }
                    else if (cursors.right.isDown)
                    {
                        player.body.velocity.x = VelocidadInicialPlayer+VelocidadPlayer;
        
                        if (Estado != 'Derecha')
                        {
                            player.animations.play('Derecha');
                            Estado = 'Derecha';
                        }
                    }
                    else if (cursors.up.isDown)
                    {
                        player.body.velocity.y = -VelocidadInicialPlayer-VelocidadPlayer;
        
                        if (Estado != 'Arriba')
                        {
                            player.animations.play('Arriba');
                            Estado = 'Arriba';
                        }
                    }
                    else if (cursors.down.isDown)
                    {
                        player.body.velocity.y = VelocidadInicialPlayer+VelocidadPlayer;
        
                        if (Estado != 'Abajo')
                        {
                            player.animations.play('Abajo');
                            Estado = 'Abajo';
                        }
                    }
                    else
                    {
                        if (Estado != 'asd')
                        {
                            player.animations.stop();
        
                            if (Estado == 'Izquierda')
                            {
                                player.frame = 16;
                            }
                            else if(Estado == 'Derecha')
                            {
                                player.frame = 8;
                            }
                            else if(Estado == 'Arriba')
                            {
                                player.frame = 4;
                            }
                            else if(Estado == 'Abajo')
                            {
                                player.frame = 0;
                            }
                            Estado = 'asd';
                        }
                    }
                    
                    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
                    {
                        if(NumBombas>NumBombasActuales){
                            if (game.time.now > BombaTime) //Crar la bomba
                            {
                            PonerBombaSound.play();
                            NumBombasActuales=NumBombasActuales+1;
                            PonerBomba(BombaPosicionX, BombaPosicionY, Bombas,a1,a2,a3,a4,Fuego);
                            BombaTime = game.time.now + 400;
                            setTimeout(function(){NumBombasActuales=NumBombasActuales-1;ExplosionSound.play();}, 3000);
                            }
                        }
                    }
                }
                },
                //----------OTRAS FUNCIONES----------
                render:function()
                {
                    /*
                    game.debug.body(player);
                    game.debug.body(ASalsa);
                    game.debug.body(ACanasto);
                    game.debug.body(ACafe);
                    game.debug.body(PizzaActual);
                    */
                }
                ,
                IA:function  (enemigoLocal){
                    if(Estado == 'Izquierda'){
                        enemigoLocal.animations.play('PizzaIzq');
                        enemigoLocal.body.velocity.x=-VelocidadEnemigo1;
                    }else if (Estado == 'Derecha'){
                        enemigoLocal.animations.play('PizzaDer');
                        enemigoLocal.body.velocity.x=VelocidadEnemigo1;
                    }else if (Estado == 'Arriba'){
                        enemigoLocal.animations.play('PizzaNor');
                        enemigoLocal.body.velocity.y=-VelocidadEnemigo1;
                    }else if (Estado == 'Abajo'){
                        enemigoLocal.animations.play('PizzaNor');
                        enemigoLocal.body.velocity.y=VelocidadEnemigo1;
                    }
        
                }
                ,
                IA2:function  (enemigoLocal2) {
                    if(Estado== 'cero'){
                        enemigoLocal2.body.velocity.x=-VelocidadEnemigo2;
                        enemigoLocal2.animations.play('HeladoIzq');
                    }
                }
                ,
                IA3:function  (enemigoLocal2) {
                        enemigoLocal2.body.velocity.x=enemigoLocal2.body.velocity.x*-1;
                        if(enemigoLocal2.body.velocity.x<0){
                            enemigoLocal2.animations.play('HeladoIzq');
                        }else{
                            enemigoLocal2.animations.play('HeladoDer');
                        }
                }
                ,
                ExpLadrillo:function (Ladrillo1){
                    Ladrillo1.kill();
                    Puntaje=Puntaje+100;
                }
                ,
                ExpMetal:function (Ladrillo2){
                    Ladrillo2.kill();
                }
                ,
                ExpLadrillo1:function (Ladrillo3){
                    Ladrillo3.kill();
                    Puntaje=Puntaje+100;
                }
                ,
                ExpMetal1:function (Ladrillo4){
                    Ladrillo4.kill();
                }
                ,
                ExpLadrillo2:function (Ladrillo5){
                    Ladrillo5.kill();
                    Puntaje=Puntaje+100;
                }
                ,
                ExpMetal2:function (Ladrillo6){
                    Ladrillo6.kill();
                }
                ,
                ExpLadrillo3:function (Ladrillo7){
                    Ladrillo7.kill();
                    Puntaje=Puntaje+100;
                }
                ,
                ExpMetal3:function (Ladrillo8){
                    Ladrillo8.kill();
                }

                ,
                EliminarObj:function (Obj){
                    Obj.body.velocity.x=0;
                    Obj.body.velocity.y=0;
                    Obj.animations.play('Morir');
                    this.EliminarObj2(Obj);            
                }
                ,
                EliminarObj2:function (Obj){
                    setTimeout(function(){Obj.destroy(true);zz=0;}, 1500); 
                    this.SumarPuntos();

                }
                ,
                Morirjugador:function (Obj){
                    MusicJugar.stop();
                    MuerteJugadorSound.play();
                    Obj.body.velocity.x=0;
                    Obj.body.velocity.y=0;
                    Obj.animations.play('Morir');
                    vivo=1;
                    gameOverLetrero.visible = true;
                    botonMenu.visible = true;
                    botonRetry.visible = true;
                }
                ,
                GanarGame:function (Obj){
                    Obj.kill();
                    MusicJugar.stop();
                    LevelCompleteSound.play();
                    vivo=1;
                    WinLetrero.visible = true;
                    botonMenu.visible = true;
                    botonRetry.visible = true;

                }
                ,
                Pausa:function (){
                    ClickSound.play();
                    onPausa=!onPausa;
                    game.paused=onPausa;          
                }
                ,
                Retry:function (){
                    ClickSound.play();
                    MusicJugar.stop();
                    game.state.start("Level1",Level1);         
                }
                ,
                IrMenu:function (){
                    ClickSound.play();
                    MusicJugar.stop(); 
                    game.state.start("Menu",Menu);
                         
                }
                ,
                PowerVelocidad:function (pu,au){
                    PowerUpSound.play();
                    //pu.kill();
                    au.kill();
                    VelocidadPlayer=VelocidadPlayer+30;
                    CountVelocidadPlayer=CountVelocidadPlayer+1;
                    Puntaje=Puntaje+500;
                }
                ,
                PowerChile:function (pu,au){
                    PowerUpSound.play();
                    //pu.kill();
                    au.kill();
                    NumBombas=NumBombas+1; 
                    Puntaje=Puntaje+500; 
                }
                ,
                PowerFuego:function (pu,au){
                    PowerUpSound.play();
                    //pu.kill();
                    au.kill();
                    Fuego=Fuego+1;
                    Puntaje=Puntaje+500;
                }
                ,
                updateCounter:function(){
                    total++;
                }
                ,
                SumarPuntos:function(){
                    if(zz==0){
                        MuerteEnemigoSound.play();
                        Puntaje=Puntaje+1000;
                        zz=1;
                    }
                }




        }