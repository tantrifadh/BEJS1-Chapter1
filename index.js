const inquirer = require("inquirer");

const menu = async () => {
    console.clear();
    const choice = await inquirer.prompt({
        name: "menu",
        type: "list",
        message: "Select an option: ",
        choices: [
            "Penjumlahan",
            "Pengurangan",
            "Perkalian",
            "Pembagian",
            "Akar kuadrat",
            "Luas persegi",
            "Volume kubus",
            "Volume tabung",
            "Keluar"
        ]
    });

    await menuHandling(choice);
}

const menuHandling = async (choice) => {
    switch (choice.menu) {
        case "Penjumlahan":
            await tambah();
            break;
        case "Pengurangan":
            await kurang();
            break;
        case "Perkalian":
            await kali();
            break;
        case "Pembagian":
            await bagi();
            break;
        case "Akar kuadrat":
            await akarKuadrat();
            break;
        case "Luas persegi":
            await luasPersegi();
            break;
        case "Volume kubus":
            await volumeKubus();
            break;
        case "Volume tabung":
            await volumeTabung();
            break;
        case "Keluar":
            process.exit();
            break;
    }
}

const tambah = async () => {
    console.log("-----------------------");
    const input1 = await operan('angka pertama: ');
    const input2 = await operan('angka kedua: ');

    console.log("-----------------------");
    console.log(`Hasil penjumlahan dari ${input1} + ${input2} = ${input1 + input2}`);
}

const kurang = async () => {
    console.log("-----------------------");
    const input1 = await operan('angka pertama: ');
    const input2 = await operan('angka kedua: ');

    console.log("-----------------------");
    console.log(`Hasil pengurangan dari ${input1} - ${input2} = ${input1 - input2}`);
}

const kali = async () => {
    console.log("-----------------------");
    const input1 = await operan('angka pertama: ');
    const input2 = await operan('angka kedua: ');

    console.log("-----------------------");
    console.log(`Hasil perkalian dari ${input1} * ${input2} = ${input1 * input2}`);
}

const bagi = async () => {
    console.log("-----------------------");
    const input1 = await operan('angka pertama: ');
    const input2 = await operan('angka kedua: ');

    if (input2 === 0) {
        console.log(`Cannot divide by 0`);
        process.exit()
    }

    console.log("-----------------------");
    console.log(`Hasil pembagian dari ${input1} / ${input2} = ${input1 / input2}`);
}

const akarKuadrat = async () => {
    console.log("-----------------------");
    const input = await operan();
    const result = Math.sqrt(input)

    console.log("-----------------------");
    console.log(`Akar kuadrat dari √${input} = ${result}`);
}

const luasPersegi = async () => {
    console.log("-----------------------");
    const input1 = await operan('panjang: ');
    const input2 = await operan('lebar: ');
    const result = input1 * input2;

    console.log("-----------------------");
    console.log(`Panjang = ${input1}`);
    console.log(`Lebar = ${input2}`);
    console.log(`Luas Persegi = ${input1} x ${input2} = ${result}`)
}

const volumeKubus = async () => {
    console.log("-----------------------");
    const input = await operan('panjang rusuk: ');
    const result = input**3;

    console.log("-----------------------");
    console.log(`Volume Kubus = ${input} x ${input} x ${input} = ${result}`);
}

const volumeTabung = async () => {
    console.log("-----------------------");
    const input1 = await operan('jari-jari: ');
    const input2 = await operan('tinggi: ');
    const result = Math.round(Math.PI * input1**2 * input2)

    console.log("-----------------------");
    console.log(`Jari jari = ${input1}`);
    console.log(`Tinggi = ${input2}`);
    console.log(`Volume Tabung = π x ${input1} x ${input1} x ${input2} = ${result}`)
}

const operan = async (question = "angka: ") => {
    const input = await inquirer.prompt({
        name: "input",
        type: "input",
        message: `Input  ${question}`,
        validate: function (input) {
            return validateInput(input);
        }
    });

    return parseInt(input.input);
}

const validateInput = (input) => {
    if (input.trim() === "")
        throw new Error('Wajib Input');
    if (isNaN(input))
        throw new Error('Harus memberikan nomor');

    return true;
}

menu();