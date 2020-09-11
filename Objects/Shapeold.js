
const Shapeold = function (type)
{
    this.type = type;

    /*
    // version ancienne de déclaration d'une classe
// a chaque instance, nouvel emplacement mémoire crée donc duplication des données a chaque fois
    this.draw()
    
    {
        throw "ShapeOld:: need overrided";
    }
    */
}

/*
 Object this = contexte
 dans ancienne version : function () {console.log(this).bind(this)} pour conserver l'environnement this
 sinon new version () =>
*/
ShapeOld.prototype.draw = function()
{
    throw "ShapeOld:: need overrided";
    
}