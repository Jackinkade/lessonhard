const print1 = function() {
    console.log('Крот');
};
const print2 = function() {
    console.log('овце,');
};
const print3 = function() {
    console.log('жирафу,');
};
const print4 = function() {
    console.log('зайке');
};
const print5 = function() {
    console.log('голубые');
};
const print6 = function() {
    console.log('сшил');
};
const print7 = function() {
    console.log('фуфайки');
};

const func1 = function() {
    // ...
    print3();
};

const func2 = function() {
    func1();

    setTimeout(() => {
        // ...
        print7();
    }, 1000);
};

const func3 = function() {
    setTimeout(() => {
        func2();
        // ...
        print4();
    }, 250);

    // ...
    print2();
};

setTimeout(() => {
    // ...
    print5();

    setTimeout(() => {
        // ...
        print6();
    }, 750);
}, 500);

// ...
print1();

func3();
