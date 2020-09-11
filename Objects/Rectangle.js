class Rectangle extends Shape
{
    constructor(width, height)
    {
        super("rectangle");
        this.width = width ?? 100; // si width est non null donc width sinon 100
        this.height = height ?? 50;


    }
}