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
V=+prompt('Введите скорость лодки: ');
while ((isNaN(V)) || (V<=0)) {
	V=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
U=+prompt('Введите скорость течения реки: ');
while ((isNaN(U)) || (u<=0) || (U>=V)) {
	U=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
T1=prompt('Введите время движения по озеру: ');
while ((isNaN(T1)) || (T1<=0)) {
	T1=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
T2=prompt('Введите время движения по реке: ');
while ((isNaN(T2)) || (T2<=0)) {
	T2=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
result = V * T1 + (V - U) * T2;
alert(S +' длина пути лодки');
};


function horse(){
	alert('шахматы')
	x1=prompt('Введите 1 координату первого поля: ');
while ((parseInt(x1)!=x1) || (x1<1) || (x1>8)) {
	x1=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
y1=prompt('Введите 2 координату первого поля: ');
while ((parseInt(y1)!=y1) || (y1<1) || (y1>8)) {
	y1=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
x2=prompt('Введите 1 координату второго поля: ');
while ((parseInt(x2)!=x2) || (x2<1) || (x2>8)) {
	x2=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
y2=prompt('Введите 2 координату второго поля: ');
while ((parseInt(y2)!=y2) || (y2<1) || (y2>8)) {
	y2=prompt('Вы ввели недопустимое значение, попробуйте ещё раз:');
}
x1=parseInt(x1);
y1=parseInt(y1);
x2=parseInt(x2);
y2=parseInt(y2);
X=Math.abs(x2-x1);
Y=Math.abs(y2-y1);
if (((X==1) && (Y==2)) || ((X==2) && (Y==1))) {
	result = true;
} else {
	result = false;
}
alert(result);
	}


function word(){
a = prompt('Введите слово:');
i = a.length - 1;
result = "";
while (i != -1) {
	result = result + a[i];
	i = i - 1; 
}
alert(result);
}

function sumNeo () {
a = prompt('Введите неотрицательное число:');
while ((isNaN(a)) || (a<0)) {
	a = prompt('Нужно ввести неотрицательное число!\n Вы ввели '+a);
}
sum = 0;
a = parseInt(a);
for(i=1; i <= a; i++) {
	sum = sum + i;
}
alert("Сумма чисел от 1 до " + a + " равна " + sum + ".");
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

function menu(){
a = prompt('Введите команду:');
switch(a) {
  case "start":
    alert("Начало");
    break;
  case "options":
    alert("Опции")
    break;
  case "exit":
    alert("Выход")
    break;
  default:
  alert("Команда не распознана");
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

function goroda2(){
cities = [];
i = -1;
while (true) {
    i = i + 1;
    cities[i] = prompt('Введите название города');
    if (cities[i] == "") {
        cities.pop();
        break;
    }
}
alert('Вы ввели города: ' + cities);
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


function () fight{
var fighter =
{
firstname: 'Иван',
lastname: 'Петров',
age: 20,
color: "черный",
backpack:
{ 'удочка':{weight:5,amount:10},
'наживка':{weight:6,amount:30},
'леска':{weight:1,amount:1},
'грузила':{weight:30,amount:1},
'крючки':{weight:1,amount:5}
}
}
}

function author() {
var security = {};
security.login = 'Kris';
security.password = 'pasword27';
function authorization() {
    name = prompt('Введите имя:');
    pass = prompt('Введите пароль:');
    if ((name == security.login) && (pass == security.password)) {
        alert('Привет, ' + name + '!');
    } else {
        alert('Вы указали неверный логин или пароль');
    }
}
authorization();
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

function rekursia () {
	 var r = parseInt(prompt('Введите число'));
    function rek(r) {
        if (r == 1) {
            return 1
        }
        return a*(rek(r-1))
    }
    alert(rek(a))	
}

function cifri () {
		var c = prompt('Введите число');
    b = '';
    function rek(c) {
        if (c < 10) {           
            b += (Math.floor(c));
            return b
        } else {
            b += (Math.floor(c%10));
            return rek(c/10)
        }   
    };
    alert(rek(c))
}

function stepen () {
	var z = parseInt(prompt('Введите заданное число'));
    var u = parseInt(prompt('Введите указанное число'));
    function rek(z, u) {
        while(z > 1){            
            if (z == u) {
                alert('YES')
            }
            if (z < u) {
                return alert('NO');
                break
            }
            return rek(z/u,u)
       }        
    };
    rek(z, u) 
}
