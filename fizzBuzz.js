var output = [];
var count = 1;
var fizz = 0;
var buzz = 0;
var fizzBuzz = 0;

function outFunc () {
    if(count % 3 == 0)
    {
        if(count % 5 == 0 && count % 3 ==0)
        {
            output.push("fizzBuzz");
            fizzBuzz++;
        }
        else if(count % 3 == 0)
        {
            output.push("fizz")
            fizz++;
        }
    }
    else if(count % 5 == 0)
    {
        output.push("buzz")
        buzz++;
    }
    else
    {
        output.push(count);
    }
    count++;
    console.log(fizz + " " + buzz + " " + fizzBuzz);
}

function input (value) {
    for(let i =1; i <= value; i++)
        {
            outFunc();
        }
}

input(1000);
