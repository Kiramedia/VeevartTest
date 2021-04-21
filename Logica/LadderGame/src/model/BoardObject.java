package model;

/**
 * Class that represents board object information.
 * @author Kevin Rondon (kevin.rondon@uao.edu.co)
 */
public class BoardObject {
    private final int initPosition;   //Refers to the position that changes players place
    private final int finalPosition;  //Refers to the position where the player moves
    private final int type;   //Can be 0 for ladder, 1 for snake

    /**
     * Class constructor, instantiate all the variables and the needed information.
     * @param initPosition init object position.
     * @param finalPosition finish object position.
     * @param type define the object, 0 is for ladder and 1 for snake.
     */
    public BoardObject(int initPosition, int finalPosition, int type) {
        this.initPosition = initPosition;
        this.finalPosition = finalPosition;
        this.type = type;
    }

    /**
     * Method to get the initial position.
     * @return initial position of the object.
     */
    public int getInitPosition() {
        return initPosition;
    }

    /**
     * Method to get the final position.
     * @return final position of the object.
     */
    public int getFinalPosition() {
        return finalPosition;
    }

    /**
     * Method to get the object type.
     * @return number that define the object type.
     */
    public int getType() {
        return type;
    }
}
