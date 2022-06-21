import robot from 'robotjs';
import Jimp from 'jimp';

export const getScreen = async () => {
    let {x, y} = robot.getMousePos();
    let img = robot.screen.capture(x - 100, y - 100, 200, 200).image;
    const pic = new Jimp({data: img, width: 200, height: 200})
    const base = await pic.getBase64Async(pic.getMIME());
    const str = base.slice(22);
    return str;
}