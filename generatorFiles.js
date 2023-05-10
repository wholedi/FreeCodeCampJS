const fs = require('fs');
for (let i = 1; i <= 10; i++) {
    fs.writeFile(`task${80 + i}.js`, '', function (err) {
        if (err) throw err;
        console.log(`task${i}.js created successfully`);
    });
}
