function task1() {
    let myArr = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];
    // --------------- for of ---------------
    // for (let key of myArr) {
    //     console.log(typeof key);
    // }
    // for (let key of myArr) {
    //     if (typeof key === "number") {
    //         key += 3;
    //     }
    //     console.log(key);
    // }
    // --------------- for each ---------------
    myArr.forEach((element) => console.log(typeof element));
    myArr.forEach(function (element) {
        if (typeof element === 'number') {
            element += 3;
        }
        console.log(element);
    })
}

function task2() {
    const number = +prompt('Enter you integer:')
    let randomArray = [];
    for (let i = 0; i < number; i++) {
        randomArray.push(Math.floor(Math.random() * 11));
    }
    console.log(randomArray);

    let randomArrayCopy = Object.assign([], randomArray);
    for (let i = 2; i < randomArrayCopy.length; i += 3) {
        randomArrayCopy[i] *= 3;
    }
    console.log(randomArrayCopy);

}

function task3() {
    let student1 = {
        firstName: 'John',
        lastName: 'Smith',
        mark: 100,
    }
    let markStudent2 = {mark: 0};
    let student2 = {...student1, ...markStudent2};

    let student3 = Object.assign({}, student1);
    student3.mark = 80;

    let marksArray = [student1.mark, student2.mark, student3.mark];

    function getAverage(array) {
        return array.reduce((a, b) => (a + b)) / array.length;
    }

    const marksAverage = getAverage(marksArray);
    console.log(`Group average = ${marksAverage}`);
    console.log(student1.mark, student2.mark, student3.mark);

    for (let key in student1) {
        console.log(key, student1[key]);
    }
}