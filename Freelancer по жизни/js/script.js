// Точка с запятой 

console.log('Я');
console.log('учу');
console.log('JS');
console.log('Я' + ' учу' + ' JS');

let a = 'Мы'
let b = 'Учим'
let c = 'JavaScript'

console.log('a' + ' b' + ' c');

let myLifestyle = 'freelance';
console.log(myLifestyle);

const userProfile = {
	name: 'Фрилансер',
	age: 35,
	message: 'Живи, а работай в свободное время'
}
console.log(userProfile);

userProfile.age = 19;
console.log(userProfile);

let userName = 'Вася';
let user = userName;
console.log(user);

// 3 урок Типы данных
console.log(typeof userName); //string
console.log(typeof userProfile.age) //number

let pcUser;
console.log(typeof pcUser); //undefined

let block = document.querySelector('.block');
console.log(block); // null т.е. Ничего  typeof выдаст object

let willYouMarryMe = true; //boolean
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(')
}
//Также можно использовать с операторами сравнения > и <

let trueOrFalse = 585 < 425
console.log(trueOrFalse); // выдаст false

//infinity
let getInfinity = 58 / 0;
console.log(getInfinity); //infinity
console.log(typeof getInfinity); //number

//Nan не правильная математическая операция
let getNan = 'фрилансер' / 10;
console.log(getNan); //Nan
console.log(typeof getNan); //number

//BigInt
const bigInteger = 123455635349696343460694303n;
console.log(typeof bigInteger); //bigInt

//String
let userNameV1 = "фрилансер по жизни"; //String
console.log(typeof userNameV1);

let userNameV2 = 'фрилансер по жизни'; //String
console.log(typeof userNameV2);

let userNameV3 = `фрилансер по жизни`; //String в этих ковычках есть дополнительный функционал
console.log(typeof userNameV3);

//Object
let userInfo = {
	name: 'Фрилансер по жизни',
	age: 36
}
console.log(userInfo); //name: 'Фрилансер по жизни', age: 36
console.log(typeof userInfo); //Object

//Symbol
let id = Symbol('id');
console.log(typeof id); //Symbol

//Function

let funcVariable = function name(params) {
	//код функции
}
console.log(typeof funcVariable); //function


//Преобразование типов

//Строковое преоброзование
let userAge = 58;
console.log(userAge); //58
console.log(typeof userAge); //number

userAge = String(userAge);
console.log(userAge); //58
console.log(typeof userAge); //string

let userAgeV12 = 28;
console.log(userAgeV12); //28
console.log(typeof userAge); //number

userAgeV12 = Boolean(userAgeV12);

console.log(userAgeV12); //true
//Число ноль вернет false
console.log(typeof userAgeV12); //boolean


// ОПЕРАТОРЫ

//Операнд - Это к чему применяется оператор, их еще называют аргументами

let userAgeV11 = 30 - 6; // числа 6 и 30 это операнды
console.log(userAgeV11); //24

//бинарные операторы применяютмся к двум операндам
//унарный к одному:
let userAgeV13 = -800;

//Сложение строк:
let resultOne = 'Фрилансер' + ' по' + '' + ' жизни';
console.log(resultOne);

//Если складывать число и строку то выражение будет строкой, порядок не имеет знаячения
let resultTwo = 'Фрилансер ' + 58;
console.log(resultTwo);
console.log(typeof resultTwo); //string

//Казусы

let resultThree = 2 + '2';
console.log(resultThree); //22

//Операции до сложения со строкой выполняются как обычно
let resultFive = 58 - 20 + ' Фрилансер';
console.log(resultFive);

// Работа других операторов
// Вычитание:
let resultSix = '25' - 5;
console.log(resultSix); //20
console.log(typeof resultSix); //Number

//Умножение

let resultSeven = 10 * '80';
console.log(resultSeven); //800
console.log(typeof resultSeven); //Number

