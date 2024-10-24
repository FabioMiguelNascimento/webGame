import { Div } from "./elements.js";

export class Player {
    constructor() {
        this.id = 0;
        this.nick = "";
        this.color = "";
        this.health = 100;
        this.special = 0;
        this.isAlive = true;
        this.hasName = false;

        // Criando
        this.playerCtn = Div("player-ctn")
        this.playerBd = Div("player-bd")
        this.playerNick = Div("player-nick")

        // Montando
        this.playerCtn.append(this.playerBd, this.playerNick)
        this.setNick(this.playerNick);
        this.setHealth(this.health);
        this.setSpecial(this.special);
        this.setIsAlive(this.isAlive);
    }

    getId() {
        return this.id;
    }

    getNick() {
        return this.nick;
    }

    getColor() {
        return this.color;
    }

    getHealth() {
        return this.health;
    }

    getSpecial() {
        return this.special;
    }

    getIsAlive() {
        return this.isAlive;
    }

    setId(id) {
        this.id = id;
    }

    setNick(nick) {
        this.nick = nick;
        this.playerNick.text(nick)
    }

    setColor(color) {
        this.color = color;
        this.playerBd.css("background-color", color)
    }

    setHealth(health) {
        this.health = health;
    }

    setSpecial(special) {
        this.special = special;
    }

    setIsAlive(isAlive) {
        this.isAlive = isAlive;
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.setIsAlive(false);
        }
    }

    setSpawn(x, y) {
        this.playerCtn.css({
            top: `${y}px`,
            left: `${x}px`,
        })
    }

    hasNick() {
        this.hasNick = this.nick.trim() !== "";
        return this.hasNick;
    }
    
    askCreateNick() {
        this.modal = Div("ask-md")
        this.modalCtn = Div("ask-md-ctn")
        this.nickInpCtn = Div("ask-md-ctn-inpCtn")
        this.nickLab = Label("ask-inpCtn-lab")
        this.nickInp = Input("ask-inpCtn-inp")
        
        
    }
}