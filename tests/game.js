import Phaser from 'phaser';


/**
 * IMPORT YOUR PLUGIN HERE AND ADD IT TO THE GAME CONIFG
 *
 *  import <PluginName> from '../build/<plugin-name>';
 */

/**
 * Scenes
 */
import Preload from './scenes/preload';
import Main from './scenes/main';

/**
 * Set up game config and create scenes
 */
const config = {
    type: Phaser.WEBGL,
    parent: 'game-container',
    width: 400,
    height: 800,
    scene: [
        Preload,
        Main
    ]
};

const game = new Phaser.Game(config);