//Недопустимая операция 
let resultEight = 3 * 'Фрилансер';
console.log(resultEight); // Nan
console.log(typeof resultEight); //Number

//Унарный оператор сложения +

//Со строками
let resultNine = +'25';
console.log(resultNine); //25
console.log(typeof resultNine); //Number

//С числами
let resultТen = +10;
console.log(resultТen); //25
console.log(typeof resultТen);//Number

//Пример

let users = '25';
let admins = '10';
console.log(users + admins); //2510

console.log(+users + +admins);//35
//Более длинная запись с помощью функции Number
console.log(Number(users) + Number(admins));//

//Оператор присвоения 

let j = 1 + 2;
let g = 4;

let result = 8 - (j = g + 3);
console.log('Результат в скобках: ' + j); //Результат в скобках: 7
console.log('Общий результат: ' + result); //Общий результат: 1

//Присваивание по цепочке
let resultEleven = 1 + 2;

let resultTwelve = resultEleven;
let resultThirteen = resultEleven;

console.log(resultEleven);// 3 
console.log(resultTwelve);// 3
console.log(resultThirteen);// 3

//Сокращенная запись вычислений с присваением

let usersddd = 5;
console.log(usersddd);//5
usersddd += 3;
console.log(usersddd);//8
usersddd *= 2;
console.log(usersddd);//16

//Инкремент и декремент, можно применять только к переменным

let addUser = 2;
addUser++;
console.log(addUser);//3

let removeUser = 2;
removeUser--;
console.log(removeUser);//1

//Постфиксная форма
let userCounterV11 = 0;
let newUsersV11 = userCounterV11++;
console.log(newUsersV11); //Т.к. newUsers получает первоначальное значение до выполнения оператора

//Префиксная форма 
let userCounterV12 = 0;
let newUsersV12 = ++userCounterV12;
console.log(newUsersV12);//Сначало отрабатывает оператор
//Если нужно сразу получить резудьтат нужна префиксная форма
//Если нужно увелить и при этом получить значение переменной до увеличения - нужна постфиксная форма

let userCounterV13 = 4;
let newUsersV13 = 2 * ++userCounterV13;
console.log(newUsersV13)
//Приоретет у инкрементов/декрементов выше чем у большенства аривметических операций

//Отдельная более читабельная запись:
let userCounterV14 = 6;
++userCounterV14;
let newUsersV14 = 2 * userCounterV14;
console.log(newUsersV14);


//Оператор запятая позволяет выполнять сразу несколько выражений:
let userCounterV15 = (8 + 2, 19 + 1);
console.log(userCounterV15);//20 Результат выдаст только последнего выражения


//Операторв сравнения
console.log(2 > 1); //true
console.log(4 < 2); //false
console.log(58 == 36); //false
console.log(8 != 9); //true

//Присваиваем резултат переменной
let resultSixteen = 11 > 10;
console.log(resultSixteen);//true

//Сравнение строк 
//Алфавитный порядок
console.log('Б' > 'А'); //true
console.log('Скрипт' > 'Скрипка'); //true
//Количество символов
console.log('Слайдер' > 'Слайд');//true
//Регистр
console.log('Фрилансер' > 'фрилансер');//false

//Сравнение разных типов 
//Преобразование в число
console.log('58 > 10');//true
console.log('007' == 7);//true

//Логическое значение true
//станвиться 1, а false - 0
console.log(true == 1);//true
console.log(false == 0);//true

//Интересныу ситуации
let itemA = 0;
let itemB = '0';

console.log(Boolean(itemA));//false
console.log(Boolean(itemB));//true

console.log(itemA == itemB);//true
//Избежать подобных ситуации поможет оператор строго равенства или не равенства
console.log(0 === false);//false
console.log('007' === 7);//false
console.log('58' !== 58);//true

//Сравнение null с undefined
console.log(null === undefined);//false
console.log(null == undefined);//true

