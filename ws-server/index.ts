import { WebSocketServer } from 'ws';
import { getPosition, moveUp, moveDown, moveLeft, moveRight } from './navigation';
import { reqHandler } from './requestHandles';
import { drawSquare, drawRectangle, drawCircle } from './figures';

const wss = new WebSocketServer({ port: 8080});

wss.on('connection', ws => {
    console.log('Got connect');
    ws.on('message', data => {
        let [command, option, option2] = reqHandler(data);
        switch(command) {
            case 'mouse_position':
                let {x, y} = getPosition();
                ws.send(`mouse_position ${x},${y}`);
                break;

            case 'mouse_up':
                moveUp(option);
                break;

            case 'mouse_down':
                moveDown(option);
                break;

            case 'mouse_left':
                moveLeft(option);
                break;

            case 'mouse_right':
                moveRight(option);
                break;

            case 'draw_square':
                drawSquare(option);
                break;

            case 'draw_rectangle':
                drawRectangle(option, option2);
                break;

            case 'draw_circle':
                drawCircle(option);
                break;
        }
    });
});

console.log('ws://localhost:8080');