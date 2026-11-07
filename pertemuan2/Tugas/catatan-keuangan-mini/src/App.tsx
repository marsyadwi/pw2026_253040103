import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import RingkasanSaldo from './RingkasanSaldo';
import FormTransaksi from './FormTransaksi';
import ItemTransaksi from './ItemTransaksi';
import type { Transaksi, TransaksiBaru } from './types';

function App() {
  const [daftarTransaksi, setDaftarTransaksi] = useState<Transaksi[]>(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    return dataTersimpan ? (JSON.parse(dataTersimpan) as Transaksi[]) : [];
  });

  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  const tambahTransaksi = (dataBaru: TransaksiBaru) => {
    const transaksiBaru: Transaksi = { id: Date.now(), ...dataBaru };
    setDaftarTransaksi([...daftarTransaksi, transaksiBaru]);
  };

  const hapusTransaksi = (id: number) => {
    setDaftarTransaksi(daftarTransaksi.filter((t) => t.id !== id));
  };

  const totalMasuk = daftarTransaksi
    .filter((t) => t.jenis === 'pemasukan')
    .reduce((jumlah, t) => jumlah + t.nominal, 0);

  const totalKeluar = daftarTransaksi
    .filter((t) => t.jenis === 'pengeluaran')
    .reduce((jumlah, t) => jumlah + t.nominal, 0);

  const saldo = totalMasuk - totalKeluar;

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">Tugas Modul 2: React Lanjutan</p>

      <RingkasanSaldo
        saldo={saldo}
        totalMasuk={totalMasuk}
        totalKeluar={totalKeluar}
      />

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">Belum ada transaksi. Catat transaksi pertamamu!</p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((t) => (
              <ItemTransaksi
                key={t.id}
                transaksi={t}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;