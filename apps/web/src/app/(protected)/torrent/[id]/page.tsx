'use client'

export default function TorrentDetailPage({ params }: { params: { id: string } }) {
  const mockTorrent = {
    id: params.id,
    name: "The Matrix (1999) 4K HDR",
    size: "45.2 GB",
    seeders: 156,
    leechers: 23,
    uploaded: "2024-01-15",
    uploader: "admin",
    description: "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source.",
    tags: ["4K", "HDR", "Movie", "Action", "FREELEECH"],
    files: [
      { name: "The.Matrix.1999.4K.HDR.mkv", size: "45.2 GB" },
      { name: "The.Matrix.1999.4K.HDR.srt", size: "45.2 KB" },
      { name: "Sample/The.Matrix.1999.4K.HDR-sample.mkv", size: "50.2 MB" }
    ],
    peers: [
      { ip: "192.168.1.100", port: 6881, client: "qBittorrent", progress: 100, speed: "2.5 MB/s" },
      { ip: "10.0.0.50", port: 6882, client: "uTorrent", progress: 75, speed: "1.8 MB/s" },
      { ip: "172.16.0.25", port: 6883, client: "Transmission", progress: 45, speed: "0.9 MB/s" }
    ],
    comments: [
      { user: "user1", date: "2024-01-15", comment: "Perfect quality! Thanks for the upload." },
      { user: "user2", date: "2024-01-14", comment: "Great movie, excellent 4K transfer." },
      { user: "user3", date: "2024-01-13", comment: "Seeding this one for a long time!" }
    ]
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0B0B0B', 
      color: '#F0F0F0',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: '#111315', 
        padding: '1rem 2rem', 
        borderBottom: '1px solid #22262A',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          <a href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#00FF88',
            textDecoration: 'none'
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              <path d="M16 6L24 10V18L16 22L8 18V10L16 6Z" fill="#00FF88"/>
              <circle cx="16" cy="16" r="3" fill="#0B0B0B"/>
            </svg>
            BlackRatio
          </a>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="/torrents" style={{ 
              color: '#B8C0CC', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Torrents
            </a>
            <a href="/search" style={{ 
              color: '#B8C0CC', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Search
            </a>
            <a href="/upload" style={{ 
              color: '#B8C0CC', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Upload
            </a>
            <a href="/profile" style={{ 
              color: '#B8C0CC', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Profile
            </a>
          </div>
        </div>
      </nav>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{ flex: '1' }}>
              <h1 style={{ fontSize: '2rem', color: '#F0F0F0', marginBottom: '0.5rem' }}>
                {mockTorrent.name}
              </h1>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', color: '#B8C0CC' }}>
                <span>Size: {mockTorrent.size}</span>
                <span>Seeders: <span style={{ color: '#00FF88' }}>{mockTorrent.seeders}</span></span>
                <span>Leechers: <span style={{ color: '#FF5A5A' }}>{mockTorrent.leechers}</span></span>
                <span>Uploaded: {mockTorrent.uploaded}</span>
                <span>Uploader: {mockTorrent.uploader}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {mockTorrent.tags.map((tag, index) => (
                  <span key={index} style={{
                    padding: '0.25rem 0.5rem',
                    backgroundColor: tag === 'FREELEECH' ? '#00FF88' : tag === 'VIP' ? '#FFC857' : '#22262A',
                    color: tag === 'FREELEECH' ? '#0B0B0B' : '#B8C0CC',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: tag === 'FREELEECH' || tag === 'VIP' ? 'bold' : 'normal'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#00FF88',
                color: '#0B0B0B',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 3V15" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Download .torrent
              </button>
              <button style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#B8C0CC',
                border: '1px solid #22262A',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                Report
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ 
          backgroundColor: '#111315', 
          borderRadius: '8px',
          border: '1px solid #22262A',
          overflow: 'hidden'
        }}>
          <div style={{ 
            display: 'flex', 
            borderBottom: '1px solid #22262A',
            backgroundColor: '#15181B'
          }}>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: '#00FF88',
              color: '#0B0B0B',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Details
            </button>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#B8C0CC',
              border: 'none',
              cursor: 'pointer'
            }}>
              Files
            </button>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#B8C0CC',
              border: 'none',
              cursor: 'pointer'
            }}>
              Peers
            </button>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#B8C0CC',
              border: 'none',
              cursor: 'pointer'
            }}>
              Comments
            </button>
          </div>

          {/* Details Tab Content */}
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#00FF88', marginBottom: '1rem' }}>Description</h3>
              <p style={{ color: '#B8C0CC', lineHeight: '1.6' }}>
                {mockTorrent.description}
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#15181B', 
              padding: '1.5rem', 
              borderRadius: '8px',
              border: '1px solid #22262A'
            }}>
              <h3 style={{ color: '#00FF88', marginBottom: '1rem' }}>Tracker Info</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <span style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Announce URL:</span>
                  <div style={{ color: '#F0F0F0', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    https://blackratio.dev/announce
                  </div>
                </div>
                <div>
                  <span style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Info Hash:</span>
                  <div style={{ color: '#F0F0F0', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    a1b2c3d4e5f6...
                  </div>
                </div>
                <div>
                  <span style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Passkey:</span>
                  <div style={{ color: '#F0F0F0', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    Included in .torrent file
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
