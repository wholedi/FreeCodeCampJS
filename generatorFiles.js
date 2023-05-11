const fs = require('fs');
for (let i = 1; i <= 3; i++) {
    fs.writeFile(`task${109 + i}.js`, '', function (err) {
        if (err) throw err;
        console.log(`task${i}.js created successfully`);
    });
}
