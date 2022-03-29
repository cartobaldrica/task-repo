class GameLoader {
    //where is the high score utilized?
    constructor() {
        this.tetrisTimesPlayed = 0;
        this.snakeTimesPlayed = 0;
        this.tetrisHighScore = 0;
        this.snakeHighScore = 0;
    }
    //how many times tetris was played
    incrementTetrisTimesPlayed = () => {
        this.tetrisTimesPlayed++;
    }
    //how many times snake was played
    incrementSnakeTimesPlayed = () => {
        this.snakeTimesPlayed++;
    }
}

let gl = new GameLoader();