# Junior Web Developer

You can make the following assumptions about about all code in this test unless otherwise stated.

- All code will execute without error. 
- All strings contain the commonly represented character being rendered and not alternative ascii versions. 
- console.log returns the passed values unaltered, but each log returned will have its own line.
- > will represent one line of expected output.
- | will represent one line of code expected in an answer block.

These questions get progressively harder from 1 to 5, if you feel you can't answer a question simply skip it and and attempt the next.

## Question 1

Please take a look at the following code,

```js
(function(){
    var a,b;
    a = 5;
    b = 10;
    a = a+b;
    b = a-b;
    a=a-b;

    console.log(a);
    console.log(b);
})();
```

### What would be the output of this script?

```
>
>
```

## Question 2

Please take a look at the following code,

```js
(function(){
    var a = new String('Hello, world.');
    var b = new String('Hello, world.');

    if(a == b){
        console.log('true');
    } else {
        console.log('false');
    }  
})();
```

### What would be the output of this script?

```js
>
```

## Question 3

Please take a look at the following code,

```js
(function(){
    for(i=1;i<=100;i++){
        var num = "";
        if(i%3==0){ num+= "Fizz"; }
        if(i%5==0){ num+= "Buzz"; }
        if(num.length==0){ num+= i; }

        console.log(num);
    }
})();
```

_see the end of this document if you require a hint for the question above_

### What would be the first 15 lines of output of this script?

```js
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
```

## Question 4

Please take a look at the following code,

```js
(function(){
    var foo = "hello, alan";
    
    console.log(
        foo.substr(0,1).toUpperCase() + 
        this.substr(1,foo.length)
    );
    
})();
```

The code above returns the following error,

```js
TypeError: Object [object global] has no method 'substr'
```

### What would the correct version of this code be?

```js
|
|
|
|
|
|
|
|
|
```

## Question 5

### What would be the output of the corrected code above?

```js
>
```

---

If you feel you can't answer any of these questions above, read back through the code and take a guess at what you think the provided scripts do and then attempt to give the functions appropriate names.


### Question 3 Hint

in JavaScript `%` shows the remainder of a division.

```js
console.log(3%3); // would log 0
console.log(5%3); // would log 2
```
numbers that divide with no remainders are multiples of each other.
