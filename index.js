function calcD(a, b, c) {
   return (-b + Math.sqrt
( b*b - 4*a*c)) /(2*a)  ;
}

var test = calcD(1, 70, 600);
alert(test); // 20