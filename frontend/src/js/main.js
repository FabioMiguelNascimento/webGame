import { Game } from './game.js';
import { Menu } from './menu.js';
import { Lobbys } from './lobbys.js';
import { LobbyCreator } from './lobbyCreator.js';
import { Doom } from './arenas/doomArena.js'
import { Player } from './player.js'
import $ from 'jquery';

const gameInstance = new Game();
const lobbyCreator = new LobbyCreator()
const lobbys = new Lobbys(lobbyCreator)
const menu = new Menu(lobbys);

// const arenaDoom = new Doom();

// const player1 = new Player()
// player1.setId(1)
// player1.setNick("Jogador 1 lorem ipsum dolor sit amet")
// player1.setColor("blue")

// const player2 = new Player()
// player2.setId(2)
// player2.setNick("Jogador 2")
// player2.setColor("green")


// arenaDoom.addPlayer(player1)
// arenaDoom.setPlayerSpawn(player1)
// arenaDoom.getView().append(player1.playerCtn)

// arenaDoom.addPlayer(player2)
// arenaDoom.setPlayerSpawn(player2)
// arenaDoom.getView().append(player2.playerCtn)

const gameContainer = gameInstance.init()

gameContainer.append(menu.getView())
gameContainer.append(lobbys.getView())
gameContainer.append(lobbyCreator.getView())

$("body").append(
  gameContainer);
