function generate() {
var numbers = [];
for(var i=0; i<6; i++) {
numbers.push(Math.floor(Math.random() * 45)+1);
}
return numbers;
}/* 배열 안에 넘버가 포함 되있는지 확인*/