//Сравнение null и 0
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//Сравнение undefined и 0
console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false
//Лучше не использовать сравнение null и undefined, кроме случаев со строгим неравенствои ===
//не использовать больше, меньше, больше и равно, меньше и равно с этими значениями

//Логические операторы 
//|| ИЛИ До первого true
console.log(true || true);//true
console.log(false || true);//true
console.log(true || false);//true
console.log(false || false);//false
//Выполняется слева направо до первого true, если все false, то будет false

//Разные типы
console.log(1 || 0);//1 - Это первый true
console.log(true || 'фрилансер');//Первый true это true
console.log(null || 58);//Первый тру это 58
console.log(null || 'фрилансер' || 0);//Первый тру это фрилансер
console.log(undefined || '' || null || 0);//true не совсем вернет 0

//Присвоение значения в переменную

let userNameV16 = '';
let userNickNameV16 = 'Фрилансер';

let userV16 = userNameV16 || userNickNameV16 || 'Без имени';
console.log(userV16);//Фрилансер

//Сокращенное вычисление. Условие.
let adminsV17 = 0;
let usersV17 = 5;
adminsV17 > usersV17 || usersV17++;
console.log(usersV17);//6
//admins т.е. 0 больше user т.е. 5 это false, поэтому переходим к users++ прибовляем 1


//&& И До первого false или если все тру вернет последнее значение
console.log(true && true);//true
console.log(false && true);//false
console.log(true && false);//false
console.log(false && false);//false

//Примеры
console.log('Фрилансер' && 0 && 2 && 3);//0
console.log(1 && 2 && null && 3);//null
console.log('15' && '42');//42

//Приоретет оператора && больше чес ||
console.log(1 && 0 || 2 && 1);//1
//сначало оператор и будет false, во втором выражении и true, затем или с 1 кот тру

//Подобие условия 
let usersV18 = 1;
(usersV18 > 0) && console.log(`Пользователей ${usersV18}`);// ПОльзователей 1 


//Оператор ! Не
console.log(!true);//false
//Сначало приводит аргумент к false иил true и возвращает противоположное значение 

//Разные типы
console.log(!null);//true
console.log(!1);//false
console.log(!'');//true
console.log(!'фрилансер');//false

//Приоретет НЕ ! является наивысшим
console.log(!true && 58 || 18 && !1);//false

//Используется дял преоброзования типа в Bolean
console.log(!!'Фрилансер');//true
console.log(Boolean('Фрилансер'));//true

//Оператор обьединения с Null (??)
//Возвращает ?? возращает первый аргумент, если он не null/undefined, иначе второй
let nameV18;
console.log(nameV18 ?? 'Без имени'); //Без имени


//ФУНКЦИИ

//Чаще всего это глагол
/*
show..что то показывают
get... вовзращают значение
calc ... что-то вычисляют 
create создают
check проверяют и возвращают логическое значение 
*/
function showMessage() {
	console.log('Сообщение');//ничего не вызвалось
}

showMessage();//Сообщение Можно выполнять сколько угодно раз и ставить до обьявления функции так и после
//Можно выполнять сколько угодно раз и ставить до обьявления функции так и после

//Вложенность и видимость функции

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
//getNumOne();Попытка вызвать дочернюю функциюю за пределами родительской выдаст ошибку
getSumm();//3


//Локальные и внешние переменные 
function showMessage() {
	//Локальная переменная 
	let message = 'Сообщение';
	console.log(message);
}
//console.log(message); Попытка вызвать переменную за ее пределами вызавет ошибку

//Внешние переменные
let messageV1;

function showMessageV1() {
	//Используется внешняя переменная
	messageV1 = 'Сообщение1';
}
showMessageV1();
console.log(messageV1);//Сообщение1

let messageV2

function showMessageV2() {
	//Используется внешняя переменная
	messageV2 = 'Сообщение1';
}
console.log(messageV2); //получим undefined т.к. вызвали переменную до выполнения функции
showMessageV2();
//Если мы обьвим внешнюю и внутреннюю переменную с одним именим они будут жить каждая своей жизнью


