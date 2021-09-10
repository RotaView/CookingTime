function PonerBomba(BombaPosicionX, BombaPosicionY, Bombas,a1,a2,a3,a4,Fuego){
    for (var i = 0; i <=960; i++) {//posicion de las bombas
        if(i<=player.x+19 && player.x+19<i+64){
            BombaPosicionX=i;
        }
        if(i<=player.y-10 && player.y-10<i+64){
            BombaPosicionY=i+64;
        }
        i= i+64-1;
    }
    var s = Bombas.create(BombaPosicionX, BombaPosicionY, 'Chile');
    Bombas.callAll('animations.add', 'animations', 'Palpitar', [0,1,2,3], 3, true);
    Bombas.callAll('animations.play', 'animations', 'Palpitar');
    Bombas.setAll('body.immovable', true);
    //s.body.velocity.y=100;
    setTimeout(function(){FuegoExplotar(s,a1,a2,a3,a4,Fuego);s.destroy(true);}, 3000);
}
function FuegoExplotar(s,a1,a2,a3,a4,Fuego){
    //BombaCentro
    var sc = EC.create(s.body.position.x, s.body.position.y, 'ExpCentro');
    EC.callAll('animations.add', 'animations', 'Palpitar', [0,1,2,3,4,3,2,1], 7, true);
    EC.callAll('animations.play', 'animations', 'Palpitar');
    EC.setAll('body.immovable', true);
    setTimeout(function(){sc.destroy(true);}, 2000);

    //BombaAbajo
    if(Fuego==1){
        var s2 = EC.create(s.body.position.x, s.body.position.y+(64), 'ExpPunAba');
        EC.callAll('animations.add', 'animations', 'Palpitar', [0,1,2,3,4,3,2,1], 7, true);
        EC.callAll('animations.play', 'animations', 'Palpitar');
        EC.setAll('body.immovable', true);
        setTimeout(function(){s2.destroy(true);}, 2000);
    }else{
    for (var i = 0; i < Fuego-1 ; i++){

        if (a1==0){
        Explosion2(s,i);
        }
        game.physics.arcade.overlap(Ladrillo, EC, function(){a1=1;}, null, this);  
        game.physics.arcade.overlap(Metal, EC, function(){a1=1;}, null, this); 
    }
    if(a1==0){
        var s2 = EC.create(s.body.position.x, s.body.position.y+(64*(i+1)), 'ExpPunAba');
        EC.callAll('animations.add', 'animations', 'Palpitar', [0,1,2,3,4,3,2,1], 7, true);
        EC.callAll('animations.play', 'animations', 'Palpitar');
        EC.setAll('body.immovable', true);
        setTimeout(function(){s2.destroy(true);}, 2000);
    }
    }
    //BombaArriba
    if(Fuego==1){
        var s3 = EPAr.create(s.body.position.x, s.body.position.y-(64), 'ExpPunAri');
        EPAr.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
        EPAr.callAll('animations.play', 'animations', 'Palpitar1');
        EPAr.setAll('body.immovable', true);
        setTimeout(function(){s3.destroy(true);}, 2000);
    }else{
    for (var i1 = 0; i1 < Fuego-1 ; i1++){

        if (a2==0){
        Explosion3(s,i1);
        }
        game.physics.arcade.overlap(EPAr,Ladrillo, function(){a2=1;}, null, this);  
        game.physics.arcade.overlap(EPAr,Metal, function(){a2=1;}, null, this); 
    }
    if(a2==0){
        var s3 = EPAr.create(s.body.position.x, s.body.position.y-(64*(i1+1)), 'ExpPunAri');
        EPAr.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
        EPAr.callAll('animations.play', 'animations', 'Palpitar1');
        EPAr.setAll('body.immovable', true);
        setTimeout(function(){s3.destroy(true);}, 2000);
    }
    }
    //BombaDerecha
    if(Fuego==1){
        var s4 = EPDe.create(s.body.position.x+64, s.body.position.y, 'ExpPunDer');
        EPDe.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
        EPDe.callAll('animations.play', 'animations', 'Palpitar1');
        EPDe.setAll('body.immovable', true);
        setTimeout(function(){s4.destroy(true);}, 2000);
    }else{
    for (var i2 = 0; i2 < Fuego-1 ; i2++){

        if (a3==0){
        Explosion4(s,i2);
        }
        game.physics.arcade.overlap(EPDe,Ladrillo, function(){a3=1;}, null, this);  
        game.physics.arcade.overlap(EPDe,Metal, function(){a3=1;}, null, this); 
    }
    if(a3==0){
        var s4 = EPDe.create(s.body.position.x+(64*(i2+1)), s.body.position.y, 'ExpPunDer');
        EPDe.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
        EPDe.callAll('animations.play', 'animations', 'Palpitar1');
        EPDe.setAll('body.immovable', true);
        setTimeout(function(){s4.destroy(true);}, 2000);
    }
    }
    //BombaIzquierda
    if(Fuego==1){
        var s5 = EPIz.create(s.body.position.x-64, s.body.position.y, 'ExpPunIzq');
        EPIz.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
        EPIz.callAll('animations.play', 'animations', 'Palpitar1');
        EPIz.setAll('body.immovable', true);
        setTimeout(function(){s5.destroy(true);}, 2000);
    }else{
    for (var i3 = 0; i3 < Fuego-1 ; i3++){

        if (a4==0){
        Explosion5(s,i3);
        }
        game.physics.arcade.overlap(EPIz,Ladrillo, function(){a4=1;}, null, this);  
        game.physics.arcade.overlap(EPIz,Metal, function(){a4=1;}, null, this); 
    }
    if(a4==0){
        var s5 = EPIz.create(s.body.position.x-(64*(i3+1)), s.body.position.y, 'ExpPunIzq');
        EPIz.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
        EPIz.callAll('animations.play', 'animations', 'Palpitar1');
        EPIz.setAll('body.immovable', true);
        setTimeout(function(){s5.destroy(true);}, 2000);
    }
    }
}

function Explosion2(s,i){
        var s1 = EC.create(s.body.position.x, s.body.position.y+(64*(i+1)), 'ExpParAba');
        EC.callAll('animations.add', 'animations', 'Palpitar', [0,1,2,3,4,3,2,1], 7, true);
        EC.callAll('animations.play', 'animations', 'Palpitar');
        EC.setAll('body.immovable', true);
        setTimeout(function(){s1.destroy(true);}, 2000);
}

function Explosion3(s,i1){
    var s11 = EPAr.create(s.body.position.x, s.body.position.y-(64*(i1+1)), 'ExpParAba');
    EPAr.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
    EPAr.callAll('animations.play', 'animations', 'Palpitar1');
    EPAr.setAll('body.immovable', true);
    setTimeout(function(){s11.destroy(true);}, 2000);
}

function Explosion4(s,i2){
    var s12 = EPDe.create(s.body.position.x+(64*(i2+1)), s.body.position.y, 'ExpParDer');
    EPDe.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
    EPDe.callAll('animations.play', 'animations', 'Palpitar1');
    EPDe.setAll('body.immovable', true);
    setTimeout(function(){s12.destroy(true);}, 2000);
}

function Explosion5(s,i3){
    var s13 = EPIz.create(s.body.position.x-(64*(i3+1)), s.body.position.y, 'ExpParIzq');
    EPIz.callAll('animations.add', 'animations', 'Palpitar1', [0,1,2,3,4,3,2,1], 7, true);
    EPIz.callAll('animations.play', 'animations', 'Palpitar1');
    EPIz.setAll('body.immovable', true);
    setTimeout(function(){s13.destroy(true);}, 2000);
}
