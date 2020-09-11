let obj = {

     b = 43
}

Object.defineProperty(obj,"a",{ value: 324, writable: false, enumerable: false, configurable : true }) 
//  writable : pas modifiable, enumerable : pas visible, configurable : redéfinition de méthde
