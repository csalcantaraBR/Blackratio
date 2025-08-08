'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/lib/auth'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Settings, History, TrendingUp, Upload, Download, Clock, Activity } from 'lucide-react'
import { formatBytes, formatRatio, getRatioColor, formatDate } from '@/lib/utils'

export default function ProfilePage() {
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
            <a href="/" style={{ 
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
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              Home
            </a>
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
          </div>
        </div>
      </nav>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
          {/* Profile Info */}
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            flex: '1'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#00FF88',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#0B0B0B'
              }}>
                JD
              </div>
              <div>
                <h1 style={{ fontSize: '2rem', color: '#F0F0F0', marginBottom: '0.5rem' }}>John Doe</h1>
                <p style={{ color: '#B8C0CC' }}>Member since January 2024</p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div style={{ 
                backgroundColor: '#15181B', 
                padding: '1rem', 
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00FF88' }}>1.24</div>
                <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Ratio</div>
              </div>
              <div style={{ 
                backgroundColor: '#15181B', 
                padding: '1rem', 
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F0F0F0' }}>2.1 TB</div>
                <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Uploaded</div>
              </div>
              <div style={{ 
                backgroundColor: '#15181B', 
                padding: '1rem', 
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F0F0F0' }}>1.7 TB</div>
                <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Downloaded</div>
              </div>
              <div style={{ 
                backgroundColor: '#15181B', 
                padding: '1rem', 
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F0F0F0' }}>156</div>
                <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Snatched</div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A',
            width: '300px'
          }}>
            <h2 style={{ fontSize: '1.5rem', color: '#00FF88', marginBottom: '1rem' }}>Quick Stats</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#B8C0CC' }}>Seeding:</span>
                <span style={{ color: '#00FF88', fontWeight: 'bold' }}>12 torrents</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#B8C0CC' }}>Leeching:</span>
                <span style={{ color: '#FF5A5A', fontWeight: 'bold' }}>3 torrents</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#B8C0CC' }}>Bonus Points:</span>
                <span style={{ color: '#FFC857', fontWeight: 'bold' }}>1,247</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#B8C0CC' }}>Invites:</span>
                <span style={{ color: '#F0F0F0', fontWeight: 'bold' }}>2 available</span>
              </div>
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
            borderBottom: '1px solid #22262A'
          }}>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: '#00FF88',
              color: '#0B0B0B',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Overview
            </button>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#B8C0CC',
              border: 'none',
              cursor: 'pointer'
            }}>
              History
            </button>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#B8C0CC',
              border: 'none',
              cursor: 'pointer'
            }}>
              Settings
            </button>
          </div>
          
          <div style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#F0F0F0', marginBottom: '1rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#15181B',
                borderRadius: '4px'
              }}>
                <div>
                  <div style={{ color: '#F0F0F0', fontWeight: 'bold' }}>Downloaded: The Matrix (1999) 4K HDR</div>
                  <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>2 hours ago</div>
                </div>
                <span style={{ color: '#00FF88', fontWeight: 'bold' }}>+45.2 GB</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#15181B',
                borderRadius: '4px'
              }}>
                <div>
                  <div style={{ color: '#F0F0F0', fontWeight: 'bold' }}>Uploaded: Breaking Bad S01-S05 Complete</div>
                  <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>1 day ago</div>
                </div>
                <span style={{ color: '#00FF88', fontWeight: 'bold' }}>+89.7 GB</span>
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: '#15181B',
                borderRadius: '4px'
              }}>
                <div>
                  <div style={{ color: '#F0F0F0', fontWeight: 'bold' }}>Downloaded: Cyberpunk 2077 v2.0</div>
                  <div style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>3 days ago</div>
                </div>
                <span style={{ color: '#00FF88', fontWeight: 'bold' }}>+67.3 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