//Параметры (аргументы)

function calcSummV4(numThree, numFour) {
	console.log('Переменная numThree:${numOne}');
	console.log('Переменная numThree:${numTwo}');

	let numSummV4 = numThree + numFour;

	console.log('Сумма:${numSumm}');
}
calcSummV4(1, 2);

//Функции колбэки
function calcSummV5(nummOne, nummTwo, more, less) {
	let nummSumm = nummOne + nummTwo;

	if (nummSumm > 3) {
		more();
	} else {
		less()
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSummV5(4, 1, showMoreMessage, showLessMessage);//Меньше чем 3

//Возврат результата

function calcSummV6(numberOne, numberTwo) {

	let numSummV6 = numberOne + numberTwo;

	//Возврат
	return numSummV6;
	//Дальше код в функции не выполняется
}

let funcRezult = calcSummV6(1, 2);
console.log(`Сумма: ${funcRezult}`); //Обратные ковычки, с другими не работает

//Рекурсия

function calcSummV7(numOneV1, numTwoV1) {
	if (numTwoV1 === 1) {
		return numOneV1;
	} else {
		return numOneV1 * calcSummV7(numOneV1, numTwoV1 - 1);
	}
}

console.log(calcSummV7(2, 3));//8

//Функциональное выражение

let showMessageV4 = function () {
	console.log('Привет!');
}; //Точка с запятой обязательна в данном случае
showMessageV4();//Привет!

//Можно копировать функ выр

function getSummV8() {
	let summ = 1 + 2;
	console.log(summ);
};

let someVar = getSumm;

someVar();
getSummV8();

/* Отличие между фкункцией и функ вырж в том что когда мы обьявляем функцию 
вызвать ее мы можем из любого места программы до после и т.д.
Функ выраж только после его создания*/


//Стрелочная функция 
//Это более простой синтаксис функционального выражения

//Многострочная стрелочная функция
let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));// Привет Вася!





//Планирование setTimeout и setInterval
//setTimeout(функция или код, задержка, параметр, ...параметр); позволяет вызвать функцию через определенное время
//setInterval(функция или код, задержка, параметр, ...параметр);регулярно вызывать ф-ю повторяя вызов через опр время

function showMessageV5(text, name) {
	console.log(`${text}, ${name}!`);
}
setTimeout(showMessageV5, 500, 'Привет', 'Васzg');//выполнится через 0.5 сек

function showNumber(num) {
	console.log(num);
	if (num < 16) {//останавливает счет на 17
		setTimeout(showNumber, 200, ++num);
	}
}
setTimeout(showNumber, 1000, 12);



//ОБЬЕКТЫ

//let userinfo = new Object(); //Синтаксис "конструктор обьекта"
//let userInfo = {}; //Синтаксис литерал обьекта

//Синтаксис 
//Свойства Ключ + значение

let userInform = {
	age: 30, // Свойство обькта
	name: 'ВАсяяя', //последняя запитая, висяячая
};

//Имена свойств

//Имя из двух и более слов 
let userInfor = {
	name: 'Зина',
	age: 33,
	'likes JS': true, // Свойство из 2х и более слов обозначается ковычками
}

console.log(userInfor.name);
console.log(userInfor['likes JS']);//Это свойство вызывается в кв. скобках

//Вычисляемое  имя
//ВЫчисляем имя
let firstPart = 'likes';
let userInforma = {
	name: 'Зина',
	age: 33,
	[firstPart + ' JS']: true,
};
console.log(userInforma['likes JS']);

//Зарезервированные слова можн оиспользовать в качестве имени свойств

// В качестве свойства может быть либо строка либо символ 

let userInformat = {
	0: 'Толя', //0 тоже самое что и '0'
};
console.log(userInformat[0]);//Толя
console.log(userInformat['0']);//Толя


