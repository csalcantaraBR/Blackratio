'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, TrendingUp, Users, HardDrive, Search, Download, Upload, Settings } from 'lucide-react'

export default function HomePage() {
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
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#00FF88'
          }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              <path d="M16 6L24 10V18L16 22L8 18V10L16 6Z" fill="#00FF88"/>
              <circle cx="16" cy="16" r="3" fill="#0B0B0B"/>
            </svg>
            BlackRatio
          </div>
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
              Browse Torrents
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
            <a href="/rules" style={{ 
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
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Rules
            </a>
            <a href="/login" style={{ 
              backgroundColor: '#00FF88', 
              color: '#0B0B0B', 
              textDecoration: 'none', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M15 12H3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Sign In
            </a>
          </div>
        </div>
      </nav>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <svg width="120" height="120" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              <path d="M16 6L24 10V18L16 22L8 18V10L16 6Z" fill="#00FF88"/>
              <circle cx="16" cy="16" r="3" fill="#0B0B0B"/>
            </svg>
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#00FF88', fontWeight: 'bold' }}>
            BlackRatio
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#B8C0CC', marginBottom: '2rem' }}>
            Where only invited members share.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <a href="/torrents" style={{
              backgroundColor: '#00FF88',
              color: '#0B0B0B',
              textDecoration: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Browse Torrents
            </a>
            <a href="/login" style={{
              backgroundColor: 'transparent',
              color: '#00FF88',
              textDecoration: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: '2px solid #00FF88',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M15 12H3" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Sign In
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00FF88', marginBottom: '0.5rem' }}>2,847</div>
            <div style={{ color: '#B8C0CC', fontSize: '1rem' }}>Active Torrents</div>
          </div>
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00FF88', marginBottom: '0.5rem' }}>156</div>
            <div style={{ color: '#B8C0CC', fontSize: '1rem' }}>Online Users</div>
          </div>
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00FF88', marginBottom: '0.5rem' }}>1.2 PB</div>
            <div style={{ color: '#B8C0CC', fontSize: '1rem' }}>Total Data</div>
          </div>
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00FF88', marginBottom: '0.5rem' }}>24/7</div>
            <div style={{ color: '#B8C0CC', fontSize: '1rem' }}>Uptime</div>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#00FF88', textAlign: 'center', marginBottom: '3rem' }}>
            Why Choose BlackRatio?
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ 
              backgroundColor: '#111315', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #22262A'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#00FF88',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0F0F0' }}>Quality Content</h3>
              </div>
              <p style={{ color: '#B8C0CC', lineHeight: '1.6' }}>
                Curated selection of high-quality content with strict quality standards. 
                Every torrent is verified and properly tagged.
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#111315', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #22262A'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#00FF88',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 3 15.9391 3 17V21" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0F0F0' }}>Active Community</h3>
              </div>
              <p style={{ color: '#B8C0CC', lineHeight: '1.6' }}>
                Join a community of dedicated users who share and maintain high-quality content. 
                Help others while building your ratio.
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#111315', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #22262A'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#00FF88',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                    <path d="M2 17L12 22L22 17" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0F0F0' }}>Fast Downloads</h3>
              </div>
              <p style={{ color: '#B8C0CC', lineHeight: '1.6' }}>
                High-speed servers and dedicated seeders ensure fast download speeds. 
                Multiple trackers for redundancy and reliability.
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#111315', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #22262A'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#00FF88',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0B0B0B" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#F0F0F0' }}>Exclusive Access</h3>
              </div>
              <p style={{ color: '#B8C0CC', lineHeight: '1.6' }}>
                Invite-only membership ensures quality and security. 
                Access to rare and exclusive content not available elsewhere.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Torrents */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#00FF88', marginBottom: '2rem' }}>
            Recent Uploads
          </h2>
          <div style={{ 
            backgroundColor: '#111315', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '1rem 2rem', borderBottom: '1px solid #22262A', backgroundColor: '#15181B' }}>
              <h3 style={{ color: '#F0F0F0', fontSize: '1.1rem' }}>Latest Torrents</h3>
            </div>
            <div style={{ padding: '0' }}>
              {[
                { id: 1, name: "The Matrix (1999) 4K HDR", size: "45.2 GB", seeders: 156, leechers: 23, tags: ["4K", "HDR", "FREELEECH"] },
                { id: 2, name: "Breaking Bad S01-S05 Complete", size: "89.7 GB", seeders: 89, leechers: 12, tags: ["TV", "Drama", "VIP"] },
                { id: 3, name: "Cyberpunk 2077 v2.0", size: "67.3 GB", seeders: 234, leechers: 45, tags: ["Game", "RPG", "NEW"] }
              ].map((torrent, index) => (
                <div key={index} style={{ 
                  padding: '1rem 2rem',
                  borderBottom: '1px solid #22262A',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ flex: '1' }}>
                    <a href={`/torrent/${torrent.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ color: '#F0F0F0', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                        {torrent.name}
                      </div>
                    </a>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#B8C0CC' }}>
                      <span>Size: {torrent.size}</span>
                      <span>Seeders: <span style={{ color: '#00FF88' }}>{torrent.seeders}</span></span>
                      <span>Leechers: <span style={{ color: '#FF5A5A' }}>{torrent.leechers}</span></span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {torrent.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={{
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
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/torrents" style={{
              backgroundColor: '#00FF88',
              color: '#0B0B0B',
              textDecoration: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              View All Torrents
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          backgroundColor: '#111315', 
          padding: '2rem', 
          borderRadius: '8px',
          border: '1px solid #22262A',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              <path d="M16 6L24 10V18L16 22L8 18V10L16 6Z" fill="#00FF88"/>
              <circle cx="16" cy="16" r="3" fill="#0B0B0B"/>
            </svg>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00FF88' }}>BlackRatio</span>
          </div>
          <p style={{ color: '#B8C0CC', marginBottom: '1rem' }}>
            Where only invited members share.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem', color: '#B8C0CC' }}>
            <a href="/rules" style={{ color: '#B8C0CC', textDecoration: 'none' }}>Rules</a>
            <a href="/login" style={{ color: '#B8C0CC', textDecoration: 'none' }}>Sign In</a>
            <span>© 2024 BlackRatio. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
