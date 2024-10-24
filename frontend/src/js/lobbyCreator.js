import { Div, Input, Label } from "./elements.js"
import $ from 'jquery'

export class LobbyCreator {
  constructor() {
    // constructor(lobbysInstance) {
    // this.lobbysInstance = lobbysInstance;

    this.lobbyCreatorCtn = Div("lobCreat-ctn");

    this.inputsCtn = Div("lobCreat-inpCtn");
    this.titleCtn = this.createInputField("Título do Lobby", "Digite o título do lobby", "title").addClass("titleCtn")
    this.descCtn = this.createInputField("Descrição do Lobby", "Digite a descrição do lobby", "description").addClass("descCtn")

    this.lobbyTypeCtn = this.createSelectField("Tipo de Lobby", "Selecione o tipo de lobby", "lobbyType", [
      { value: 'public', text: 'Público' },
      { value: 'private', text: 'Privado' },
      { value: 'friends', text: 'Somente amigos' }
    ]).addClass("lobbyTypeCtn")

    this.inputsCtn.append(this.titleCtn, this.descCtn, this.lobbyTypeCtn);
    this.lobbyCreatorCtn.append(this.inputsCtn);

    this.hideLobbyCreator();

  }

  /**
   * Função para criar um campo de input com label.
   * @param {string} labelText - O texto da label.
   * @param {string} placeholder - Placeholder do input.
   * @param {string} id - ID do input.
   * @returns {jQuery} O container contendo o label e input.
   */
  createInputField(labelText, placeholder, id) {
    const inputContainer = Div("inpCtn");
    const label = Label("inpCtn-label").text(labelText).attr("for", id);
    const input = Input("inpCtn-input").attr("id", id).attr("placeholder", placeholder);

    inputContainer.append(label, input);
    return inputContainer;
  }

  /**
   * Função para criar um campo select (dropdown) com label.
   * @param {string} labelText - O texto da label.
   * @param {string} placeholder - Placeholder do select.
   * @param {string} id - ID do select.
   * @param {Array} options - Array com objetos { value, text } para as opções.
   * @returns {jQuery} O container contendo o label e select.
   */
  createSelectField(labelText, placeholder, id, options) {
    const selectContainer = Div("selectCtn");
    const label = Label("selectCtn-label").text(labelText).attr("for", id);
    const select = $(document.createElement('select')).addClass("selectCtn-select").attr("id", id);

    // Adiciona o placeholder como uma opção desabilitada e selecionada
    const placeholderOption = $(document.createElement('option')).attr("value", "").text(placeholder).attr("disabled", "disabled").attr("selected", "selected");
    select.append(placeholderOption);

    // Adicionando opções ao select
    options.forEach(option => {
      const optionElement = $(document.createElement('option')).attr("value", option.value).text(option.text);
      select.append(optionElement);
    });

    selectContainer.append(label, select);
    return selectContainer;
  }

  getView() {
    return this.lobbyCreatorCtn
  }

  showLobbyCreator() {
    this.lobbyCreatorCtn.css("display", "block");
  }

  hideLobbyCreator() {
    this.lobbyCreatorCtn.css("display", "none");
  }
}