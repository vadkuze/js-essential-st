/*

Some operations that work with Arrays require only the bare minimum: values must only be Array-like. 

An Array-like value is an object with the following properties:
    • .length: holds the length of the Array-like object.
    • [0]: holds the element at index 0 (etc.). Note that if you use numbers as property names, 
      they are always coerced to strings. Therefore, [0] retrieves the value of the property whose key is '0'

For instance Array.from({length:2, 0:'a', 1:'b'}), Set, Map

Do you need to create an Array filled with objects?
    Array.from({length: 3}, () => ({}))
    // [{}, {}, {}]

Do you need to create a range of integers?
    function createRange(start, end) {
        return Array.from({length: end-start}, (_, i) => i+start);
    }
*/

// --Array static methods--