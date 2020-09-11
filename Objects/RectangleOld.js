const RectangleOld = function(width,height) {

    this.width = width !== undefined ? width : 100;
    this.height == height !== undefined ? height :50;

}

RectangleOld.prototype = new ShapeOld("Rectangle");

RectangleOld.prototype.draw = function() {
    console.log("OK");
}