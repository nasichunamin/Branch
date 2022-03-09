var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true; //Jawaban 1b mengubah nilai false menjadi true agar baris ke 22 bisa dijalankan
let lengkap_arr = [a, b, nama, terdaftar];
console.log(lengkap_arr[2]); //Jawaban 1a menampilkan index ke 2 dalam array
function perkenalan() {
    let asal = " indonesia ";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
//nama = b;
//Jawaban no 1d menampilkan output sesuai screenshoot pada praktikum
console.log("array = " + nama)
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan() //Jawaban 1c memanggil function perkenalan di line 31 agar tampil pada output

/* SOAL NO. 2
a. Jelaskan kenapa baris 21,22,23 tidak dapat tampil?
b. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat dieksekusi? jelaskan.
*/

/* Jawaban Soal Nomor 2
a. Karena let terdaftar bernilai false, sedangkan di baris 21 kodisi if yang diinginkan adalah true.
b. Karena const nama nilainya sudah tetap dan tidak bisa diubah
c. bisa, karena sebelumnya terjadi error pada baris 26 yaitu const nilainya tidak bisa diubah.
*/