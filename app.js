let sayi = Number(prompt("Sayıyı giriniz: "));

if (sayi == 1 || sayi == 2 || sayi == 3) {
    alert(sayi + " sayısı asaldır.")
} else {
    for (let i = 2; i <= Math.floor(sayi / 2); i++) {
        if (sayi % i == 0) {
            alert(sayi + " sayısı asal değildir.");
            break;
        } else {
            alert(sayi + " sayısı asaldır.");
        }
    }
}