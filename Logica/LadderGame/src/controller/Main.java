package controller;

import java.util.Scanner;
import model.Board;

/**
 * Main Class, here it's requested the information about number of players and the board dimensions.
 * Also, instantie the controller that run the game.
 * @author Kevin Rondon (kevin.rondon@uao.edu.co)
 */
public class Main {

    /**
     * Main method, execute the purpose of the class.
     * @param args the command line arguments [Default]
     */
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);     //Scanner to request information.
        System.out.println("Inserte el número de jugadores de la partida: ");
        int numPlayers = validateNumber(input);
        System.out.println("Dimensiones del tablero "
                + "\n 1. 5x5"
                + "\n 2. 7x7"
                + "\n 3. 10x10");
        System.out.println("Inserte el número de las dimensiones que desea: ");
        int dimensions = validateNumber(input);   //Variable that contains the dimensions value entered by the user.
        //Validate if the value of the dimensions is correct.
        while(dimensions != 1 && dimensions != 2 && dimensions != 3){
            System.out.println("Por favor inserte un número válido: ");
            dimensions = validateNumber(input);   //Request again the dimensions value.
        }
        Board board = dimensions == 1 ? new Board(5, 5) : dimensions == 2 ? new Board(7, 7): new Board(10, 10);     //Instantie the board with the dimensions chosen.
        GameController gController = new GameController(board, numPlayers);     //Instantie the controller of the game.
    }
    
    /**
     * Method to check if the value entered is a number.
     * @param input object used to request information.
     * @return number entered
     */
    public static int validateNumber(Scanner input){
        String inputTemp = input.nextLine();
        while(!inputTemp.matches("[0-9]+")){
            System.out.println("Por favor inserte un número válido: ");
            inputTemp = input.nextLine();
        }
        int number = Integer.parseInt(inputTemp);
        return number;
    }
}
