// 객체를 쉽게 만드려고 사용 + 메모리 효율좋음
let book ={
    책이름: "JavaScript",
    책가격: 1000,
    저자:'홍길동',
    출판일:'22.10.11'
}

let newBook ={}

newBook['책이름']='JavaScript' //예를 들어 form에서 입력 받은 값
newBook['책가격']=1000000
newBook['저자']='혜영'
newBook['출판일']='22.10.30'

function Book(책이름, 책가격, 저자, 출판일){
    // this={}
    this.책이름= 책이름
    this.책가격= 책가격
    this.저자= 저자
    this.출판일= 출판일
    // return this
    // return 생략할 시 undefined
}

// let data= Book('혜영이의 대모험',10,'혜영','22.12.30') new 키워드 안붙이면 undefined 나옴

let book1= new Book('혜영이의 대모험',10,'혜영','22.12.30') //붙이면 객체로 나옴
let book2= new Book('혜영이의 대모험2',10,'혜영','22.12.30')
let book3= new Book('혜영이의 대모험3',10,'혜영','22.12.30')

console.log(book1,book2,book3)
