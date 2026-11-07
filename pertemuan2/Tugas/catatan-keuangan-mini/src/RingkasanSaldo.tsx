import Kartu from './Kartu';

interface RingkasanSaldoProps {
  saldo: number;
  totalMasuk: number;
  totalKeluar: number;
}

const formatRupiah = (angka: number): string =>
  'Rp ' + angka.toLocaleString('id-ID');

function RingkasanSaldo({ saldo, totalMasuk, totalKeluar }: RingkasanSaldoProps) {
  return (
    <Kartu judul="Total Saldo">
      <p className={saldo < 0 ? 'saldo pengeluaran' : 'saldo'}>
        {formatRupiah(saldo)}
      </p>
      <div className="rincian">
        <span>Pemasukan: <span className="pemasukan">{formatRupiah(totalMasuk)}</span></span>
        <span>Pengeluaran: <span className="pengeluaran">{formatRupiah(totalKeluar)}</span></span>
      </div>
    </Kartu>
  );
}

export default RingkasanSaldo;