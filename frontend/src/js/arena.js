import { Div } from "./elements.js";
import { Game } from "./game.js";
import { Player } from "./player.js";
import $ from 'jquery';

/**
 * Classe abstrata para criar arenas
 * @abstract
 * @author Fabio Miguel
 */
export class Arena {
    constructor() {
        if (this.constructor === Arena) {
            throw new Error("Can't instantiate abstract class!");
        }
        this.id = 0;
        this.name = "";
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.maxPlayers = 0;
        this.players = [];

        // Criando
        this.arenaCtn = Div("arena-ctn")
    }

    getView() {
        return this.arenaCtn
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getMaxPlayers() {
        return this.maxPlayers;
    }

    getPlayers() {
        return this.players;
    }

    /**
     * Retorna a quantidade de jogadores na arena
     * @returns {number}
     */
    getPlayersCount() {
        return this.players.length;
    }

    setName(name) {
        this.name = name
        this.arenaCtn.addClass(name)
    }

    setWidth(width) {
        this.width = width
        this.arenaCtn.width(this.width)
    }

    setHeight(height) {
        this.height = height;
        this.arenaCtn.height(this.height)
    }

    setMaxPlayers(maxPlayers) {
        this.maxPlayers = maxPlayers;
    }

    setPlayers(players) {
        this.players = players;
    }

    /**
     * Adiciona um jogador à arena
     * @param {Player} player 
     */
    addPlayer(player) {
        if (!this.isFull()) {
            this.players.push(player);
        } else {
            Game.notify("A arena está cheia!");
        }
    }

    /**
     * Remove um jogador da arena
     * @param {Player} player 
     */
    removePlayer(player) {
        this.players = this.players.filter(p => p.id !== player.id);
    }

    setPlayerSpawn(player) {
        const spawnX = Math.floor(Math.random() * this.width);
        const spawnY = Math.floor(Math.random() * this.height);
        player.setSpawn(spawnX, spawnY);
    }

    setSpawn() {
        this.players.forEach(player => {
            this.setPlayerSpawn(player);
        });
    }

    /**
     * Retorna se a arena está cheia
     * @returns {boolean}
     */
    isFull() {
        return this.players.length === this.maxPlayers;
    }

    /**
     * Retorna se a arena está vazia
     * @returns {boolean}
     */
    isEmpty() {
        return this.players.length === 0;
    }
}
