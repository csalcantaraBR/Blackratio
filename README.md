# BlackRatio - Private Tracker

A modern private tracker built with Next.js 14 and NestJS, featuring a dark "underground club" theme and comprehensive torrent management.

## 🎯 Features

- **Modern UI/UX**: Dark theme with neon accents, desktop-first design
- **Authentication**: JWT-based auth with invite-only registration
- **Torrent Management**: Search, filter, and browse torrents with tags
- **User Profiles**: Track ratio, upload/download stats, and snatch history
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Data**: React Query for efficient data fetching

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Query** for data fetching
- **Radix UI** for accessible components
- **Lucide React** for icons

### Backend
- **NestJS** with TypeScript
- **Prisma** ORM with PostgreSQL
- **JWT** authentication
- **Argon2** password hashing
- **Class-validator** for validation

### Infrastructure
- **PostgreSQL** database
- **Redis** (optional, for caching)
- **Docker Compose** for development

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- pnpm (recommended) or npm

### 1. Clone and Setup
```bash
git clone https://github.com/csalcantaraBR/blackratio.git
cd blackratio
pnpm install
```

### 2. Start Infrastructure
```bash
docker compose up -d
```

### 3. Setup Database
```bash
# Generate Prisma client
cd apps/api
pnpm prisma:generate

# Push schema to database
pnpm prisma:push

# Seed with sample data
pnpm seed
```

### 4. Start Development Servers
```bash
# From root directory
pnpm dev

# Or start individually:
# API (port 3000)
cd apps/api && pnpm dev

# Web (port 3001)
cd apps/web && pnpm dev
```

### 5. Access the Application
- **Frontend**: http://localhost:3001
- **API**: http://localhost:3000/api
- **Database**: localhost:5432

## 📋 Demo Credentials

### Users
- **Admin**: `admin@blackratio.dev` / `admin`
- **User 1**: `user1@example.com` / `user1`
- **User 2**: `user2@example.com` / `user2`

### Invite Codes
- `WELCOME2024`
- `DEMO123`

## 🎨 Design System

### Colors
- **Background**: `#0B0B0B`
- **Surface**: `#111315` / `#15181B`
- **Primary**: `#00FF88` (neon green)
- **Text Primary**: `#F0F0F0`
- **Text Secondary**: `#B8C0CC`
- **Borders**: `#22262A`
- **Danger**: `#FF5A5A`
- **Warning**: `#FFC857`

### Typography
- **Primary**: Montserrat (Google Fonts)
- **Secondary**: Poppins (Google Fonts)

### Layout
- **Desktop-first**: 1200-1440px content width
- **Grid**: 12-column system
- **Spacing**: 8px baseline, 24px between sections
- **Accessibility**: AA contrast compliance

## 📁 Project Structure

```
BlackRatio/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/        # App Router pages
│   │   │   ├── components/ # Reusable components
│   │   │   └── lib/        # Utilities and API
│   │   └── public/         # Static assets
│   └── api/                # NestJS backend
│       ├── src/
│       │   ├── modules/    # Feature modules
│       │   ├── lib/        # Shared utilities
│       │   └── main.ts     # Application entry
│       └── prisma/         # Database schema
├── docker-compose.yml      # Development infrastructure
├── turbo.json             # Build system config
└── package.json           # Root dependencies
```

## 🎯 Key Features

### Frontend Pages
- **Home**: Landing page with stats and recent uploads
- **Torrents**: Browse all torrents with filtering
- **Search**: Advanced search with tags and categories
- **Upload**: Form to upload new torrents
- **Profile**: User stats, ratio, and history
- **Rules**: Community guidelines and policies
- **Login/Register**: Authentication with invite codes

### Backend API
- **Auth**: JWT-based authentication
- **Users**: Profile management and stats
- **Torrents**: CRUD operations with search/filter
- **Invites**: Invite code generation and redemption
- **Stats**: Ratio calculations and metrics

## 🔧 Development

### Available Scripts
```bash
# Development
pnpm dev              # Start all services
pnpm build           # Build all packages
pnpm lint            # Lint all packages
pnpm clean           # Clean all builds

# Database
pnpm db:push         # Push schema changes
pnpm db:generate     # Generate Prisma client
pnpm seed            # Seed with sample data
```

### Environment Variables
Create `.env` files in root and `apps/api/`:
```env
# API
API_URL=http://localhost:3000/api
JWT_SECRET=your-secret-key

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/blackratio
```

## 🖼️ Application Preview

### Pages Available
- **Home Page**: Landing page with stats and recent uploads
- **Torrents List**: Browse all torrents with filtering and search
- **Search Page**: Advanced search with tags and categories
- **Upload Form**: Form to upload new torrents
- **User Profile**: User stats, ratio, and download history
- **Torrent Details**: Detailed view of individual torrents
- **Rules Page**: Community guidelines and policies
- **Login/Register**: Authentication with invite codes

### Demo Access
You can test the application by running the development servers and accessing:
- **Frontend**: http://localhost:3001
- **API Documentation**: Available at http://localhost:3000/api

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for portfolio/demonstration purposes only.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NestJS team for the robust backend framework
- Tailwind CSS for the utility-first styling
- The private tracker community for inspiration

---

**BlackRatio** - Where only invited members share.