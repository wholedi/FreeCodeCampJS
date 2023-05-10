const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Змініть код лише під цим рядком
    if (par === 5 && strokes === 5) {
        return "Par"
    }
    if (par === 5 && strokes === 9) {
        return "Go Home!"
    }
    return names[strokes-1];
    // Змініть код лише над цим рядком

}
golfScore(5, 4);
