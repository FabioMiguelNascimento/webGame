import { Div, Button, Icon } from "./elements.js";

/**
 * Classe que gerencia a tela de Lobbys
 * @author Fabio Miguel
 */
export class Lobbys {
        constructor(lobbyCreator) {
            this.lobbyCreator = lobbyCreator;
            this.lobbys = []

        this.lobbysCtn = Div("lobbys-ctn");

        // this.title = Div("lobby-title")
        // this.lobbyList = Div("lobby-list");
        this.lobbyCreateBtn = Div("lobby-create-btn");
        this.createBtn = Button("create-btn")
        this.createIcon = Icon("create-icon", "pencil");
        
        this.lobbyCreateBtn.append(this.createBtn, this.createIcon);
        this.lobbysCtn.append(this.lobbyCreateBtn);

        this.createBtn.text("Criar Lobby");

        this.hideLobbys();

        this.createBtn.on("click", () => {
            this.hideLobbys();
            this.lobbyCreator.showLobbyCreator();
        });
    }

    showLobbys() {
        this.lobbysCtn.css("display", "block");
    }

    hideLobbys() {
        this.lobbysCtn.css("display", "none");
    }

    getView() {
        return this.lobbysCtn;
    }
}
