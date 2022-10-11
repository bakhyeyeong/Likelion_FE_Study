let value=[10, 1, 100, 200, 300, 10]
let value2= {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
}

Object.keys(value)
Object.keys(value2)

for (i in value2) { //for in으로 순회를 돌 수가 없음
        console.logo(i)
}

for (i of value2) { //of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. ->error
    console.logo(i)
}

Object.entries(value)
Object.entries(value2)

for (i of Object.entries(value2)) { 
    console.logo(`key는 ${i[0]}고 value는 ${i[1]}입니다.`)
}

for ([i, j] of Object.entries(value2)) { //구조분해할당 
    console.logo(`key는 ${i}고 value는 ${j}입니다.`)
}

for ([i, j] of [[10, 20],[30, 40]]) { //구조분해할당 
    console.logo(i,j)
}

for ([i, j, ...k] of [[10, 20, 300, 1, 2],[30, 40, 500, 1]]) {
    // 몇개 들어올지 모르는 경우(이렇게 쓸일은 거의 없다.)
    console.logo(i,j,k)
}

for ([[i, j], k] of [[[10, 20], 300],[[30, 40], 500]]) {
    console.logo(i,j,k)
}

for ([i, j] of [[[10, 20], 300],[[30, 40], 500]]) { //[]가 i 나머지 j로 받아옴
    console.logo(i,j)
}

// 일반 변수 선언의 구조분해할당
// let a, b, c
// [a,b]=[10, 20]

let one, two, three ;
[one, two, three]= '010-5044-2903'.split('-')

let one1, two1, three1, four1 ;
[one1, two1, three1, ...four1]= '010-5044-2903-01-02-03'.split('-') //spread 문법 사용하면 나머지 수 다 four1로 받아올 수 있음

//문제
//a,b,c로 각각을 분해할 것입니다.
//a에는 10,b에는 20,30,40, c에는 50을 할당해보세요

let a,b,c;
data=[10,20,30,40,50];

// [...a,b,c]=data; //spread문법 마지막에만 적용 가능

// [a,...b,c]=data;

[a,b,...c]=data;

[a,b,c]=[data[0],[data[1],data[2],data[3]],data[4]]; //원본조작 하지않고 데이터 구조분해할당

let data={
    name:'hojun',
    age:10,
    money:100
};

let {name, age}=data;
let {name, age}= {name:'hojun',age:10};

let data={
    name:'hojun',
    age:10,
    money:100,
    Company:'weniv',
};

let {name,age,...rest}=data

let {age,name,...rest}=data //순서를 뒤바꿔도 변수명과 서로매칭되어 할당이 된다.

// RORO기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용한다.
let a=[10,20,30]
a.push(100)
a.unshift(1000)

let a=[10,20,30]
a=[1000,...a,100] //위의 두문법 이렇게 한번에 할 수있음

let a=[1,2,3]
let b=[10,20,30]
let c=[...a,...b] //전개해서 넣음 이렇게 합쳐진 값을 다시 구조분해할당

let str='hello world'
console.log([str])

let str='hello world' 
console.log([...str]) //단어 한개씩 잘라서 넣음

'!'.repeat(10)
[...'!'.repeat(10)]

