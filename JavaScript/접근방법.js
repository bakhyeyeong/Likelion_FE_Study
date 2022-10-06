const object = {
    one: 1,
    two: 2,
    three: 3,
    log2 : (data) => {
        console.log(data);
    } 
}
const 변수 = 'one'

console.log(object.a); // undefined
console.log(object.one) // 1
console.log(object[변수]); // 1
console.log(object["one"]) // 1
object["log2"]('안녕하세요') // '안녕하세요' 가 출력됩니다.

/* why?
. 접근법은 object에 해당 키가 존재해야만 접근할 수 있습니다.
[] 접근법은 변수를 이용할 수 있습니다.
즉 어딘가에서 계산하거나 구해진 자료를 넣었을 때, 그게 key 값과 같다면 출력됩니다.
*/