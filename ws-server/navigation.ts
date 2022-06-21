import robot from 'robotjs';

export const getPosition = () => {
    let position = robot.getMousePos();
    return position;
}

export const moveUp = (param: string | number) => {
    let position = getPosition();
    let x = position.x;
    let y = position.y - Number(param);
    console.log(`mouse up on ${param}`);
    return robot.moveMouseSmooth(x, y);
}

export const moveDown = (param: string | number) => {
    let position = getPosition();
    let x = position.x;
    let y = position.y + Number(param);
    console.log(`mouse down on ${param}`);
    return robot.moveMouseSmooth(x, y);
}

export const moveLeft = (param: string | number) => {
    let position = getPosition();
    let y = position.y;
    let x = position.x - Number(param);
    console.log(`mouse move left on ${param}`);
    return robot.moveMouseSmooth(x, y);
}

export const moveRight = (param: string | number) => {
    let position = getPosition();
    let y = position.y;
    let x = position.x + Number(param);
    console.log(`mouse move right on ${param}`);
    return robot.moveMouseSmooth(x, y);
}