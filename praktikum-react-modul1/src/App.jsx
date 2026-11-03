import React from 'react';
import KartuProfil from './KartuProfil';
import ItemMatkul from './ItemMatkul';
import BadgeSkill from './BadgeSkill';
import ProyekCard from './ProyekCard';
import fotoAca from './assets/aca.jpeg';

function App() {
  const daftarPraktikum = [
    { id: 101, kode: 'IF211', nama: 'Pemrograman Web (React & Laravel)', sks: 3, hari: 'Senin' },
    { id: 102, kode: 'IF212', nama: 'Sistem Basis Data (PostgreSQL)', sks: 3, hari: 'Rabu' },
    { id: 103, kode: 'IF213', nama: 'Rekayasa Perangkat Lunak Terapan', sks: 3, hari: 'Kamis' },
    { id: 104, kode: 'IF214', nama: 'Arsitektur Sistem Terdistribusi', sks: 2, hari: 'Jumat' }
  ];

  const daftarSkill = [
    { id: 1, namaSkill: 'HTML & CSS', level: 'Mahir' },
    { id: 2, namaSkill: 'JavaScript', level: 'Menengah' },
    { id: 3, namaSkill: 'React JS', level: 'Pemula' },
    { id: 4, namaSkill: 'Node.js', level: 'Pemula' }
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: 'Website Toko Online',
      deskripsi: 'Aplikasi e-commerce sederhana dengan katalog produk dan keranjang belanja.',
      teknologi: ['React', 'Vite', 'CSS'],
      repoUrl: 'https://github.com/username/toko-online'
    },
    {
      id: 2,
      judul: 'REST API Perpustakaan',
      deskripsi: 'API untuk manajemen buku dan peminjaman dengan autentikasi JWT.',
      teknologi: ['Node.js', 'Express', 'PostgreSQL'],
      repoUrl: 'https://github.com/username/api-perpustakaan'
    },
    {
      id: 3,
      judul: 'Aplikasi To-Do List',
      deskripsi: 'Pencatat tugas harian dengan fitur tambah, selesai, dan hapus.',
      teknologi: ['React', 'JavaScript'],
      repoUrl: 'https://github.com/username/todo-list'
    },
    {
      id: 4,
      judul: 'Landing Page Portofolio',
      deskripsi: 'Halaman portofolio responsif untuk menampilkan profil dan karya.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      repoUrl: 'https://github.com/username/portofolio'
    }
  ];

  const notifikasiSapaan = () => {
    alert('Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.');
  };

  const judulSection = {
    color: '#2C3E50',
    borderBottom: '2px solid #E1E4E8',
    paddingBottom: '8px'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 24px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#1B365D', margin: '0 0 8px 0' }}>Praktikum Pemrograman Web</h1>
        <p style={{ color: '#666', fontSize: '15px' }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={judulSection}>Profil Mahasiswa Praktikan</h2>
        <KartuProfil
          nama="Marsya Dwi Putri Andini"
          npm="253040103"
          kelas="Praktikum Web - E"
          status="Aktif"
          fotoUrl={fotoAca}
        />
        <div>
          {daftarSkill.map((skill) => (
            <BadgeSkill key={skill.id} namaSkill={skill.namaSkill} level={skill.level} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={judulSection}>Daftar Rencana Praktikum Semester (List Rendering)</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={judulSection}>Showcase Portofolio Mini</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {daftarProyek.map((proyek) => (
            <ProyekCard key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button onClick={notifikasiSapaan} style={{
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;