//Вложенность
let userInformati = {
	name: 'Валера',
	age: 36,
	address: {
		city: 'Petrozavodsk',
		street: 'Chapaeva',
	}
}
console.log(userInformati.address.city);//Petrozavodsk


//Свойство из переменной
function makeUserInfo(name, age) {
	return {
		name: name,
		age: age,
		// ...другие свойства
	}
}
let user1 = makeUserInfo('Валера', 35);
console.log(user1);//{name: 'Валера', age: 35}

//Изменение обьекта

//Добавление свойства
let userInformatio = {
	name: 'Леха',
}
userInformatio.age = 33;//Добавили новое свойство age
console.log(userInformatio);//{name: 'Леха', age: 33}
userInformatio['likes JS'] = true;
console.log(userInformatio);//{name: 'Леха', age: 33, likes JS: true}
userInformatio.adress = {
	city: 'Petrozavodsk',
	street: 'Oktyabrskaya'
};
console.log(userInformatio);//{name: 'Леха', age: 33, likes JS: true, adress: {…}}

//Удаление свойства ничего сложного перед путем к свойсту пише delete
//Изменение тоже ничего сложного как добавление только меняем уже обьявленное свойство
//Изменять свойства можно даже в константе 
//КОпирование тоже ничего сложного к новой переменной присваиваем старую и получается копия
//Главное помнить что сам обьект не дублируется а копируется ссылка на него


//Дублирование обьектов (Object.assign)
//Синтаксис
//Object.assign(куда(обьект), что(свойство #1), что(свойство #2), ...);
let userInformation1 = {
	name: 'Галя',
	age: 30,
}

let user3 = Object.assign({}, userInformation1);
user3.age = 18;

console.log(userInformation1);//{name: 'Галя', age: 30}
console.log(user3);//{name: 'Галя', age: 18}
//Также с помощью Object.assign можно добавлять новые свойства обьекта Аналогично!!!







// Проверка существования свойства

let userInfo1 = {
	namev19: 'Valera',
	age: 32,
}
console.log(userInfo1.age);
if (userInfo1.age) {//true или false
	console.log(userInfo1.age)
}
//Опциональная цепочка
let userInfo2 = {
	name: 'Valera',
	age: 32,
	adress: {
		city: 'Petrozavodsk',
		street: 'Freedom',
	}
}
console.log(userInfo2)
console.log(userInfo?.adress?.street);// с помощью оператора ?.

//Оператор in Предпочтительный способ
let userInfo3 = {
	name: 'Valera',
	age: 32,
	adress: {
		city: 'Petrozavodsk',
		street: 'Freedom',
	}
}
if ('name' in userInfo3) {
	console.log(userInfo3.name)
}


//Цикл for in
//Для перебора всех свойств обьекта

//for (let key in object) {
//тело цикла выполняется дял каждого свойства обьекта
//}

let userInfo4 = {
	name: 'Valera',
	age: 32,
	adress: {
		city: 'Petrozavodsk',
		street: 'Freedom',
	}
}

for (let key in userInfo4) {
	//ключи
	console.log(key); //name, age, adress
	// значение ключей
	console.log(userInfo4[key]);
}

for (let key in userInfo4.adress) {
	//ключи
	console.log(key); //city, street
	//значения ключей
	console.log(userInfo4.adress[key]); //Petrozavodsk, Freedom
}



//Методы обьекта
let userInfo5 = {
	name: 'Valera',
	age: 32,
	adress: {
		city: 'Petrozavodsk',
		street: 'Freedom',
	}, //запятая обязательна

	showInfo() {
		console.log(`${userInfo5.name}, ${userInfo5.age} года. Адрес: г.${userInfo5.adress.city} улица ${userInfo5.adress.street}`)
	}
}
userInfo5.showInfo(); //вызов функции: Valera, 32 года. Адрес: г.Petrozavodsk улица Freedom

