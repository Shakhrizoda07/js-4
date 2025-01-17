// let admin = ('Джон');
// let name = ('Jhon');
// alert (admin);

// let user = prompt('Как тебя зовут?');
// alert (user);

// let a = prompt (' birinchi son',1);
// let b = prompt (' ikkinchi son',2);
// alert ( +a + +b )

// let start = prompt('Какое официальное название  JavaScript?');
// if(name == 'ECMAScript'){
//   alert('togri')
// }


let login = prompt('Кто там?');

if ( login === null || login === '') {
  alert('Отменено');
} else if (login === 'Админ') {
  let password = prompt('Пароль?');
if (password === null || password === '') {
    alert("Отменено");
} else if (password === 'Я главный') {
    alert('Здравствуйте!');
} else if (password === ''){
    alert('Неверный пароль');
}
} else {
  alert('Я вас не знаю');
}









