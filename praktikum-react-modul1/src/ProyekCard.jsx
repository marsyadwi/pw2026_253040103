import React from 'react';

function ProyekCard({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '10px',
      padding: '18px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <h3 style={{ margin: 0, color: '#1B365D' }}>{judul}</h3>
      <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{deskripsi}</p>

      <div>
        {teknologi.map((tek) => (
          <span key={tek} style={{
            display: 'inline-block',
            backgroundColor: '#E8EEF7',
            color: '#1B365D',
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            marginRight: '6px',
            marginBottom: '6px'
          }}>
            #{tek}
          </span>
        ))}
      </div>

      <a href={repoUrl} target="_blank" rel="noreferrer" style={{
        alignSelf: 'flex-start',
        backgroundColor: '#1B365D',
        color: '#FFFFFF',
        padding: '8px 16px',
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '13px',
        fontWeight: 'bold'
      }}>
        Lihat Repositori GitHub
      </a>
    </div>
  );
}

export default ProyekCard;