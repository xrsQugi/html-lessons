const wring_out_time = 300;
const squatting_time = 100;


function wringOut(count){
    return new Promise((resolve, reject) => {
        if(count > 50){
            reject(new Error("Слишком много отжиманий"));
        }
        setTimeout(() => {
            resolve();
        }, count * wring_out_time);
    });
}

function squatting(count){
    return new Promise((resolve, reject) => {
        if(count > 50){
            reject(new Error("Слишком много приседаний"));
        }
        setTimeout(() => {
            resolve();
        }, count * squatting_time);
    });
}

//! Первый пример (отжимания)
// console.log("Начать отжимание");
// wringOut(10).then(()=> {
//     console.log('Отжался 10 раз');
// })

//! Второй пример (приседания)
// console.log("Начать присидания");
// squatting(20).then(()=> {
//     console.log('Присел 20 раз');
// })

//! Третий пример (тренировка)
// console.log("Начать тренировку");

// wringOut(10)
//     .then(()=> {
//         console.log('Отжался 10 раз');
//         return squatting(60);
//     })
//     .then(()=> {
//         console.log('Присел 20 раз');
// })

//! Четвертый пример (сложная тренировка)
// console.log("Начать сложную тренировку");

// wringOut(10)
//     .then(()=> {
//         console.log('Отжался 10 раз');
//         return squatting(20);
//     })
//     .then(()=> {
//         console.log('Присел 20 раз');
//     })
//     .catch((err) =>{
//         console.log(err.toString());
//     })
//     .finally(() =>{
//         console.log("Тренировка закончилась");
//     })

//! Пятый пример (сложная тренировка)

async function myTraining(){
    console.log("Начать сложную тренировку");
    try {    
        await wringOut(10);
        console.log('Отжался 10 раз');
        await squatting(200);
        console.log('Присел 20 раз');
        return "Тренировка выполнена успешно";
    } 
    catch(err) {
        console.log(err.toString());
        return "Тренировка выполнена не удачно";
    }
}

myTraining().then((result) => {
    console.log(result);
})