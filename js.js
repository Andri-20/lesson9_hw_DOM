// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

// let targets=document.getElementsByClassName('target');
// let target=targets[0];
// for (const simpson of simpsons) {
//     let div=document.createElement('div');
//     div.classList.add('member');
//
//     let p=document.createElement('p');
//     p.innerText=`${simpson.name} ${simpson.surname} ${simpson.age} ${simpson.info}`;
//     div.appendChild(p)
//
//     let img=document.createElement('img');
//     img.src=simpson.photo;
//     div.appendChild(img);
//
//     target.appendChild(div);
// }

//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
//

//
// Цикл в циклі
// - Є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// let targets=document.getElementsByClassName('target');
// let target=targets[0];
// for (const coursesArrayElement of coursesArray) {
//     let title=document.createElement('h2');
//     title.innerText=coursesArrayElement.title;
//     target.append(title);
//
//     let pDuration=document.createElement('p');
//     pDuration.innerText=`monthDuration: ${coursesArrayElement.monthDuration}, hourDuration: ${coursesArrayElement.hourDuration}`
//     target.append(pDuration);
//
//     let ulModules=document.createElement('ul');
//     for (const module of coursesArrayElement.modules) {
//         let liModule=document.createElement('li');
//         liModule.innerText=module;
//         ulModules.append(liModule)
//     }
//     target.append(ulModules)
// }

// Приклад структири знаходиться у файлі example.png
// ------------------
//
//
//     - створити блок,
// let div=document.createElement('div');
// //     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap','collapse','alpha','beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background='silver';
// div.style.color="black";
// div.style.fontSize='32px';
// // - додати цей блок в body.
// document.body.append(div);
// // - клонувати його повністю, та додати клон в body.
// let target = document.getElementsByClassName('target')[0]
// target.appendChild(div.cloneNode(true))
//
// - Є масив:
// let array = ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// let menu=document.getElementsByClassName('menu');
// let ul=menu[0];
// for (const string of array) {
//     let li=document.createElement('li');
//     li.innerText=string;
//     ul.append(li);
// }
// menu.append(ul)

// Завдання робити через цикли.
//
// - Є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let targets=document.getElementsByClassName('target');
// let target=targets[0];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
// let courses=document.createElement('h2');
// courses.innerText=`Title: ${coursesAndDurationArrayElement.title}, monthDuration: ${coursesAndDurationArrayElement.monthDuration}`;
// target.append(courses);
// }

//
// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let target = document.getElementsByClassName('target')[0]
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.classList.add('item')
//     target.append(div)
//
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerText = coursesAndDurationArrayElement.title
//     div.append(h1)
//
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerText = coursesAndDurationArrayElement.monthDuration
//     div.append(p)
//
//     target.append(div)
// }
//
//
//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let div = document.createElement('div')
// div.id = 'text'
// document.body.append(div)
//
// let button = document.createElement('button')
// button.innerText = 'Click me'
//
// button.onclick = function (){
//     div.remove()
// }
//
//
// document.body.append(button)
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement("form")
//  form.name = 'f1'
//  document.body.append(form)
//
//  let input = document.createElement('input')
//  form.append(input)
//
//  let button = document.createElement('button')
//  button.innerText = 'save'
//  form.append(button)
//
//  form.onsubmit = function (e){
//      e.preventDefault()
//      if (input.value >= 18){
//          console.log('Enter')
//      }else if (input.value < 18){
//          console.log('Go out!')
//      }
//  }
//
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//let input1 = document.createElement('input');
// // input1.setAttribute('placeholder','Enter rows')
// // let input2 = document.createElement('input');
// // input2.setAttribute("placeholder",'Enter columns')
// // let input3 = document.createElement('input');
// // input3.setAttribute('placeholder','Enter text')
// // let btn = document.createElement('button');
// // btn.innerText = 'Click'
// //
// // document.body.append(input1,input2,input3,btn);
// //
// // btn.addEventListener('click',function () {
// //     let rw = input1.value;
// //     let cl = input2.value;
// //     let txt = input3.value;
// //
// //     let generator = (row,column,text) => {
//     let tableHtmlElement = document.createElement('table');
//     document.body.append(tableHtmlElement);
//
//         for (let i = 0; i < row; i++) {
//             let tr = document.createElement('tr');
//             tableHtmlElement.append(tr);
//
//             for (let j = 0; j < column; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = text;
//                 tr.append(td);
//             }
//         }
//     }
//     generator(rw,cl,txt);
//     btn.disabled=true;
// })
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)