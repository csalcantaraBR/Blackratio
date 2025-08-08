'use client'

export default function SearchPage() {
  const mockSearchResults = [
    {
      id: 1,
      name: "The Matrix (1999) 4K HDR",
      size: "45.2 GB",
      seeders: 156,
      leechers: 23,
      uploaded: "2024-01-15",
      tags: ["4K", "HDR", "Movie", "Action", "FREELEECH"]
    },
    {
      id: 2,
      name: "Breaking Bad S01-S05 Complete",
      size: "89.7 GB",
      seeders: 89,
      leechers: 12,
      uploaded: "2024-01-14",
      tags: ["TV", "Drama", "Complete", "VIP"]
    },
    {
      id: 3,
      name: "Cyberpunk 2077 v2.0",
      size: "67.3 GB",
      seeders: 234,
      leechers: 45,
      uploaded: "2024-01-13",
      tags: ["Game", "RPG", "New"]
    },
    {
      id: 4,
      name: "Daft Punk - Random Access Memories",
      size: "1.2 GB",
      seeders: 67,
      leechers: 8,
      uploaded: "2024-01-12",
      tags: ["Music", "FLAC", "Electronic"]
    }
  ]

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#00FF88' }}>Search Torrents</h1>
        </div>
        
        {/* Search Filters */}
        <div style={{ 
          backgroundColor: '#111315', 
          padding: '2rem', 
          borderRadius: '8px',
          border: '1px solid #22262A',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <input 
              type="text" 
              placeholder="Search torrents..."
              style={{
                flex: '1',
                padding: '0.75rem',
                backgroundColor: '#15181B',
                border: '1px solid #22262A',
                borderRadius: '4px',
                color: '#F0F0F0',
                fontSize: '1rem'
              }}
            />
            <select style={{
              padding: '0.75rem',
              backgroundColor: '#15181B',
              border: '1px solid #22262A',
              borderRadius: '4px',
              color: '#F0F0F0',
              fontSize: '1rem',
              minWidth: '150px'
            }}>
              <option>All Categories</option>
              <option>Movies</option>
              <option>TV Shows</option>
              <option>Music</option>
              <option>Games</option>
            </select>
            <select style={{
              padding: '0.75rem',
              backgroundColor: '#15181B',
              border: '1px solid #22262A',
              borderRadius: '4px',
              color: '#F0F0F0',
              fontSize: '1rem',
              minWidth: '150px'
            }}>
              <option>Sort by Newest</option>
              <option>Sort by Seeders</option>
              <option>Sort by Size</option>
            </select>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#00FF88',
              color: '#0B0B0B',
              border: 'none',
              borderRadius: '4px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              FREELEECH
            </button>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#22262A',
              color: '#B8C0CC',
              border: '1px solid #22262A',
              borderRadius: '4px',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
              VIP
            </button>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#22262A',
              color: '#B8C0CC',
              border: '1px solid #22262A',
              borderRadius: '4px',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
              4K
            </button>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#22262A',
              color: '#B8C0CC',
              border: '1px solid #22262A',
              borderRadius: '4px',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
              NEW
            </button>
          </div>
        </div>
        
        {/* Search Results */}
        <div style={{ 
          backgroundColor: '#111315', 
          borderRadius: '8px',
          border: '1px solid #22262A',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '1rem 2rem', borderBottom: '1px solid #22262A', backgroundColor: '#15181B' }}>
            <h3 style={{ color: '#F0F0F0', fontSize: '1.1rem' }}>Search Results (4 found)</h3>
          </div>
          
          <div style={{ padding: '0' }}>
            {mockSearchResults.map((torrent) => (
              <div key={torrent.id} style={{ 
                padding: '1.5rem 2rem',
                borderBottom: '1px solid #22262A',
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: '1' }}>
                    <a href={`/torrent/${torrent.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h4 style={{ color: '#F0F0F0', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        {torrent.name}
                      </h4>
                    </a>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#B8C0CC' }}>
                      <span>Size: {torrent.size}</span>
                      <span>Seeders: <span style={{ color: '#00FF88' }}>{torrent.seeders}</span></span>
                      <span>Leechers: <span style={{ color: '#FF5A5A' }}>{torrent.leechers}</span></span>
                      <span>Uploaded: {torrent.uploaded}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {torrent.tags.map((tag, index) => (
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
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#00FF88',
                      color: '#0B0B0B',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      Download
                    </button>
                    <a href={`/torrent/${torrent.id}`} style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'transparent',
                      color: '#B8C0CC',
                      border: '1px solid #22262A',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '1rem' }}>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#22262A',
            border: '1px solid #22262A',
            borderRadius: '4px',
            color: '#B8C0CC',
            cursor: 'pointer'
          }}>
            Previous
          </button>
          <span style={{ padding: '0.5rem 1rem', color: '#F0F0F0' }}>Page 1 of 1</span>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#22262A',
            border: '1px solid #22262A',
            borderRadius: '4px',
            color: '#B8C0CC',
            cursor: 'pointer'
          }}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
