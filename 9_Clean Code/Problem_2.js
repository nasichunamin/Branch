class Kendaraan {
    constructor(total_roda, kecepatan_per_jam){
        this.total_roda = total_roda;
        this.kecepatan_per_jam = kecepatan_per_jam;
        // total_roda = 0;
        // kecepatan_per_jam = 0;
    }
}
class Mobil extends Kendaraan {
    constructor(total_roda, kecepatan_per_jam, kecepatan_baru){
        super(total_roda, kecepatan_per_jam);
        this.kecepatan_baru = kecepatan_baru;
    }
    berjalan() {
        tambah_kecepatan(10);
    }

    tambah_kecepatan(kecepatan_baru) {
        kecepatan_per_jam = kecepatan_per_jam + kecepatan_baru;
    }
}

mobil_cepat = new Mobil();
mobil_cepat.berjalan();
mobil_cepat.berjalan();
mobil_cepat.berjalan();

mobil_lamban = new Mobil();
mobil_lamban.berjalan();