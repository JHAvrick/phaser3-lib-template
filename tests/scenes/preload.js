import Phaser from 'phaser';


class Preload extends Phaser.Scene {
    constructor() {
        super({key: 'Preload'});
        console.log("Preload...");
    }

    preload(){
    	//LOAD YOUR TEST ASSETS HERE
    }

    create(){ this.scene.start('Main') }

}

export default Preload;