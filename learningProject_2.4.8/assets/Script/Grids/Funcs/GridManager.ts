import { GridNode } from "../Types/GridType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GridManager extends cc.Component {

    @property(Number)
    public width: number = 20;
    @property(Number)
    public height: number = 20;
    @property(Number)
    public nodeSize: number = 1;


    @property(cc.Node)
    public oriPos: cc.Node = null;

    // 画图组件
    private graphics: cc.Graphics = null;

    // 记录网格
    private grids: GridNode[][] = [];

    onLoad() {
        this.graphics = this.getComponent(cc.Graphics);
        if (!this.graphics) console.error("错误：graphics获取为空");
    }

    start() {
        this.grids = new GridNode[this.width][this.height];
        // 生成网格
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let gridNode = new GridNode(x, y);
                this.grids[x][y] = gridNode;
                this.graphics.moveTo();
            }
        }
    }

    getWorldPos(x: number, y: number) {
        let result = this.oriPos.position;
        result.x += x * this.nodeSize;
        result.y += y * this.nodeSize;
        return result;
    }

    drawLine(startPos: cc.Vec3, tarPos: cc.Vec3) {

        console.log("画线>>>>");

        let ctx = this.graphics;

        ctx.moveTo(startPos.x, startPos.y);

        ctx.lineTo(tarPos.x, tarPos.y);

        ctx.stroke();

        //如果想要清除历史的线, 可以执行clear方法

        // ctx.clear();

    }
}
