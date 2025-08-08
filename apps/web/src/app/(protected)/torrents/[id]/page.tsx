'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Tag } from '@/components/ui/tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Users, FileText, MessageSquare, Calendar, User, HardDrive } from 'lucide-react'
import { formatBytes, formatDate } from '@/lib/utils'

export default function TorrentDetailsPage() {
  const params = useParams()
  const torrentId = params.id as string
  const [activeTab, setActiveTab] = useState('details')

  const { data: torrent, isLoading, error } = useQuery({
    queryKey: ['torrent', torrentId],
    queryFn: () => apiClient.getTorrent(torrentId)
  })

  const tabs = [
    { id: 'details', label: 'Details', icon: FileText },
    { id: 'files', label: 'Files', icon: HardDrive },
    { id: 'peers', label: 'Peers', icon: Users },
    { id: 'comments', label: 'Comments', icon: MessageSquare },
  ]

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-surface-secondary rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-surface-secondary rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (error || !torrent) {
    return (
      <div className="text-center py-12">
        <p className="text-danger">Failed to load torrent details</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              {torrent.name}
            </h1>
            <div className="flex items-center space-x-4 text-text-secondary">
              <span className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Uploaded {formatDate(torrent.createdAt)}</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>by {torrent.uploader.username}</span>
              </span>
            </div>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download .torrent
          </Button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {torrent.isFreeleech && (
            <Tag variant="freeleech">FREELEECH</Tag>
          )}
          {torrent.isVip && (
            <Tag variant="vip">VIP</Tag>
          )}
          {torrent.is4k && (
            <Tag variant="4k">4K</Tag>
          )}
          {torrent.tags.map((tag) => (
            <Tag key={tag} variant="default">
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-text-primary">
              {formatBytes(torrent.size)}
            </div>
            <div className="text-sm text-text-secondary">Size</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">
              {torrent.seeders}
            </div>
            <div className="text-sm text-text-secondary">Seeders</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">
              {torrent.leechers}
            </div>
            <div className="text-sm text-text-secondary">Leechers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-text-primary">
              {torrent.seeders + torrent.leechers}
            </div>
            <div className="text-sm text-text-secondary">Total Peers</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Card>
        <CardHeader>
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Tracker Info</h3>
                <div className="bg-surface-secondary p-4 rounded-md space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Announce URL:</span>
                    <span className="text-text-primary font-mono text-sm">
                      https://blackratio.dev/announce
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Passkey:</span>
                    <span className="text-text-primary font-mono text-sm">
                      {torrent.uploader.id}abc123def456
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Info Hash:</span>
                    <span className="text-text-primary font-mono text-sm">
                      {torrent.id}abc123def456ghi789
                    </span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-2">
                  * Passkey included in announce URL for private tracker access
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Description</h3>
                <p className="text-text-secondary">
                  This is a high-quality release with proper encoding and tagging. 
                  Please maintain a good ratio and seed for at least 48 hours after completion.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">File List</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-surface-secondary rounded">
                  <span className="text-text-primary font-mono text-sm">
                    /{torrent.name}/movie.mkv
                  </span>
                  <span className="text-text-secondary text-sm">
                    {formatBytes(torrent.size * 0.8)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-secondary rounded">
                  <span className="text-text-primary font-mono text-sm">
                    /{torrent.name}/sample/sample.mkv
                  </span>
                  <span className="text-text-secondary text-sm">
                    {formatBytes(torrent.size * 0.1)}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-secondary rounded">
                  <span className="text-text-primary font-mono text-sm">
                    /{torrent.name}/subs/english.srt
                  </span>
                  <span className="text-text-secondary text-sm">
                    {formatBytes(torrent.size * 0.05)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'peers' && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Connected Peers</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-surface-secondary">
                    <tr>
                      <th className="text-left p-3 text-sm font-medium text-text-primary">User</th>
                      <th className="text-left p-3 text-sm font-medium text-text-primary">Progress</th>
                      <th className="text-left p-3 text-sm font-medium text-text-primary">Downloaded</th>
                      <th className="text-left p-3 text-sm font-medium text-text-primary">Uploaded</th>
                      <th className="text-left p-3 text-sm font-medium text-text-primary">Speed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-surface-secondary">
                      <td className="p-3 text-text-primary">user123</td>
                      <td className="p-3 text-text-secondary">100%</td>
                      <td className="p-3 text-text-secondary">{formatBytes(torrent.size)}</td>
                      <td className="p-3 text-success">{formatBytes(torrent.size * 2.5)}</td>
                      <td className="p-3 text-text-secondary">1.2 MB/s</td>
                    </tr>
                    <tr className="hover:bg-surface-secondary">
                      <td className="p-3 text-text-primary">seeder456</td>
                      <td className="p-3 text-text-secondary">100%</td>
                      <td className="p-3 text-text-secondary">{formatBytes(torrent.size)}</td>
                      <td className="p-3 text-success">{formatBytes(torrent.size * 1.8)}</td>
                      <td className="p-3 text-text-secondary">856 KB/s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Comments</h3>
              <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-text-primary font-medium">user123</span>
                    <span className="text-text-secondary text-sm">{formatDate(new Date())}</span>
                  </div>
                  <p className="text-text-secondary">
                    Great quality release! Thanks for sharing. Seeding back.
                  </p>
                </div>
                <div className="p-4 bg-surface-secondary rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-text-primary font-medium">seeder456</span>
                    <span className="text-text-secondary text-sm">{formatDate(new Date())}</span>
                  </div>
                  <p className="text-text-secondary">
                    Excellent encode, will seed for a long time.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
