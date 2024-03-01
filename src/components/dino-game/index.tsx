import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import '../../sass/_general.scss';

export const DinoGame = (muted: boolean) => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const [frameCounter, setFrameCounter] = useState(0)

    // board dimensions
    let board;
    const boardWidth = 600
    const boardHeight = 350
    let context;

    //dino
    let dinoWidth = 88;
    let dinoHeight = 94;
    let dinoX = 50;
    let dinoY = boardHeight - dinoHeight;
    let dinoImg;

    // ball position
    const [positionX, setPositionX] = useState(boardWidth / 2 - 80)
    const [positionY, setPositionY] = useState(boardHeight / 2 - 10)

    let dino = {
        x : dinoX,
        y : dinoY,
        width : dinoWidth,
        height : dinoHeight
    }


//cactus
    let cactusArray = [];

    let cactus1Width = 34;
    let cactus2Width = 69;
    let cactus3Width = 102;

    let cactusHeight = 70;
    let cactusX = 700;
    let cactusY = boardHeight - cactusHeight;

    let cactus1Img;
    let cactus2Img;
    let cactus3Img;

//physics
    let velocityX = -8; //cactus moving left speed
    let velocityY = 0;
    let gravity = .4;

    let gameOver = false;
    let score = 0;


    // velocity
    const [dx, setDx] = useState(0)
    const [dy, setDy] = useState(0)

    const [ballSpeed, setBallSpeed] = useState(3)

    // player position and score
    const [playerY, setPlayerY] = useState(165)
    const [computerY, setComputerY] = useState(165)

    const [scorePlayer, setScorePlayer] = useState(0)
    const [scoreComputer, setScoreComputer] = useState(0)

    const [gameOver, setGameOver] = useState(false)

    const maxScore = 2

    // update the frameCounter
    useLayoutEffect(() => {
        let timerId
        const animate = () => {
            setFrameCounter(c => c + 1)
            timerId = requestAnimationFrame(animate)
        }
        timerId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(timerId)
    }, [])

    // update position
    const moveTheBall = () => {
        setPositionX(x => x += dx)
        setPositionY(y => y += dy)
    }

    const collideWall = () => {
        if (positionX >= boardWidth) {
            setScoreComputer(c => c + 1)
            reset()
        }

        if (positionX <= 0) {
            setScorePlayer(p => p + 1)
            reset()
        }

        if (positionY > boardHeight - 30) {
            setDy(dyPrev => dyPrev * -1)
            setPositionY(y => y - 10)
        }
        if (positionY < 10) {
            setDy(dyPrev => dyPrev * -1)
            setPositionY(y => y + 10)
        }
    }

    // RESTART POSITION
    const reset = () => {
        setPositionX(boardWidth / 2 - 80)
        setPositionY(boardHeight / 2 - 10)

        setDx(0)
        setDy(0)

        buttonRef.current.disabled = false

        if (scorePlayer < maxScore && scoreComputer < maxScore) playSound(loose)
    }

    // SET DIRECTION HERE
    const restart = () => {
        if (gameOver) {
            setScorePlayer(0)
            setScoreComputer(0)
            setGameOver(false)
            setBallSpeed(3)
        }

        setDx(3 * (Math.random() > .5 ? 1 : -1))
        setDy(5 * (Math.random() * 2 - 1))

        buttonRef.current.disabled = true
    }

    // SET COLLISION ANGLE HERE
    const collidePlayer = () => {
        if (positionX < 40 && positionY + 20 > playerY && positionY < playerY + 60) {
            setPositionX(x => x + 10)
            playSound(beep)

            let collisionPoint = (positionY + 10) - (playerY + 30) // -30 ... 30
            collisionPoint = collisionPoint / 30 // -1 ... 1

            let angle = (Math.PI / 4) * collisionPoint

            setDx(ballSpeed * Math.cos(angle))
            setDy(ballSpeed * Math.sin(angle))

            setBallSpeed(ballSpeed + 0.5)
        }
    }

    const collideComputer = () => {
        if (positionX > boardWidth - 60 && positionY + 20 > computerY && positionY < computerY + 60) {
            setPositionX(x => x - 20)
            setDx(dxPrev => dxPrev * -1)
            playSound(beep)

            let collisionPoint = (positionY + 10) - (computerY + 30) // -30 ... 30
            collisionPoint = collisionPoint / 30 // -1 ... 1

            let angle = (Math.PI / 4) * collisionPoint

            setDx(-ballSpeed * Math.cos(angle))
            setDy(ballSpeed * Math.sin(angle))

            setBallSpeed(ballSpeed + 0.5)
        }
    }

    // computer AI
    const moveComputer = () => {
        setComputerY(compY => compY += (positionY - (compY + 30)) * 0.1 )
    }

    // do I need separate useEffect for this sound
    useEffect(() => {
        if (gameOver) playSound(gameover, 1)
    }, [gameOver])

    // output graphics
    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.clearRect(0, 0, boardWidth, boardHeight)
        context.fillStyle = '#555555'

        collideWall()
        collidePlayer()
        collideComputer()
        moveComputer()
        moveTheBall()

        if (scorePlayer > maxScore || scoreComputer > maxScore) {
            setGameOver(true)
        }

        // net
        for (let i = 0; i < 350; ++i) {
            context.fillRect(boardWidth / 2 - 3, 10 + i * 35, 6, 20)
        }

        // ball
        context.fillRect(positionX, positionY, 20, 20)

        // player 1
        context.fillRect(20, playerY, 20, 60)

        // player 2
        context.fillRect(boardWidth - 40, computerY, 20, 60)

    }, [frameCounter])

    // start with keyboard
    useEffect(() => {
        const startWithKeyboard = ({ code }) => {
            if (code === 'Space') {
                restart()
            }
        }
        document.addEventListener('keypress', startWithKeyboard)
        return () => {
            document.removeEventListener('keypress', startWithKeyboard)
        }

    }, [gameOver])

    const getMouse = (event) => {
        setPlayerY(p => event.clientY * .55 - 80)
    }

    const playSound = (src, volume = .35) => {
        if (muted) return
        const sound = new Howl({ src })
        Howler.volume(volume)
        sound.play()
    }

    return (
        <div className='container' onMouseMove={getMouse}>
            <div className='containerCanvas'>
                <canvas ref={canvasRef} width={boardWidth} height={boardHeight} />
                <div className='score left'>{scorePlayer}</div>
                <div className='score right'>{scoreComputer}</div>
            </div>

            <div className='caption'>{ gameOver ? 'Game over!' : `Game speed ${ballSpeed.toFixed(2)}` }</div>

            <div>
                <button onClick={restart} ref={buttonRef}>Play</button>
            </div>
        </div>
    );
}