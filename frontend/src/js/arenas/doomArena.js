import {Arena} from '../arena.js'

export class Doom extends Arena {
    constructor() {
        super();
        this.id = 1;
        this.name = "Doom";
        this.type = "FPS";
        this.width = 640;
        this.height = 480;
        this.maxPlayers = 20;
        this.players = [];

        this.setWidth(this.width)
        this.setHeight(this.height)
        this.setName(this.name)
    }

    
}