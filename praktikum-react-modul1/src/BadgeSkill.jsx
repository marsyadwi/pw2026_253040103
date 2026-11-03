import React from 'react';

const warnaLevel = {
  Pemula:   { bg: '#D4EDDA', teks: '#155724' },
  Menengah: { bg: '#FFF3CD', teks: '#856404' },
  Mahir:    { bg: '#CCE5FF', teks: '#004085' },
};

function BadgeSkill({ namaSkill, level }) {
  const warna = warnaLevel[level] || { bg: '#E1E4E8', teks: '#333' };

  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      backgroundColor: warna.bg,
      color: warna.teks,
      marginRight: '8px',
      marginBottom: '8px'
    }}>
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;