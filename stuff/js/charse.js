export default class CharSel extends Phaser.Scene {
    constructor(){
        super({key: 'char'});
    }
    preload(){
        this.load.spritesheet('bg', '/stuff/img/Assets/TitleScreenAndSprites/background.png', {frameWidth:1400, frameHeight:800});
        this.load.spritesheet('b2m', '/stuff/img/Assets/TitleScreenAndSprites/Buttons/back2menu.png', {frameWidth:111, frameHeight:20});
        this.load.image('sign', '/stuff/img/Assets/Sprites/woodframe.png');
        this.load.audio('transition', '/stuff/img/Assets/Sounds/Sound_FX/choose_menu_general_sound_3.mp3');
        this.load.audio('beach', '/stuff/img/Assets/Sounds/Sound_FX/beach.mp3');
        this.load.spritesheet('shiba', '/stuff/img/Assets/Sprites/characters_enemies/shiba/shiba_panting.png', {frameWidth:123, frameHeight:172});
    }
    
    create(){
        this.anims.create({
            key: "bganim",
            frameRate: 1,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("bg", {
                frames: [0,1]
            })
        });

        this.anims.create({
            key: "shibanim",
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("shiba", {
                frames: [0,1,2,3]
            })
        });

        this.add.sprite(700,400, 'bg').play("bganim");
        var buttonback = this.add.sprite(250, 750, 'b2m', );
        buttonback.setScale(4);
        var sign = this.add.image(700,400, 'sign');
        sign.setScale(12);
        var shiba = this.add.sprite(450,400, 'shiba');
        shiba.setScale(1.5);
        this.music = this.sound.add('beach');
        this.music.play({volume: 0.6, loop: true});
        this.music.pauseOnBlur = false;

        buttonback.setInteractive();
        shiba.setInteractive();

        buttonback.on("pointerover", ()=>{
            buttonback.setFrame(1);
            this.sound.play('transition', {volume: 0.6, loop: false});
        })

        buttonback.on("pointerout", ()=>{
            buttonback.setFrame(0);
        })

        buttonback.on("pointerup", ()=>{
            buttonback.setFrame(1);
            this.music.stop();
            this.scene.start('menu');
        })

        shiba.on("pointerover", ()=>{
            shiba.play("shibanim");
            //this.sound.play('transition', {volume: 0.6, loop: false});
        })

        shiba.on("pointerout", ()=>{
            shiba.setFrame(0);
            shiba.anims.stop(null, true);
        })

        shiba.on("pointerup", ()=>{
            shiba.setFrame(1);
            
        })
    }
}