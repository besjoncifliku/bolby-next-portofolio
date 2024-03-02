import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import DinoImg from '../../assets/dino/dino.png';
import '../../sass/_general.scss';


export const DinoGame = () => {

    const muted = false;
    const boardWidth = 600;
    const boardHeight = 350;
    const cactusArray = [];

    const dino: any = {
        height: 94,
        width: 88,
        x: 50,
        y: boardHeight - 94,
        img: null
    };

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const [frameCounter, setFrameCounter] = useState(0);

    const [[positionX, positionY], setPosition] = useState<[number, number]>([boardWidth / 2 - 80, boardHeight / 2 - 10]);

    const cactus1Width = 34;
    const cactus2Width = 69;
    const cactus3Width = 102;

    const cactusHeight = 70;
    const [cactusX, cactusY] = [700, boardHeight - cactusHeight];

    let cactus1Img;
    let cactus2Img;
    let cactus3Img;

    const [[velocityX, velocityY], setVelocity] = useState<[number, number]>([-8, 0]);

    // player position and score
    const [gravity, setGravity] = useState<number>(.4);
    const [score, setScore] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    // update the frameCounter
    useLayoutEffect(() => {
        let timerId: number;

        const animate = () => {
            setFrameCounter(c => c + 1)
            timerId = requestAnimationFrame(animate)
        }

        timerId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(timerId)
    }, []);

    const collideWall = (a: any, b: any) => {
        return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
            a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
            a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
            a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
    }

    const reset = () => {
        setPosition([boardWidth / 2 - 80, boardHeight / 2 - 10]);
        buttonRef && buttonRef.current ? buttonRef.current.disabled = false : buttonRef;
    }

    const restart = () => {
        if (gameOver) {
            setScore(0);
            setGameOver(false);
        }

        buttonRef && buttonRef.current ? buttonRef.current.disabled = true : buttonRef;
    }

    // do I need separate useEffect for this sound
    useEffect(() => {
        // if (gameOver) playSound(gameover, 1)
    }, [gameOver]);

    // output graphics
    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }

        context.clearRect(0, 0, boardWidth, boardHeight);
        context.fillStyle = '#555555';

        // collideWall()
        const dinoImg = new Image();

        dinoImg.src = DinoImg.src;
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

        // net
        for (let i = 0; i < 350; ++i) {
            context.fillRect(boardWidth / 2 - 3, 10 + i * 35, 6, 20)
        }

        // ball
        // context.drawImage(positionX, positionY, 20, 20)

        // player 1
        // context.fillRect(20, playerY, 20, 60);

    }, [frameCounter])

    // start with keyboard
    useEffect(() => {
        // @ts-ignore
        const startWithKeyboard = ({ code }) => {
            if (code === 'Space') {
                restart()
            }
        }
        document.addEventListener('keypress', startWithKeyboard)
        // component unmount - remove the listener
        return () => {
            document.removeEventListener('keypress', startWithKeyboard)
        }

    }, [gameOver])

    return (
        <div className='dino-container'>
            <div className='dino-canvas'>
                <canvas ref={canvasRef} width={boardWidth} height={boardHeight} />
                <div className='dino-score left'>{score}</div>
            </div>

            <div>
                <button onClick={restart} ref={buttonRef}>Play</button>
            </div>
        </div>
    );
}