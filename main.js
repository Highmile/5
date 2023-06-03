let num = +prompt("Son kriting")
while (isNaN (num)) {
   num = +prompt("Boshidan son kriting")
}
let deg = +prompt("Darajani kriting")
while (isNaN (deg)) {
    deg = +prompt("Boshidan daraja kriting")
 }

 let total = 1

 for (let i = 0; i < deg; i++) {
    total = total * num
 }

 alert(total)

