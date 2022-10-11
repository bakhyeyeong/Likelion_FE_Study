// 연습문제
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 중간고사 점수를 다 더하는 코드를 함수로 작성해주세요.
function avg(data){
    let total=0;
    for(let i=0; i<data.length; i++){
        total += data[i].중간고사점수
    }
    return total/ data.length;
}

//이외의 코드
function 평균값구하기(data){
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"]
    }
    return sum / data.length
}
//data의 중간고사 점수 값을 map으로 중간고사 점수 변수에 새로운 배열로 반환
// 중간고사 점수의 누적합을 reduce를 이용하여 중간고사 점수합 변수에 넣어줌 
function 평균값구하기(data) {
    let 중간고사점수 = data.map((x) => x.중간고사점수)
    let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));


// call by value, reference, sharing
// array와 같은 covension 자료형을 넘길 때에는 함수 안에서 값의 수정이 된다.
// 값을 넘기면 함수안에서 값이 수정이 되지 않고, 주소값을 넘기면 함수안에서 값이 수정된다.
let test = [10, 20, 30]
// 자바스크립트의 callby value, call by reference에 대해서 설명하세요
// 답변: 자바스크립트는 call by value만 존재

// 
function 함수(a){
    a[0]=1000
}
함수(test)

//값의할당
let test =100
function 함수(a){
    a=1000
}
함수(test)

// 반례 (call by reference 아님)
// 따라서 call by sharing 안에서 바꾸는건 가능하지만, 아예 자료형을 바꾸는 것은 안됨
var a ={}; 
function test(b){
    b=1000;
}
test(a)

function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}


// 클로저
var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능