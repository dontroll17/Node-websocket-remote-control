import { moveUp, moveDown, moveLeft, moveRight } from './navigation';
import robot from 'robotjs';

export const drawSquare = (param: string) => {
    let paramToNumber: number = Number(param);

    robot.mouseToggle('down');
    moveRight(paramToNumber);
    moveDown(paramToNumber);
    moveLeft(paramToNumber);
    moveUp(paramToNumber);
    robot.mouseToggle('up');
    console.log('draw square');
}

export const drawRectangle = (param1: string, param2: string) => {
    let paramToNumber1 = Number(param1);
    let paramToNumber2 = Number(param2);

    robot.mouseToggle('down');
    moveRight(paramToNumber1);
    moveDown(paramToNumber2);
    moveLeft(paramToNumber1);
    moveUp(paramToNumber2);
    robot.mouseToggle('up');
    console.log('draw rectangle');
}

export const drawCircle = (radius: string) => {
    const rad = Number(radius);
    const {x, y} = robot.getMousePos();

    robot.moveMouse(x + rad, y);
    robot.mouseToggle('down');
    for(let i = 0; i <= Math.PI * 2; i += 0.01) {
        const x1 = x + (rad * Math.cos(i));
        const y1 = y + (rad * Math.sin(i));
        
        robot.moveMouse(x1, y1);
    }
    robot.mouseToggle('up');
    robot.moveMouse(x, y);
    console.log('draw circle');
}
