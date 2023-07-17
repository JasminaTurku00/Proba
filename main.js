const customers = [
    {
       'id': 1,
       'firstName': 'Abby',
       'lastName': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
    },
    {
       'id': 2,
       'firstName': 'Jerry',
       'lastName': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
    },
    {
       'id': 3,
       'firstName': 'Dianna',
       'lastName': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
    },
    {
       'id': 4,
       'firstName': 'Dev',
       'lastName': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
    },
    {
       'id': 5,
       'firstName': 'Maria',
       'lastName': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
    }
 ];

 //1
//  const najviseTrosiMusko= customers.filter((e) => e.gender === 'M').map(e => `${e.firstName}_${e.lastName}`)
//  console.log(a)

//2
// const prosek = customers.reduce(
//   (acc, currentValue) => acc + currentValue.age,
//   0
// );
// console.log(prosek/customers.length);

//3 
// const marriedPeople = customers.filter(e => e.married).reduce((acc, currentValue) => acc + currentValue, 0)
// console.log(res)

 //4
// const najviseTrosi = customers.map(e=> e.expense)
// const max1= Math.max(...najviseTrosi)
// const osoba = customers.find(e => e.expense === max1)
// console.log(osoba)

//5

// const muskaOsoba = customers.filter(e => e.gender==='M').map(e => e.expense)
// const max1= Math.max(...muskaOsoba)
// const osoba = customers.find( e => e.expense === max1)
// console.log(osoba)

