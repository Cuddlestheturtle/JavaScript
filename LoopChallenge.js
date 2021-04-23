// 1. Print odds 1-20 - Using a loop write code that will console.log all of the odd values from 1 up to 20.

    for( var i = 0; i <= 20; i= i+3){
        console.log(i)
    }

// 2.  Print the sequence - Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var arr1 = [4, 2.5, 1, -0.5, -2, -3.5]

    for (var i = 0; i < arr1.length; i++){
        console.log(arr1[i])
    }

// 3. Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050in the end.

var total = 0;

    for(var i = 0; i <= 100; i++){
        total += i;
    }
console.log(total)

//4. Write code that will multiply values from 1 to some value n until the variable product is larger than 100 million (1e8 for short). At the end console.log that value of n.

var total = 1
    
    for(var i = 1; i < 1e8; i++)



console.log(n)