import "./App.css";
import KartuProfil from "./KartuProfil";

function App() {
  return (
    <main>
      <h1>Kartu Profil Mahasiswa</h1>
      <KartuProfil
        nama="John Doe"
        npm="123456789"
        kelas="TIF-E"
        status="Aktif"
        fotoUrl="https://via.placeholder.com/80"
      />
    </main>
  );
}

export default App;
