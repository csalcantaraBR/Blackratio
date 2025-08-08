const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export interface User {
  id: string
  email: string
  username: string
  role: 'user' | 'uploader' | 'moderator' | 'admin'
  uploaded: number
  downloaded: number
  ratio: number
  createdAt: string
}

export interface Torrent {
  id: string
  name: string
  size: number
  seeders: number
  leechers: number
  tags: string[]
  isFreeleech: boolean
  isVip: boolean
  is4k: boolean
  uploaderId: string
  uploader: User
  createdAt: string
}

export interface Snatch {
  id: string
  torrentId: string
  torrent: Torrent
  uploaded: number
  downloaded: number
  ratio: number
  completed: boolean
  seedtimeSeconds: number
  lastAnnounceAt: string
}

export interface AuthResponse {
  access_token: string
  user: User
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  inviteCode: string
}

export interface TorrentsResponse {
  torrents: Torrent[]
  total: number
  page: number
  limit: number
}

class ApiClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = API_BASE_URL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, config)
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Network error' }))
      throw new Error(error.message || 'Request failed')
    }

    return response.json()
  }

  // Auth endpoints
  async login(data: LoginRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async getMe(): Promise<User> {
    return this.request<User>('/users/me')
  }

  // Torrents endpoints
  async getTorrents(params: {
    query?: string
    tags?: string[]
    sort?: string
    page?: number
    limit?: number
  } = {}): Promise<TorrentsResponse> {
    const searchParams = new URLSearchParams()
    
    if (params.query) searchParams.append('query', params.query)
    if (params.tags?.length) searchParams.append('tags', params.tags.join(','))
    if (params.sort) searchParams.append('sort', params.sort)
    if (params.page) searchParams.append('page', params.page.toString())
    if (params.limit) searchParams.append('limit', params.limit.toString())

    const queryString = searchParams.toString()
    return this.request<TorrentsResponse>(`/torrents?${queryString}`)
  }

  async getTorrent(id: string): Promise<Torrent> {
    return this.request<Torrent>(`/torrents/${id}`)
  }

  // User endpoints
  async getUserSnatches(userId: string): Promise<Snatch[]> {
    return this.request<Snatch[]>(`/users/${userId}/snatches`)
  }

  async getUserStats(userId: string): Promise<{
    ratio: number
    uploaded: number
    downloaded: number
    seeding: number
    snatched: number
  }> {
    return this.request(`/users/${userId}/stats`)
  }
}

export const apiClient = new ApiClient()
