'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Upload, Download, Users, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export default function RulesPage() {
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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', color: '#00FF88', marginBottom: '1rem' }}>Community Rules</h1>
          <p style={{ color: '#B8C0CC', fontSize: '1.2rem' }}>Guidelines for maintaining a healthy community</p>
        </div>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* General Rules */}
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A'
          }}>
            <h2 style={{ fontSize: '2rem', color: '#00FF88', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              </svg>
              General Rules
            </h2>
            <ul style={{ color: '#B8C0CC', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Respect all members and staff</li>
              <li>No harassment, hate speech, or discrimination</li>
              <li>Keep discussions civil and constructive</li>
              <li>No spamming or excessive posting</li>
              <li>Follow the site's terms of service</li>
            </ul>
          </div>
          
          {/* Uploading Rules */}
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A'
          }}>
            <h2 style={{ fontSize: '2rem', color: '#00FF88', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M17 8L12 3L7 8" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M12 3V15" stroke="#00FF88" strokeWidth="2" fill="none"/>
              </svg>
              Uploading Rules
            </h2>
            <ul style={{ color: '#B8C0CC', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Only upload content you have the right to share</li>
              <li>Use proper naming conventions</li>
              <li>Include accurate descriptions and tags</li>
              <li>Ensure proper encoding and quality standards</li>
              <li>Seed your uploads for at least 72 hours</li>
            </ul>
          </div>
          
          {/* Downloading Rules */}
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A'
          }}>
            <h2 style={{ fontSize: '2rem', color: '#00FF88', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M7 10L12 15L17 10" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M12 15V3" stroke="#00FF88" strokeWidth="2" fill="none"/>
              </svg>
              Downloading Rules
            </h2>
            <ul style={{ color: '#B8C0CC', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Maintain a minimum ratio of 0.6</li>
              <li>Seed downloaded content for at least 48 hours</li>
              <li>Use proper client settings</li>
              <li>Report broken torrents to staff</li>
              <li>Don't hit and run</li>
            </ul>
          </div>
          
          {/* Community Conduct */}
          <div style={{ 
            backgroundColor: '#111315', 
            padding: '2rem', 
            borderRadius: '8px',
            border: '1px solid #22262A'
          }}>
            <h2 style={{ fontSize: '2rem', color: '#00FF88', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 3 15.9391 3 17V21" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15H16" stroke="#00FF88" strokeWidth="2" fill="none"/>
                <path d="M16 11C18.2091 11 20 9.20914 20 7C20 4.79086 18.2091 3 16 3C13.7909 3 12 4.79086 12 7C12 9.20914 13.7909 11 16 11Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              </svg>
              Community Conduct
            </h2>
            <ul style={{ color: '#B8C0CC', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
              <li>Help newcomers and answer questions</li>
              <li>Share knowledge and contribute to discussions</li>
              <li>Report rule violations to staff</li>
              <li>Participate in community events</li>
              <li>Be a positive influence in the community</li>
            </ul>
          </div>
        </div>
        
        {/* Important Notice */}
        <div style={{ 
          backgroundColor: '#15181B', 
          padding: '2rem', 
          borderRadius: '8px',
          border: '1px solid #FFC857',
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.5rem', color: '#FFC857', marginBottom: '1rem' }}>Important Notice</h3>
          <p style={{ color: '#B8C0CC', lineHeight: '1.6' }}>
            Failure to follow these rules may result in warnings, temporary suspension, or permanent ban. 
            We strive to maintain a high-quality community and appreciate your cooperation.
          </p>
          <p style={{ color: '#B8C0CC', marginTop: '1rem', fontSize: '0.9rem' }}>
            For questions about these rules, please contact staff through the support system.
          </p>
        </div>
      </div>
    </div>
  )
}
