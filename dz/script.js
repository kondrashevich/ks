function dz() {
alert('первая задача')
var num1 = +prompt('Введите 1-ое число', '');
var num2 = +prompt('Введите 2-ое число', '');
var summ   = num1 + num2;
var sub    = num1 - num2;
var multi  = num1 * num2;
var divide = num1 / num2;
var summSquare = (Math.pow(num1, 2) + Math.pow(num2, 2)) / 2;
var modul = (Math.abs(num1) + Math.abs(num2)) / 2;
alert( 'Первое число = ' + num1 + ', второе число = ' + num2 +
	'\nсумма = ' + summ + 
	'\nразность = ' + sub +
	'\nпроизведение = ' + multi +
	'\nчастное = ' + divide +
	'\nсреднее арифметическое квадратов 2-ух чисел = ' + summSquare +
	'\nсреднее арифметическое модулей 2-ух чисел = ' + modul);
};

function lodka(){
alert('лодка')
var S, V, U, T1, T2
var V=+prompt('Введите скорость лодки: ')
var U=+prompt('Введите скорость течения реки: ')
var T1=+prompt('Введите время движения по озеру: ')
var T2=+prompt('Введите время движения по реке: ')
var S=T2*(V-U)+T1*V;
alert(S +' длина пути лодки');
};


function horse(){
alert('шахматы')
var x1, y1, x2, y2
var x1=+prompt('Введите 1 координату первого поля: ')
var y1=+prompt('Введите 2 координату первого поля: ')
var x2=+prompt('Введите 1 координату второго поля: ')
var y2=+prompt('Введите 2 координату второго поля: ')
if (Math.abs((x2 - x1) == 2) && Math.abs((y2 - y1) == 1) ||
    Math.abs((x2 - x1) == 1) && Math.abs((y2 - y1) == 2)) {
    alert("True");
}
else 
{
     alert("False");
}
	}


function word(){
var numb = prompt('Введите слово', '');
	
var m = numb.length - 1;
var s = numb.length;

for (var i = m; i >= 0; i--) {
	numb = numb.concat(numb[i]);
}

numb = numb.slice(s);
alert(numb);
}

function week(){
var a=prompt('Введите целое число от 1 до 7')
a=parseInt(a);
switch(a){
case 1: alert('Понедельник'); break;
case 2: alert('Вторник'); break;
case 3: alert('Среда'); break;
case 4: alert('Четверг'); break;
case 5: alert('Пятница'); break;
case 6: alert('Ура! Суббота!'); break;
case 7: alert('Ура! Воскресенье!'); break;
break;
default: alert('Нужно ввести целое число от 1 до 7!\n Вы ввели '+a)
}
}

function stolbci() {
	var start = prompt('Введите начальное число', '');
	var finish = prompt('Введите конечное число', '');
	var stolbci = prompt('Введите количество столбцов', '');
	var m = 0;
	var result = '';
for (var i = start; i <= finish; i++) {
	var n = i.toString();
	m++;
	if(i < 10){
		 result = result  + '   ' + n ;
	} else if (i >= 10 && i <= 99){
		result = result + '  ' + n;
	} else {
		result = result + ' ' + n;
	}
	if (m % stolbci == 0) {
		result = result.concat('\n');
	}
}
alert(result);
}

function oboima() {
n=prompt('Какой размер обоймы?')
n=parseInt(n);
arr=[];
x='';
while (x=='') {
x=prompt ('Нажми ок!');

if (arr.length==0) {
//перезарядка
for (i=0; i<n; i++) {
arr.push('патрон');
}
alert('Перезаряжено');
continue;
}
//выстрел
if (arr.length!=0){
arr.pop();

alert('Выстрел. Осталось '+arr.length+' ');
continue;
}
}
}

function goroda(){
var x=prompt('Введите количество городов');
x=parseInt(x)
arr=[];
for (i=0; i<x; i++) {
y=prompt('Введите название города');
arr.push(y)
}
console.log(arr);
}


function resheto(){
x=prompt('Введите максимальное число')
x=parseInt(x);
var t=simple(x);

function simple(max){
var arr=[];
for (var i=2;i<=max;i++) {
	arr[i]=true;
}
n=2;
while (n*n<max) {
	if (arr[n]==true) {
	for(i=2;i*n<=max;i++) {
	arr[i*n]=false;
	}
}
n++;
}
return arr;
}
console.log('Простые числа:\n')
for (i=2;i<x;i++) {
if (t[i]) console.log(i+'\t');
}
};


function cikli(){
	var a = +prompt('Введите число','');
	var arr = 1;
	for (var i = 1 ; i <= a; i++) {
		arr = arr * i;
	}
	console.log(arr);
};


function massiv(){
	var arr = [];
	var a = +prompt('Ведите размер массива', '');
	var max = +prompt('Введите максимальное число', '');
	var numbMax = 0;
	var numbMin = max;
	var idMax;
	var idMin;
	var text = ' id этой ячейки = '
	for (var i = 0; i < a; i++) {
		arr.push(random(max));
		for (var j = 0; j <= arr.length; j++) {
			if (arr[j] > numbMax ) {
				numbMax = arr[j];
				idMax = j;
			}
			if (arr[j] < numbMin ) {
				numbMin = arr[j];
				idMin = j;
			}
		}
	}
	function random(max) {
		var min = 0;
		return Math.floor(Math.random()*(max - min + 1)) + min;
	}
	console.log(arr);
	alert('максимальный элемент массива ' + numbMax + text + idMax);
	alert('минимальный элемент массива ' + numbMin + text + idMin);
}

function smart(){
var smart={}
smart.name='xiaomi';
smart.hdd=8192; 
smart.ram=2048; 
smart.apps=[];
smart.active=[];
smart.addapp=function(name,hdd,ram) {
x=smart.apps.length;
smart.apps[x]={};
smart.apps[x].name=name;
smart.apps[x].hdd=hdd;
smart.apps[x].ram=ram;
}
smart.start=function(n) {
smart.active.push(n);
}
smart.mystatus=function(){
usedhdd=0;
	for(i=0;i<smart.apps.length;i++) {
	usedhdd+=smart['apps'][i].hdd;
	}
	usedram=120;
	for(i=0;i<smart.active.length;i++) {
	j=smart.active[i];
	usedram+=smart['apps'][j].ram;
	}
alert('Модель:' +smart.name+' \nЖесткий диск: '+usedhdd+'/'+smart.hdd+'\nПотребление памяти: '+usedram+'/'+smart.ram);
}
smart.addapp('firefox',30,250);
smart.addapp('opera',300,200);
smart.addapp('chrome',50,300);
smart.addapp('Мимишки',120,5)
smart.start(2);
smart.mystatus();
}