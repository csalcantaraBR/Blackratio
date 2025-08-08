'use client'

export default function UploadPage() {
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
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#00FF88', marginBottom: '0.5rem' }}>
            Upload Torrent
          </h1>
          <p style={{ color: '#B8C0CC' }}>
            Share your content with the community. Please ensure you follow our upload guidelines.
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#111315', 
          padding: '2rem', 
          borderRadius: '8px',
          border: '1px solid #22262A'
        }}>
          <form>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0', fontWeight: 'bold' }}>
                Torrent Name *
              </label>
              <input 
                type="text" 
                placeholder="Enter torrent name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#15181B',
                  border: '1px solid #22262A',
                  borderRadius: '4px',
                  color: '#F0F0F0',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0', fontWeight: 'bold' }}>
                Description
              </label>
              <textarea 
                placeholder="Describe your torrent content..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#15181B',
                  border: '1px solid #22262A',
                  borderRadius: '4px',
                  color: '#F0F0F0',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0', fontWeight: 'bold' }}>
                Category *
              </label>
              <select style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#15181B',
                border: '1px solid #22262A',
                borderRadius: '4px',
                color: '#F0F0F0',
                fontSize: '1rem'
              }}>
                <option value="">Select category</option>
                <option value="movies">Movies</option>
                <option value="tv">TV Shows</option>
                <option value="music">Music</option>
                <option value="games">Games</option>
                <option value="software">Software</option>
                <option value="ebooks">E-Books</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0', fontWeight: 'bold' }}>
                Tags
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {['4K', 'HDR', 'FREELEECH', 'VIP', 'NEW', 'COMPLETE'].map((tag) => (
                  <label key={tag} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" style={{ accentColor: '#00FF88' }} />
                    <span style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>{tag}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0', fontWeight: 'bold' }}>
                .torrent File *
              </label>
              <div style={{
                border: '2px dashed #22262A',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#15181B'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#00FF88" strokeWidth="2" fill="none"/>
                  <path d="M17 8L12 3L7 8" stroke="#00FF88" strokeWidth="2" fill="none"/>
                  <path d="M12 3V15" stroke="#00FF88" strokeWidth="2" fill="none"/>
                </svg>
                <div style={{ color: '#00FF88', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Click to upload .torrent file
                </div>
                <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>
                  or drag and drop here
                </div>
                <input 
                  type="file" 
                  accept=".torrent"
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0', fontWeight: 'bold' }}>
                Screenshots (Optional)
              </label>
              <div style={{
                border: '2px dashed #22262A',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#15181B'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
                  <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="13" r="4" stroke="#00FF88" strokeWidth="2" fill="none"/>
                </svg>
                <div style={{ color: '#00FF88', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Upload screenshots
                </div>
                <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>
                  JPG, PNG up to 5MB each
                </div>
                <input 
                  type="file" 
                  accept="image/*"
                  multiple
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

            <div style={{ 
              backgroundColor: '#15181B', 
              padding: '1.5rem', 
              borderRadius: '8px',
              border: '1px solid #22262A',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#00FF88', marginBottom: '1rem' }}>Upload Guidelines</h3>
              <ul style={{ color: '#B8C0CC', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                <li>Ensure content is high quality and properly tagged</li>
                <li>Include accurate descriptions and screenshots</li>
                <li>Follow our naming conventions</li>
                <li>Respect copyright and intellectual property</li>
                <li>Maintain good seeding ratios</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button type="button" style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#B8C0CC',
                border: '1px solid #22262A',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                Cancel
              </button>
              <button type="submit" style={{
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
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Upload Torrent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
