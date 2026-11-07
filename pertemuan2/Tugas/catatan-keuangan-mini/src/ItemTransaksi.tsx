import type { Transaksi } from './types';

interface ItemTransaksiProps {
  transaksi: Transaksi;
  onHapus: (id: number) => void;
}

function ItemTransaksi({ transaksi, onHapus }: ItemTransaksiProps) {
  const adalahMasuk = transaksi.jenis === 'pemasukan';

  return (
    <li className="item">
      <span className="keterangan">{transaksi.keterangan}</span>
      <span className={adalahMasuk ? 'pemasukan' : 'pengeluaran'}>
        {adalahMasuk ? '+' : '-'} Rp {transaksi.nominal.toLocaleString('id-ID')}
      </span>
      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;