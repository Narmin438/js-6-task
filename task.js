// function greeting(name) {
//     console.log(name + " is a JS developer");
//   }

//   greeting("Narmin");


// function nameUser(name) {
//     console.log(name + " is active now");
// }
// nameUser("Narmin")
// nameUser("Kamala")
// nameUser("Kamil")


// function num(a,b,c) {
//     if ((a >= b && a>=c)) {
//         console.log(a);
//     }else if(b>=a && b>=c){
//         console.log(b);      
//     }else{
//         console.log(c);
//     }
// }
// num(56,78,67)


// Task 1

function total(amount) {
    let ruble = prompt("Rubl hesab daxil edin:");
    let dollar = prompt("Dollar hesab daxil edin:");
    let dollarRuble = +dollar * amount;
    let totalRuble = +ruble + dollarRuble;
    console.log(`Butun depozitler uzre mebleg: ${totalRuble} rubl.`);
}
total(75);



// Task 2

function NumberToText() {
    let number = Number(prompt("1 ilə 99 arasinda rəqəm daxil edin:"))
    if (number < 1 || number > 99) {
        console.log("yanlis eded")
    }
    let ones = ["", "bir", "iki", "üç", "dörd", "beş", "alti", "yeddi", "səkkiz", "doqquz"]
    let elevenToNineteen = ["on bir", "on iki", "on üç", "on dörd", "on beş", "on alti", "on yeddi", "on səkkiz", "on doqquz"]
    let tens = ["", "on", "iyirmi", "otuz", "qirx", "əlli", "altmiş", "yetmiş", "səksən", "doxsan"]
    let text;
    if (number <= 10) {
        text = ones[number]
    } else if (number < 20) {
        text = elevenToNineteen[number - 11]
    } else {
        let tenPart = tens[Math.floor(number / 10)]
        let onePart = ones[number % 10]
        if ( onePart === "" ) {
            text = tenPart
        } else {
            text = tenPart + " " + onePart
        }
    }
    console.log(text)
}
NumberToText()