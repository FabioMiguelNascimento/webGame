import { Div, Button, Icon } from "./elements.js"

/**
 * Classe que gerencia o menu do game
 * @author Fabio Miguel
 */
export class Menu {
    constructor(lobbys, player) {

        this.lobbys = lobbys
        this.players = player
        // Contruindo
        this.menuCtn = Div("menu-ctn")
        this.mainTitle = Div("menu-title")
        this.btnsCtn = Div("menu-btns-ctn")
        this.lobbysBtnCtn = Div("menu-btn-ctn")
        this.settiingsBtnCtn = Div("menu-btn-ctn")
        this.settingsIcon = Icon("iconSettings", "cog")
        this.lobbysIcon = Icon("iconLobbys", "globe")
        this.lobbysBtn = Button("menu-btn lobbys")
        this.settiingsBtn = Button("menu-btn settings")

        
        // Adicionando
        this.lobbysBtnCtn.append(this.lobbysIcon, this.lobbysBtn)
        this.settiingsBtnCtn.append(this.settingsIcon, this.settiingsBtn)
        this.btnsCtn.append(this.lobbysBtnCtn,this.settiingsBtnCtn)
        this.menuCtn.append(this.mainTitle, this.btnsCtn)

        // Configurando
        this.lobbysBtn.text("Lobbys")
        this.settiingsBtn.text("Profile")
        this.mainTitle.text("WEB Fighter")

        this.lobbysBtn.on("click", () => {
            if(this.player.config.hasName){
                this.hideMenu();
                this.lobbys.showLobbys();
            } this.player.createName()
        });
    }

    // Esconde o menu
    hideMenu() {
        this.menuCtn.css("display", "none");
    }

    // Mostra o menu (caso necessário no futuro)
    showMenu() {
        this.menuCtn.css("display", "block");
    }

    // Retorna a view do menu
    getView() {
        return this.menuCtn;
    }
}