//Использование this 
//Вместо названия переменной в вызове можно использовать THIS
let userInfo6 = {
	name: 'Valera',
	age: 32,
	adress: {
		city: 'Petrozavodsk',
		street: 'Freedom',
	}, //запятая обязательна

	showInfo() {
		console.log(`${this.name}, ${this.age} года. Адрес: г.${this.adress.city} улица ${this.adress.street}`)
	}
}
userInfo5.showInfo();
//Не работает со стрелочными функциями и нужно быть осторожным со вложенностью

// Функция конструктор 
// Для создания множества обьектов 
//Это обычные функции но есть два правила:
//1. Имя функции с большой буквы
//2. Эта функция должна вызываться с помощбю оператора new

function UserInfo(name) {
	//this = {}; Создается пустой обьект НЕЯВНО
	this.name = name;
	this.age = 30;
	// return this; Возвращается обьект НЕЯВНО
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));









//               IF ELSE в JAVASCRIPT. Условный оператор "?". Примеры IF ELSE.



let message = 'Привет, фрилансер!';
let first = 5;
let second = 20;
if (2 > 1) {
	console.log(message);//Привет, фрилансер! Код в фигурных скобках выполниться только если значение а круглых скобках вернет TRUE
};
//короткая запись
if (2 > 1) console.log(message);

if (first === second) {
	console.log(message); //false код не выполнится
};

// IF ELSE

let message1 = 'Привет фрилансер!';
let number1 = 5;

if (number1 > 10) {
	console.log(message1);
} else {
	console.log('Условие не выполнено :(');//else выполняется при false
};
// Также с несколькими проверками можно использовать ELSE IF


//Условный оператор "?" Тернарнарный оператор

let message2 = 'Привет';

/*let message2End;
if (5 > 1) {
	message2End = ', Вася!';
} else {
	message2End = ', Оля!';
}
message2 += message2End;
console.log(message2);*/

let message2End = (5 > 10) ? ', Вася!' : ', Оля!';
message2 += message2End;
console.log(message2);//Привет Оля!
//Этот оператор нужно использовать тогда когда нужно вернуть то или иное значение т.е. с двумя условиями








           //Циклы FOR и WHILE в JavaScript. Директивы break и continue


//Цикл WHILE

/*while (условие) {
	//Тело цикла
	//Тут будет выполняться код
}*/

let num1 = 0;
while (num1 < 5) {//true поэтому код выполнится
	console.log(num1);//вызовет 0
	num1++// добавляет 1 до 4
};

let num2 = 5;
while (num2) {
	console.log(num2);
	num2--
};

//Пример без {}. Если тело цикла состоит из одной строки можно сократить
let num3 = 5;
while (num3) console.log(num3--);

//КОнструкция DO...WHILE
let num4 = 0;
do {
	console.log(num4);
	num4++;
} while (num4 < 5);
//Чаще не используется



//Цикл FOR

//for (Начало; Условие; Шаг) {
	//Тело цикла
	// Тут будет выполняться код
//}

for (let num5 = 0; num5 < 5; num5++) {
	console.log(num5);
}
//Код будет работать если вызывать переменную только внутри цикла или можно обьявить переменгную до цикла

//Можно убрать любую чатсть цикла
let num6 = 0;
for (; num6 < 5; num6++) {
	console.log(num6);
}


//Директива break 
let num7 = 0;
for (; num7 < 5; num7++) {
	console.log(num7);
	if (num7 == 2) break; //цикл прекращает работу
}
console.log(`Работа окончена, num7 = ${num7}`);

//Директива continue
let num8 = 0;
for (; num8 < 5; num8++) {
	if (num8 == 2) continue; //пропустили 2 итерцию
	console.log(num8);
}

//Директивы break и continue нельзя использовать с тернарным оператором "?"

//Метки не записал firstFor 








						//Числа в JS





//Десятичные числа записываются через точку 4.58
//Числа с большим количеством нулей

let sumBigNum = 1e6;// 1*1000000
console.log(sumBigNum);//1000000
let sumLittleNum = 1e-6;//1/1000000
console.log(sumLittleNum);//0.000001

