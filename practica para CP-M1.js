// A continuación te encontrarás con una serie de ejercicios realizador por los PMs para ayudar a los nuevos Henrys
// a practicar problemas de complejidad aproximada al primer CheckPoint
//
// Implementar la función tienePropiedad: debe buscar dentro de un objeto anidado un par {clave: valor}
// especifico. Tanto el objeto como el nombre de la propiedad y su valor serán recibidos por parámetro.
// En el caso de que encuentre el valor indicado debe devolver true,
// de lo contrario, devolver false.
//     Ej:
//        const persona = {
//            nombre: "pedro",
//            altura: "1.85",
//            edad: "25"
//            }
//        }
//   - Caso que devuelve true  --> tienePropiedad(persona, "altura");
//   - Caso que devuelve false --> tienePropiedad(persona, "raza");
var tienePropiedad = function(obj, prop) {}

// Implementar la función tieneAtributo: debe buscar dentro de un objeto anidado un par {clave: valor}
// especifico. Tanto el objeto como el nombre de la propiedad y su valor serán recibidos por parámetro.
// En el caso de que encuentre el valor indicado debe devolver true,
// de lo contrario, devolver false.
//     Ej:
//        const persona = {
//            nombre: "pedro",
//            altura: "1.85",
//            edad: "25"
//            }
//        }
//   - Caso que devuelve true  --> tieneAtributo(persona, "pedro");
//   - Caso que devuelve false --> tieneAtributo(persona, "maria");
var tieneAtributo = function(obj, atrib) {}

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la multiplicación de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
// const array = [1, [2, [3,4]], [5,6], 7];
// multiplicarArray(array); --> Debería devolver 5040 (1 * 2 * 3 * 4 * 5 * 6 * 7)
var multiplicarArray = function(array) {}

// Implementar el método size dentro del prototype de BinaryTree que deberá retornar el tamaño actual de
// BinaryTree. En el caso de que el arbol se encuentre vacío deberá retornar cero.
// Ejemplo:
//    var tree = new BinaryTree();
//    tree.size(); --> 0
//    tree.add(1);
//    tree.size(); --> 1
//    tree.add(2);
//    tree.add(3);
//    tree.size(); --> 3
BinaryTree.prototype.size = function() {}

// Implementar el método FillZeros dentro del prototype de LinkedList que deberá sobreescribir los elementos que tengan valor cero.
// el metodo recibirá el valor "value".
//    Suponiendo que la lista actual es: Head --> [1] --> [0] --> [4]
//    lista.FillZeros(3);
//    Ahora la lista quedaría: Head --> [1] --> [3] --> [4]
LinkedList.prototype.FillZero = function(value) {}

// Implementar el método recursiveArrayPrint mostrar los elementos del array enviado por parametro
// utilizando recursividad, no podrá utilizar ciclos for ni while, ni foreach.
 
function recursiveArrayPrint(array) {
    // aqui debe escribir el codigo que muestra el primer elemento del array y lo elimine del array
    // ...
    recursiveArrayPrint(array); //mantenga esta linea para q pueda hacer la llamada recursiva
}

// Traiga desde el homework correspondiente la implementación de una cola junto con sus metodos queue, dequeue y size
// ejercicio: implemente un metodo que combine dos colas ordenadas en una cola ordenadas resultante
// ejemplo: 
//             Q1 = [1,3,5,7,9]
//             Q2 = [2,4,6,8,10]
//             Q3 = mixQueue(Q1,Q2)
//             console.log(Q3) --> [1,2,3,4,5,6,7,8,9,10]
function mixQueue(q1, q2) {}
// Implementar el método fillWithQueue  y fillWithStack dentro del prototype de LinkedList que agregue todos los elementos
// de la cola o de la pila segun el metodo 
LinkedList.prototype.fillWithQueue = function(queue) {}
LinkedList.prototype.fillWithStack = function(stack) {}