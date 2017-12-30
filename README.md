# ranking-objects


### Setup

  - Clone the ranking.js file to your source code
  - Add  '<script src="ranking.js"></script>' to your html file
 ```
 var newArray = new Ranking(array,value,boolean);
 ```
### array -> must be an array
### value -> obj1[0].value must equal to a number
### boolean -> true or false



### Examples

```
var obj1 = [
    {
        name: "John",
        age : 17
    },
    {
        name:"Martha",
        age : 18
    },
    {
        name:"Frank",
        age : 16
    }
];

var newArray = new Ranking(obj1,age,true); //if boolean is true output will be 18-17-16
                                          //else the output will be 16-17-18
console.log(newArray.ranked);
```
### Output
```
[
    {
        name:"Martha",
        age : 18
    },
    {
        name:"John,
        age : 17
    },
    {
        name:"Frank",
        age : 16
    }
]
```




