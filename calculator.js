const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const _question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (input) => {
            if (input.trim() === "")
                reject('Input is required');
            if (isNaN(input))
                reject('You need provide a number');

            return resolve(parseInt(input));
        });
    });
}

const main = async () => {
    console.clear();
    const menu = [
        "Penjumlahan", "Pengurangan", "Perkalian", "Pembagian", "Akar kuadrat",
        "Luas persegi", "Volume kubus", "Volume tabung", "Keluar"
    ];

    menu.forEach((item, index) => {
        console.log(`[${index + 1}] ${item}`);
    })

    try {
        const choice = await _question("Select an option: ");
        if (choice < 1 || choice > menu.length || isNaN(choice)) {
            console.log("Invalid option");
            rl.close();
        }

        await menuHandling(choice);
    } catch (error) {
        console.log(error);
        rl.close();
    }
}

const menuHandling = async (choice) => {
    switch (choice) {
        case 1:
            await tambah();
            rl.close();
            break;
        case 2:
            await kurang();
            rl.close();
            break;
        case 3:
            await kali();
            rl.close();
            break;
        case 4:
            await bagi();
            rl.close();
            break;
        case 5:
            await akarKuadrat();
            rl.close();
            break;
        case 6:
            await luasPersegi();
            rl.close();
            break;
        case 7:
            await volumeKubus();
            rl.close();
            break;
        case 8:
            await volumeTabung();
            rl.close();
            break;
        case 9:
            console.log(``)
            rl.close();
            break;
    }
}

const tambah = async () => {
    console.log("-----------------------");
    const input1 = await _question('Input angka pertama: ');
    const input2 = await _question('Input angka kedua: ');

    console.log("-------------------------");
    console.log(`Hasil penjumlahan dari ${input1} + ${input2} = ${input1 + input2}`);
}

const kurang = async () => {
    console.log("-----------------------");
    const input1 = await _question('Input angka pertama: ');
    const input2 = await _question('Input angka kedua: ');

    console.log("------------------------");
    console.log(`Hasil pengurangan dari ${input1} - ${input2} = ${input1 - input2}`);
}

const kali = async () => {
    console.log("-----------------------");
    const input1 = await _question('Input angka pertama: ');
    const input2 = await _question('Input angka kedua: ');

    console.log("-----------------------");
    console.log(`Hasil perkalian dari ${input1} * ${input2} = ${input1 * input2}`);
}

const bagi = async () => {
    console.log("-----------------------");
    const input1 = await _question('Input angka pertama: ');
    const input2 = await _question('Input angka kedua: ');

    if (input2 === 0) {
        console.log(`Cannot divide by 0`);
        process.exit()
    }

    console.log("-----------------------");
    console.log(`Hasil pembagian dari ${input1} / ${input2} = ${input1 / input2}`);
}

const akarKuadrat = async () => {
    console.log("-----------------------");
    const input = await _question('Input angka : ');
    const result = Math.sqrt(input)

    console.log("-----------------------");
    console.log(`Hasil akar kuadrat dari √${input} = ${result}`);
}

const luasPersegi = async () => {
    console.log("-----------------------");
    const input1 = await _question('Input panjang: ');
    const input2 = await _question('Input lebar: ');
    const result = input1 * input2;

    console.log("-----------------------");
    console.log(`Panjang = ${input1}`);
    console.log(`Lebar = ${input2}`);
    console.log(`Luas Persegi = ${input1} x ${input2} = ${result}`)
}

const volumeKubus = async () => {
    console.log("-----------------------");
    const input = await _question('Input panjang rusuk: ');
    const result = input**3;

    console.log("-----------------------");
    console.log(`Volume Kubus = ${input} x ${input} x ${input} = ${result}`);
}

const volumeTabung = async () => {
    console.log("-----------------------");
    const input1 = await _question('Input jari-jari: ');
    const input2 = await _question('Input tinggi: ');
    const result = Math.round(Math.PI * input1**2 * input2)

    console.log("-----------------------");
    console.log(`Jari jari = ${input1}`);
    console.log(`Tinggi = ${input2}`);
    console.log(`Volume Tabung = π x ${input1} x ${input1} x ${input2} = ${result}`)
}

main();