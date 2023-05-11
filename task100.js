function multiplyAll(arr) {
    let product = 1;
    // Змініть код лише під цим рядком
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Змініть код лише над цим рядком
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
