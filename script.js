document.getElementById('alertname').onclick = function () {
    let fullName = "Muhammad talha"
    alert(fullName)
    
    let statement ="alert('Muhammad talha')"
    document.getElementById('Statement').innerHTML = statement;
    }
    
    document.getElementById("alertnum").onclick = function (){
        alert(123)
    
        let statement ="alert('123')"
        document.getElementById("Statement").innerHTML = statement;
    }    
    document.getElementById("showveriablename"). onclick = function () {
        let html = "<ul><li>A veriable name can't contain any spaces.</li><li>A veriable name can contain only letters , numbers , dollers , signs , and underscores.</li><li>though a variable name can't br any of javascript's keywords,it can contain keywords.For example, <code>user alert</code> and <code>my var</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code> rose </code> is not a <code>Rose</code>. If you assign the string \ 'Floribundas' to the variable <code>rose</code>,and then ask Java Script for the value assigned to <code>Rose</code>.You'll come up empty.</li></ul>"
    document.getElementById("output").innerHTML = html;
    }
    
    document.getElementById("camelcase").onclick = function () {
        let html = "<h3>Examples</h3><ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponsetime</code></li><li><code>userResponseTimeLimit</code></li>"
        document.getElementById('output').innerHTML = html ;
    }
    document.getElementById('sum2num').onclick = function () {
        let num1 = 10;
        let num2 = 5;
        let sum = num1 + num2;
        document.getElementById('output').innerHTML = "<p class= text-center>" + sum + "</p>;"
        
    
        let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum = num1 + num2;"
        document.getElementById("statement").innerHTML = statement;
    }
    document.getElementById("sub2num").onclick = function () {
        //document.getElementById('statement').innerHTML = "statement";
        //document.getElementById('output').innerHTML = "output";
        let num1 = 10;
        let num2 = 5;
        let substract = num1 - num2;
    
        document.getElementById("output").innerHTML = "<p class= text-center>" + substract + "</p>";
        let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let substract = num1 - num2;"
        document.getElementById("statement").innerHTML = statement; 
    }
    
    
    
    document.getElementById("mul2num").onclick = function () {
        let num1 = 10;
        let num2 = 5;
        let multiply = num1 * num2;
    
        document.getElementById("output").innerHTML = "<p class= text-center>" + multiply + "</p>";
        let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let multiply = num1 * num2;"
        document.getElementById("statement").innerHTML = statement; 
    
    }
    
    
    document.getElementById("divide2num").onclick = function () {
        let num1 = 10;
        let num2 = 5;
        let divide = num1 % num2 ;
    
        document.getElementById("output"),innerHTML = "<p class= text-center>" + divide + "</p>";
        let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br> let divide = num1 / num2;"
        document.getElementById("statement").innerHTML = statement;
    
    }
    
    document.getElementById("calcnum"). onclick = function () {
        
    
        document.getElementById("statement"). innerHTML = "";
        document.getElementById("output"). innerHTML = "";
    
        var someCalculation = 36/6 * 3 + 2 ** 4 - (3 + 5);
    
        document.getElementById("output").innerHTML = "<p class= 'text-center'>"+ someCalculation + "</p>";
    
        let statement = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"
        document.getElementById("statement").innerHTML = statement ; 
    }