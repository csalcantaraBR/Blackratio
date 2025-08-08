'use client'

import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Shield, Menu, X, Search, User, LogOut, Settings, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AppShellProps {
  children: React.ReactNode
  showSidebar?: boolean
}

export function AppShell({ children, showSidebar = false }: AppShellProps) {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const navigation = [
    { name: 'Torrents', href: '/torrents', icon: Search },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Rules', href: '/rules', icon: BookOpen },
  ]

  const userNavigation = [
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-surface">
        <div className="mx-auto max-w-content-wide px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and primary nav */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-text-primary">BLACKRATIO</span>
              </Link>
              
              {showSidebar && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-6 lg:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              )}
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* User menu */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-text-secondary">
                    Ratio: <span className={cn("font-medium", getRatioColor(user.ratio))}>
                      {user.ratio.toFixed(2)}
                    </span>
                  </span>
                  <div className="relative">
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{user.username}</span>
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={logout}
                    className="text-text-secondary hover:text-danger"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/login">
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      {showSidebar && sidebarOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-surface border-r border-border">
            <div className="flex h-16 items-center justify-between px-4">
              <span className="text-lg font-semibold text-text-primary">Navigation</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="mx-auto max-w-content-wide px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  )
}

function getRatioColor(ratio: number): string {
  if (ratio >= 1.0) return 'text-success'
  if (ratio >= 0.6) return 'text-warning'
  return 'text-danger'
}
