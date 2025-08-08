'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
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
          </div>
        </div>
      </nav>
      
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ 
          backgroundColor: '#111315', 
          padding: '2rem', 
          borderRadius: '8px',
          border: '1px solid #22262A'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 10V22L16 30L4 22V10L16 2Z" stroke="#00FF88" strokeWidth="2" fill="none"/>
              <path d="M16 6L24 10V18L16 22L8 18V10L16 6Z" fill="#00FF88"/>
              <circle cx="16" cy="16" r="3" fill="#0B0B0B"/>
            </svg>
            <h1 style={{ fontSize: '2rem', marginTop: '1rem', color: '#00FF88' }}>Sign In</h1>
            <p style={{ color: '#B8C0CC', marginTop: '0.5rem' }}>Access your BlackRatio account</p>
          </div>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0' }}>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email"
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
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#F0F0F0' }}>Password</label>
              <input 
                type="password" 
                placeholder="Enter your password"
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
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>Remember me</label>
            </div>
            
            <button 
              type="submit"
              style={{
                backgroundColor: '#00FF88',
                color: '#0B0B0B',
                padding: '0.75rem',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Sign In
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#B8C0CC', fontSize: '0.9rem' }}>
              Don't have an account?{' '}
              <a href="/register" style={{ color: '#00FF88', textDecoration: 'none' }}>Request invite</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
