# BlackRatio - Private Tracker

A modern private tracker built with Next.js 14 and NestJS, featuring a dark "underground club" theme and comprehensive torrent management.

## 🎯 Features

- **Modern UI/UX**: Dark theme with neon accents, desktop-first design
- **Authentication**: JWT-based auth with invite-only registration
- **Torrent Management**: Search, filter, and browse torrents with tags
- **User Profiles**: Track ratio, upload/download stats, and snatch history
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Data**: React Query for efficient data fetching
- **Comprehensive Testing**: Full test suite with Jest and Testing Library
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Query** for data fetching
- **Radix UI** for accessible components
- **Lucide React** for icons
- **Jest & Testing Library** for testing

### Backend
- **NestJS** with TypeScript
- **Prisma** ORM with PostgreSQL
- **JWT** authentication
- **Argon2** password hashing
- **Class-validator** for validation
- **Jest** for unit and integration testing

### Infrastructure
- **PostgreSQL** database
- **Redis** (optional, for caching)
- **Docker Compose** for development
- **GitHub Actions** for CI/CD

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
pnpm db:generate

# Push schema to database
pnpm db:push

# Seed with sample data
pnpm seed
```

### 4. Start Development Servers
```bash
# From root directory
pnpm dev

# Or start individually:
# API (port 3000)
cd apps/api && pnpm start:dev

# Web (port 3001)
cd apps/web && pnpm dev
```

### 5. Access the Application
- **Frontend**: http://localhost:3001
- **API**: http://localhost:3000/api
- **Database**: localhost:5432

## 🧪 Testing

### Run All Tests
```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:cov

# Run tests in watch mode
pnpm test:watch

# Run tests for CI
pnpm test:ci
```

### Backend Tests
```bash
cd apps/api
pnpm test          # Run tests
pnpm test:cov      # Run with coverage
pnpm test:watch    # Watch mode
```

### Frontend Tests
```bash
cd apps/web
pnpm test          # Run tests
pnpm test:cov      # Run with coverage
pnpm test:watch    # Watch mode
```

### Test Coverage
- **Backend**: Unit tests for services, controllers, and utilities
- **Frontend**: Component tests, utility function tests
- **Coverage**: Aim for >80% code coverage

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
├── .github/workflows/      # GitHub Actions CI/CD
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
pnpm lint:fix        # Fix linting issues
pnpm clean           # Clean all builds

# Testing
pnpm test            # Run all tests
pnpm test:cov        # Run tests with coverage
pnpm test:watch      # Run tests in watch mode
pnpm test:ci         # Run tests for CI

# Database
pnpm db:generate     # Generate Prisma client
pnpm db:push         # Push schema changes
pnpm db:migrate      # Run migrations
pnpm seed            # Seed with sample data

# Type Checking
pnpm type-check      # Run TypeScript type checking
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

## 🚀 CI/CD Pipeline

### GitHub Actions Workflow
The project includes a comprehensive CI/CD pipeline that runs on every push and pull request:

1. **Test Backend**: Runs NestJS tests with PostgreSQL
2. **Test Frontend**: Runs Next.js tests with Jest
3. **Lint Code**: ESLint and Prettier checks
4. **Build Applications**: Builds both frontend and backend
5. **Security Scan**: Trivy vulnerability scanner
6. **Deploy Staging**: Automatic deployment to staging (main branch)

### Pipeline Features
- ✅ **Automated Testing**: Unit and integration tests
- ✅ **Code Quality**: ESLint, Prettier, TypeScript checks
- ✅ **Security Scanning**: Vulnerability detection
- ✅ **Coverage Reports**: Code coverage tracking
- ✅ **Build Verification**: Ensures applications build successfully
- ✅ **Database Testing**: PostgreSQL integration tests

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
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

### Development Guidelines
- ✅ Write tests for new features
- ✅ Follow the existing code style
- ✅ Update documentation as needed
- ✅ Ensure TypeScript types are correct
- ✅ Run linting before committing

## 📄 License

This project is for portfolio/demonstration purposes only.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NestJS team for the robust backend framework
- Tailwind CSS for the utility-first styling
- The private tracker community for inspiration

---

**BlackRatio** - Where only invited members share.