export type JenisTransaksi = 'pemasukan' | 'pengeluaran';

export interface Transaksi {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: JenisTransaksi;
}

// Data dari formulir (belum punya id)
export type TransaksiBaru = Omit<Transaksi, 'id'>;