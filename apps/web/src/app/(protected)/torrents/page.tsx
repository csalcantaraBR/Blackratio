'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tag } from '@/components/ui/tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { formatBytes, formatDate, getRatioColor } from '@/lib/utils'

export default function TorrentsPage() {
  const mockTorrents = [
    {
      id: 1,
      name: "The Matrix (1999) 4K HDR",
      size: "45.2 GB",
      seeders: 156,
      leechers: 23,
      uploaded: "2024-01-15",
      tags: ["4K", "HDR", "Movie", "Action"]
    },
    {
      id: 2,
      name: "Breaking Bad S01-S05 Complete",
      size: "89.7 GB",
      seeders: 89,
      leechers: 12,
      uploaded: "2024-01-14",
      tags: ["TV", "Drama", "Complete"]
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#00FF88' }}>Torrents</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Search torrents..."
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#15181B',
                border: '1px solid #22262A',
                borderRadius: '4px',
                color: '#F0F0F0',
                fontSize: '1rem',
                width: '300px'
              }}
            />
            <select style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#15181B',
              border: '1px solid #22262A',
              borderRadius: '4px',
              color: '#F0F0F0',
              fontSize: '1rem'
            }}>
              <option>All Categories</option>
              <option>Movies</option>
              <option>TV Shows</option>
              <option>Music</option>
              <option>Games</option>
            </select>
            <a href="/upload" style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#00FF88',
              color: '#0B0B0B',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
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
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#111315', 
          borderRadius: '8px',
          border: '1px solid #22262A',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#15181B' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #22262A' }}>Name</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #22262A' }}>Size</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #22262A' }}>Seeders</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #22262A' }}>Leechers</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #22262A' }}>Uploaded</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid #22262A' }}>Tags</th>
              </tr>
            </thead>
            <tbody>
              {mockTorrents.map((torrent) => (
                <tr key={torrent.id} style={{ 
                  borderBottom: '1px solid #22262A',
                  transition: 'background-color 0.2s',
                  cursor: 'pointer'
                }}>
                  <td style={{ padding: '1rem' }}>
                    <a href={`/torrent/${torrent.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div>
                        <div style={{ fontWeight: 'bold', color: '#F0F0F0', marginBottom: '0.25rem' }}>
                          {torrent.name}
                        </div>
                      </div>
                    </a>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#B8C0CC' }}>
                    {torrent.size}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#00FF88' }}>
                    {torrent.seeders}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#FF5A5A' }}>
                    {torrent.leechers}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#B8C0CC' }}>
                    {torrent.uploaded}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      {torrent.tags.map((tag, index) => (
                        <span key={index} style={{
                          padding: '0.25rem 0.5rem',
                          backgroundColor: '#22262A',
                          color: '#B8C0CC',
                          borderRadius: '4px',
                          fontSize: '0.8rem'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
