//[예제풀이 28 -01]
const numObj = new Number();
console.log(numObj); // Number {[[PrimitiveValue]]: 0}

//[예제풀이 28-02]
const numObj = new Number(10);
console.log(numObj); // Number {[[PrimitiveValue]]: 10}
//[예제풀이 28-03]
let numObj = new Number('10');
console.log(numObj); // Number {[[PrimitiveValue]]: 10}
numObj = new Number('Hello');
console.log(numObj); // Number {[[PrimitiveValue]]: NaN}
//[예제풀이 28-04]
// 문자열 타입 => 숫자 타입
Number('0');     //  0
Number('-1');    //  -1
Number('10.53'); //  10.53

//불리언 타입 => 숫자 타입
Number(true);  //  1
Number(false); //  0
//[예제풀이 28-05]
0.1 + 0.2;         // 0.30000000000000004
0.1 + 0.2 === 0.3; // false
//[예제풀이 28-06]

function isEqual(a, b){
  // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
  return Math.abs(a - b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); // true
//[예제풀이 28-07]

Number.MAX_VALUE; // 1.7976931348623157e+308
Infinity > Number.MAX_VALUE; // true
//[예제풀이 28-08]

Number.MIN_VALUE; //5e-324
Number.MIN_VALUE > 0; //true
//[예제풀이 28-09]

Number.MAX_SAFE_INTEGER; //9007199254740991
//[예제풀이 28-10]

Number.MIN_SAFE_INTEGER; //-9007199254740991
//[예제풀이 28-11]

Number.POSITIVE_INFINITY; //Infinity
//[예제풀이 28-12]

Number.NEGATIVE_INFINITY; //-Infinity
//[예제풀이 28-13]

Number.NaN; // -> NaN
//[예제풀이 28-14]

// 인수가 정상적인 유한수이면 true를 반환한다.
Number.isFinite(0);                //true
Number.isFinite(Number.MAX_VALUE); //true
Number.isFinite(Number.MIN_VALUE); //true

// 인수가 무한수이면 false를 반환한다.
Number.isFinite(Infinity);  //false
Number.isFinite(-Infinity); //false
//[예제풀이 28-15]

Number.isFinite(NaN); //false
//[예제풀이 28-16]

// Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않는다.
Number.isFinite(null); //false

// isFinite는 인수를 숫자로 암묵적 타입 변환한다. null은 0으로 암묵적 타입 변환된다.
isFinite(null); //true
//[예제풀이 28-17]

// 인수가 정수이면 true를 반환한다.
Number.isInteger(0)     //true
Number.isInteger(123)   //true
Number.isInteger(-123)  //true

// 0.5는 정수가 아니다.
Number.isInteger(0.5)   //false
// '123'을 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger('123') //false
// false를 숫자로 암묵적 타입 변환하지 않는다.
Number.isInteger(false) //false
// Infinity/-Infinity는 정수가 아니다.
Number.isInteger(Infinity)  //false
Number.isInteger(-Infinity) //false
//[예제풀이 28-18]

// 인수가 NaN이면 true를 반환한다.
Number.isNaN(NaN); //true
//[예제풀이 28-19]

// Number.isNaN은 인수를 숫자로 암묵적 타입 변환하지 않는다.
Number.isNaN(undefined); //false

// isFinite는 인수를 숫자로 암묵적 타입 변환한다. undefined는 NaN으로 암묵적 타입 변환된다.
isNaN(undefined); // -> true
//[예제풀이 28-20]

// 0은 안전한 정수이다.
Number.isSafeInteger(0); //true
// 1000000000000000은 안전한 정수이다.
Number.isSafeInteger(1000000000000000); //true

// 10000000000000001은 안전하지 않다.
Number.isSafeInteger(10000000000000001); // false
// 0.5은 정수가 아니다.
Number.isSafeInteger(0.5); //false
// '123'을 숫자로 암묵적 타입 변환하지 않는다.
Number.isSafeInteger('123'); //false
// false를 숫자로 암묵적 타입 변환하지 않는다.
Number.isSafeInteger(false); //false
// Infinity/-Infinity는 정수가 아니다.
Number.isSafeInteger(Infinity); //false
//[예제풀이 28-21]

(77.1234).toExponential();  //"7.71234e+1"
(77.1234).toExponential(4); //"7.7123e+1"
(77.1234).toExponential(2); //"7.71e+1"
//[예제풀이 28-22]
77.toExponential(); //SyntaxError: Invalid or unexpected token
//[예제풀이 28-23]
77.1234.toExponential(); //"7.71234e+1"
//[예제풀이 28-24]
(77).toExponential(); //"7.7e+1"
//[예제풀이 28-25]
77 .toExponential(); //"7.7e+1"
//[예제풀이 28-26]
// 소수점 이하 반올림. 인수를 생략하면 기본값 0이 지정된다.
(12345.6789).toFixed(); //"12346"
// 소수점 이하 1자리수 유효, 나머지 반올림
(12345.6789).toFixed(1); // "12345.7"
// 소수점 이하 2자리수 유효, 나머지 반올림
(12345.6789).toFixed(2); // "12345.68"
// 소수점 이하 3자리수 유효, 나머지 반올림
(12345.6789).toFixed(3); // "12345.679"
//[예제풀이 28-27]

// 전체 자리수 유효. 인수를 전달하지 않으면 기본값 0이 전달된다.
(12345.6789).toPrecision(); //"12345.6789"
// 전체 1자리수 유효, 나머지 반올림
(12345.6789).toPrecision(1); //"1e+4"
// 전체 2자리수 유효, 나머지 반올림
(12345.6789).toPrecision(2); //"1.2e+4"
// 전체 6자리수 유효, 나머지 반올림
(12345.6789).toPrecision(6); // "12345.7"
//[예제풀이 28-28]
// 인수를 생략하면 10진수 문자열을 반환한다.
(10).toString(); //"10"
// 2진수 문자열을 반환한다.
(16).toString(2); // "10000"
// 8진수 문자열을 반환한다.
(16).toString(8); //"20"
// 16진수 문자열을 반환한다.
(16).toString(16); //"10"