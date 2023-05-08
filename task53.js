function myLocalScope() {
    // Змініть код лише під цим рядком
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Запустіть та перевірте консоль
// myVar не визначений за межами myLocalScope
console.log('outside myLocalScope', myVar);
