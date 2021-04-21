package controller;

import java.util.LinkedList;
import model.Board;
import model.BoardObject;

/**
 * Class that controls the game, this is the core of the game functions.
 * @author Kevin Rondon (kevin.rondon@uao.edu.co)
 */
public final class GameController {
    //Parameters 
    private final Board board;  
    private final LinkedList<Integer> playersPosition;
    //Parameters that controls states of the game.
    private int actPlayer;
    private boolean isFinished;

    /**
     * Class constructor, instantiate all the variables and the needed information.
     * @param board object that represent the board information.
     * @param numPlayers indicates the number of players.
     */
    public GameController(Board board, int numPlayers) {
        this.board = board;
        playersPosition = new LinkedList<>();
        actPlayer = 0;
        isFinished = false;
        createPlayers(numPlayers);
        System.out.println("Se inicia la partida con " + playersPosition.size() + " jugadores");
        iteration();    //Call the first iteration.
    }

    /**
     * Method to fill the linkedlist with the number of players and instantie the 0 position on the board.
     * @param numPlayers  indicates the number of players.
     */
    public void createPlayers(int numPlayers) {
        for (int i = 0; i < numPlayers; i++) {
            playersPosition.add(0);
        }
    }

    /**
     * Method that represents a turn of the game.
     */
    public void iteration() {
        //Random dice roll
        int dice = (int) (Math.random() * 6) + 1;
        System.out.println("Dado arroja " + dice);
        //Calculate the next position of the actual player.
        int futPosition = playersPosition.get(actPlayer) + dice;
        if(futPosition > board.getNumCells()){
            System.out.println("El jugador " + (actPlayer+1) + " supera la casilla " + board.getNumCells());
            futPosition =  board.getNumCells() - (futPosition - board.getNumCells());
            playersPosition.set(actPlayer, futPosition);
            System.out.println("El jugador "+ (actPlayer+1) +" retrocede al cuadro " + playersPosition.get(actPlayer));
        }else if(futPosition == board.getNumCells()){
            System.out.println("El jugador "+ (actPlayer+1) +" ha llegado al cuadro " + board.getNumCells());
            isFinished = true;
        }
        else{
            playersPosition.set(actPlayer, futPosition);
            System.out.println("El jugador " + (actPlayer+1) + " avanza al cuadro " + playersPosition.get(actPlayer));
        }
        
        verifyIsOnObject(); //Call the method that verifies if player is on a ladder or snake.
        //Check the next player turn.
        if(actPlayer < playersPosition.size()-1){
            actPlayer++;
        }else{
            actPlayer = 0;
        }
        //Check if the game is finished.
        if(!isFinished){
            iteration();
        }else{
            System.out.println("Fin");
        }
    }
    
    /**
     * Method that check if the player is on board object, namely, if the player is on cell that change its position. 
     * The board object can be ladder or snake.
     */
    public void verifyIsOnObject (){
        LinkedList<BoardObject> objectsTemp = board.getObjects();
        for(int i = 0; i< objectsTemp.size(); i++){
            if(objectsTemp.get(i).getInitPosition() == playersPosition.get(actPlayer)){
                if(objectsTemp.get(i).getType() == 0){  
                    //For ladders
                    playersPosition.set(actPlayer, objectsTemp.get(i).getFinalPosition());
                    System.out.println("El jugador " + (actPlayer+1) + " sube por escalera al cuadro " + playersPosition.get(actPlayer));
                    break;
                }else if(objectsTemp.get(i).getType() == 1){    
                    //For snakes
                    playersPosition.set(actPlayer, objectsTemp.get(i).getFinalPosition());
                    System.out.println("El jugador " + (actPlayer+1) + " desciende por serpiente al cuadro " + playersPosition.get(actPlayer));
                    break;
                }
            }
        }
    }
}
