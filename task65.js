function testGreaterThan(val) {
    if (val > 100) {  // Змініть цей рядок
        return "Over 100";
    }

    if (val > 10) {  // Змініть цей рядок
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);
