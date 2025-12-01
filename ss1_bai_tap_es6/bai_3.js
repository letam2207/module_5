



const getInfo = ({ firstName = "Quân", degree = "NA" }) => {
    console.log(`firstName: ${firstName}`);
    console.log(`degree: ${degree}`);
};

const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

console.log("--- Kết quả sv1 ---");
getInfo(sv1);


const sv2 = {
    name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

console.log("\n--- Kết quả sv2 ---");
getInfo(sv2);