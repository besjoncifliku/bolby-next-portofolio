import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import DinoImg from '../../assets/dino/dino.png';
import cactus1Img from '../../assets/dino/cactus1.png';
import cactus2Img from '../../assets/dino/cactus2.png';
import cactus3Img from '../../assets/dino/cactus3.png';
import TrackImg from '../../assets/dino/track.png';
import sideAnimation from "../../assets/dino/dino_sprite.png.png";

import '../../sass/_general.scss';
import Sprite from "@/components/dino-game/Sprite";


export const DinoGame = () => {

    const muted = false;
    const boardWidth = 600;
    const boardHeight = 350;
    const cactusArray: any[] = [];

    const dino = {
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

        const dinoImg = new Image();
        dinoImg.src = DinoImg.src;
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

        const trackImage = new Image();
        trackImage.src = TrackImg.src;
        context.drawImage(trackImage, dino.x, dino.y, 1200, 100);

        requestAnimationFrame(update); // because will be updated by the frameCounter

        // ball
        // context.drawImage(positionX, positionY, 20, 20)

        // player 1
        // context.fillRect(20, playerY, 20, 60);

    }, [frameCounter])


    function placeCactus() {
        if (gameOver) {
            return;
        }

        //place cactus
        let cactus: any = {
            img : null,
            x : cactusX,
            y : cactusY,
            width : null,
            height: cactusHeight
        }

        let placeCactusChance = Math.random(); //0 - 0.9999...

        const cactusImg = new Image();

        if (placeCactusChance > .90) { //10% you get cactus3
            cactusImg.src = cactus3Img.src;
            cactus.width = cactus3Width;
        }
        else if (placeCactusChance > .70) { //30% you get cactus2
            cactusImg.src = cactus2Img.src;
            cactus.width = cactus2Width;
        }
        else if (placeCactusChance > .50) { //50% you get cactus1
            cactusImg.src = cactus1Img.src;
            cactus.width = cactus1Width;
        }

        cactus.img = cactusImg;
        cactusArray.push(cactus);

        if (cactusArray.length > 5) {
            cactusArray.shift(); //remove the first element from the array so that the array doesn't constantly grow
        }
    }


    function update() {
        requestAnimationFrame(update);
        if (gameOver) {
            return;
        }
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }
        context.clearRect(0, 0, boardWidth, boardHeight);

        //dino
        setVelocity([velocityX, velocityY + gravity]);
        // @ts-ignore
        const minval = Math.min([dino.y + velocityY, dino.y]);
        setPosition([dino.x, minval]); //apply gravity to current dino.y, making sure it doesn't exceed the ground

        const dinoImg = new Image();
        dinoImg.src = DinoImg.src;
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

        //cactus
        for (let i = 0; i < cactusArray.length; i++) {
            let cactus = cactusArray[i];
            cactus.x += velocityX;
            context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
        }

    }

    // start with keyboard
    useEffect(() => {
        // @ts-ignore
        const startWithKeyboard = ({ code }) => {
            if (code === 'Space') {
                restart()
            }
        }
        document.addEventListener('keypress', startWithKeyboard)

        const interval = setInterval(() => {
            placeCactus();
        }, 1000);

        //Clearing the interval
        // component unmount - remove the listener
        return () => {
            document.removeEventListener('keypress', startWithKeyboard)
            clearInterval(interval);
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