//Округление 

let numOnee = Math.abs(5);
let numTwoo = Math.floor(-2.2);
let numThree = Math.ceil(5.8);
let numFour = Math.ceil(-2.2);
let numFive = Math.round(5.6);
let numSix = Math.round(-2.4);
let numSeven = Math.round(5.845 * 10) / 10;// 58.45 -> 58 -> 5.8
let numEight = Math.round(5.845 * 100) / 100;// 584.5 -> 585 -> 5.85
let numNine = Math.round(5.8449 * 100) / 100;// 584.49 -> 584 -> 5.84
let numTen = Math.round(5.845);

console.log(numOnee);//5
console.log(numTwoo);//-3
console.log(numThree)//6
console.log(numFour);//-2
console.log(numFive);//6
console.log(numSix);//2
console.log(numSeven);//5.8
console.log(numEight);//5.85
console.log(numNine);//5.84
console.log(numTen.toFixed(1));//6
console.log(+numTen.toFixed(1));//6
console.log(Number(numTen.toFixed(1)));//6
//Метод toFixed(n) - округляет число до n знаков после запятой и возвращает строковое значение

//Есть проблема не точных вычислений, вот решение с помощью Number.EPSILON:

let sourceNum = 1.005 + Number.EPSILON; // 1.01
let numEleven = Math.round(sourceNum * 100) / 100;
console.log(numEleven); //1
console.log(sourceNum * 100);//100.49999999999999
console.log(Math.round(sourceNum * 100));//100

//Повторить isNan и isFinite

//parseInt и parseFloat

let valueOne = +'150';
console.log(valueOne);//150
console.log(typeof valueOne);//number

let valueTwo = +'150px';
console.log(valueTwo);//Nan
console.log(typeof valueTwo);//number

//Функция parseInt возвращает целое число, а parseFloat число с плавающей точкой
//Преобразуют числа с единицей измерения в число

let valueThree = parseInt('150.58px');
console.log(valueThree);//150
console.log(typeof valueOne);//number

let valueFour = parseFloat('150.58px');
console.log(valueFour);//150.58
console.log(typeof valueFour);//number

let valueFive = parseFloat('a150.58px');
console.log(valueFive);//Nan
console.log(typeof valueFive);//number
//Перед числом не должно быть букв

console.log(Math.random());//Случайное число от 0 до 1, не включая 1
console.log(Math.max(5, 85, -49));// 85
console.log(Math.min(5, 85, -49)); //-49
let numElevenn = -58;
console.log(Math.abs(numElevenn));//58 Абсолютное значение числа
console.log(Math.pow(5, 8));//390625 5 в 8 степени











								// СТРОКИ







//Одинарные или двойные ковычки  одинаково, а в строку с обратными мы може
// вставлять произвольные выражения, обернув их в ${...}:


let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;
console.log(textAll);// Привет! Я строка!

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);// Сумма: 11

//Многострочная запись
let text = `Привет!
Ыаупукпукуп уп wefw
qw qw dq  qqw !
`;
console.log(text);


//Спецсимволы

//Перенос строки \n
let textTwo = "Привет! \nВы на канале\nФрилансер по жизни";
console.log(textTwo);

//Табуляция 
let textThree = "Привет\n\tВы на канале\n\t\tФрилансер по жизни";
console.log(textThree);

//Обратный слэш
let textFour = "Привет! Вы на канале Фрилансер по жизни \\ IT и фриланс";
console.log(textFour);

//Кавычки \' \"
let  textFive = "Привет! Вы на канале \"Фрилансер по жизни IT и фриланс\"";
console.log(textFive);


//Работа со строками 

//Длина строки, свойство lenght
let textSix = "Привет!";
console.log(textSix.length);

//Изменение регистра строки
let textSeven = "Привет!";
console.log(textSeven.toUpperCase());
console.log(textSeven.toLowerCase());

//indexOf
//includes
//startsWith
//endsWith
//slice- разрезать