'use strict';
console.log ('2.3 «Регулярные выражения»');
console.log('Задание 1'); //Задание 1

function checkCoupon(code) {
  var newCode =  code.toLowerCase().replace(/[\W|_]/g,'');
  
  var palindrome = newCode.split('').reverse().join('');
  
  if (newCode.length >= 10 && newCode === palindrome) {
    return true;
  } else {
    return false;
  }
}

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo',
  '%^73672'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

console.log('Задание 2'); //Задание 2

function stripTags(stringWithTags) {
  return stringWithTags.replace(/[<\w]|[\//w>]/g,'');
} 

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!',
];

for (let text of texts) {
  console.log(stripTags(text));
}

console.log('Задание 3');  //Задание 3

 function validate (formData, requirements) {
 let regExpression;
      
      for ( let requirement of requirements) {
          if (typeof requirement.rule === 'string') {
        switch (requirement.rule) { 
          case 'phone' :
            regExpression = /[\+7]\d+/;
          break;
        
          case 'email' :
            regExpression = /[a-zA-Z0-9][a-zA-Z0-9-_\.]*@/;
          break;
         }
       
        }else {
        regExpression = requirement.rule; 
        }
      
      if (!regExpression.test(formData[requirement.name])) {
        return false;
      }
      }
    
return true;
}

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' },
  { name: '1246', email: 'ks@mail.ru', phone: '+7827356882'},
  { name: 'Ksusha Lap', email: 'ks@mail.ru', phone: '+79064278065'}
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}