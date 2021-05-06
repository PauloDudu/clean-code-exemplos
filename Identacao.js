// Formatação do código

class Route{
    constructor(method, name, controller) {
        this.method = method;
        this.name = name;
        this.controller = controller;
    }
 }

/*--------------------------------------------------------------------------------------------------------*/
// Mal exemplo

var Route = require("./Route");

class Router {
    constructor(){ }

    GET(path,controller) {
        return new Route(0,path,controller);
    }
    
    POST(path,controller) {
        return new Route(1, path,controller);
    }
}
module.exports = Router;

/*--------------------------------------------------------------------------------------------------------*/
// Mal exemplo de código com linha muito grande

it = this.itemFactory.create(iTemp.getName(),iTemp.getBarCode(),iTemp.getBrand(),iTemp.getInStock(),iTemp.getPrice(),iTemp.getType());
