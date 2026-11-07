import { useState } from 'react';
import type { FormEvent } from 'react';
import type { JenisTransaksi, TransaksiBaru } from './types';

interface FormTransaksiProps {
  onTambah: (data: TransaksiBaru) => void;
}

function FormTransaksi({ onTambah }: FormTransaksiProps) {
  const [keterangan, setKeterangan] = useState<string>('');
  const [nominal, setNominal] = useState<string>('');
  const [jenis, setJenis] = useState<JenisTransaksi>('pemasukan');

  const nominalAngka = Number(nominal);
  const tidakValid = keterangan.trim() === '' || nominal === '' || nominalAngka <= 0;

  const tanganiKirim = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tidakValid) return;

    onTambah({
      keterangan: keterangan.trim(),
      nominal: nominalAngka,
      jenis: jenis,
    });

    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Keterangan (contoh: Uang saku)"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Nominal"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value as JenisTransaksi)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>
      {nominal !== '' && nominalAngka <= 0 && (
        <p className="galat">Nominal harus lebih dari 0.</p>
      )}
    </form>
  );
}

export default FormTransaksi;