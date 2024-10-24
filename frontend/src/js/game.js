import { Div } from "./elements.js";
import $ from 'jquery'

/**
 * Classe que gerencia o game, contendo as arenas e players e sistema de UI
 */
export class Game {
    constructor() {

        // Elementos HTML
        this.main = $("main");

        // Criando  
        this.content = Div("main-ctn")

        window.document.title = "Web Fighter"    
    }

    init() {
        return this.content
    }
}
