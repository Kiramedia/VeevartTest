package model;

import java.util.LinkedList;

/**
 * Class that represents board information.
 * @author Kevin Rondon (kevin.rondon@uao.edu.co)
 */
public final class Board {
    //Dimension parameters
    private final int width;
    private final int height;
    //Objects like ladders and snakes
    private final LinkedList<BoardObject> objects;        
    
    /**
     * Class constructor, instantiate all the variables and the needed information.
     * @param width horizontal number of cells.
     * @param height vertical number of cells.
     */
    public Board(int width, int height) {
        this.width = width;
        this.height = height;
        objects = createObjects(width, height);
    }
    
    /**
     * Create board objects.
     * @param width horizontal number of cells.
     * @param height vertical number of cells.
     * @return the objects list result that depend of the dimensions.
     */
    public LinkedList<BoardObject> createObjects(int width, int height){
        LinkedList<BoardObject> resultObjects = new LinkedList<>();
        
        if(width == 5 && height == 5){      //For 5x5 dimensions
            //Ladders objects
            resultObjects.add(new BoardObject(3, 11, 0));
            resultObjects.add(new BoardObject(6, 17, 0));
            resultObjects.add(new BoardObject(9, 18, 0));
            resultObjects.add(new BoardObject(10, 12, 0));
            //Snakes objects
            resultObjects.add(new BoardObject(14, 4, 1));
            resultObjects.add(new BoardObject(19, 8, 1));
            resultObjects.add(new BoardObject(22, 20, 1));
            resultObjects.add(new BoardObject(24, 16, 1));
        }else if(width == 7 && height == 7){    //For 7x7 dimensions
            //Ladders objects
            resultObjects.add(new BoardObject(2, 17, 0));
            resultObjects.add(new BoardObject(9, 24, 0));
            resultObjects.add(new BoardObject(11, 25, 0));
            resultObjects.add(new BoardObject(21, 37, 0));
            resultObjects.add(new BoardObject(30, 45, 0));
            //Snakes objects
            resultObjects.add(new BoardObject(12, 4, 1));
            resultObjects.add(new BoardObject(23, 8, 1));
            resultObjects.add(new BoardObject(27, 13, 1));
            resultObjects.add(new BoardObject(39, 10, 1));
            resultObjects.add(new BoardObject(48, 35, 1));
        }else if(width == 10 && height == 10){  //For 10x10 dimensions
            //Ladders objects
            resultObjects.add(new BoardObject(3, 17, 0));
            resultObjects.add(new BoardObject(11, 32, 0));
            resultObjects.add(new BoardObject(28, 47, 0));
            resultObjects.add(new BoardObject(38, 56, 0));
            resultObjects.add(new BoardObject(51, 69, 0));
            resultObjects.add(new BoardObject(63, 77, 0));
            resultObjects.add(new BoardObject(80, 97, 0));
            resultObjects.add(new BoardObject(88, 95, 0));
            //Snakes objects
            resultObjects.add(new BoardObject(14, 5, 1));
            resultObjects.add(new BoardObject(40, 22, 1));
            resultObjects.add(new BoardObject(59, 37, 1));
            resultObjects.add(new BoardObject(66, 25, 1));
            resultObjects.add(new BoardObject(74, 35, 1));
            resultObjects.add(new BoardObject(85, 42, 1));
            resultObjects.add(new BoardObject(92, 53, 1));
            resultObjects.add(new BoardObject(99, 78, 1));
        }
        
        return resultObjects;
    }

    /**
     * Method to get width.
     * @return width of the board.
     */
    public int getWidth() {
        return width;
    }

    /**
     * Method to get height.
     * @return height of the board.
     */
    public int getHeight() {
        return height;
    }
    
    /**
     * Method to get the total number of cells on the board.
     * @return total cells.
     */
    public int getNumCells() {
        return width * height;
    }

    /**
     * Method to get the board objects list.
     * @return list of BoardObject items.
     */
    public LinkedList<BoardObject> getObjects() {
        return objects;
    }
    
}
