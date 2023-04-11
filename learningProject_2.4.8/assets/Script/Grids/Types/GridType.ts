export class GridNode {
    x: number;
    y: number;
    value: number;

    constructor(x: number, y: number, value: number = 0) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
}