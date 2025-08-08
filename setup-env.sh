#!/bin/bash

echo "🚀 Setting up BlackRatio v2 environment..."

# Create API .env file
echo "📝 Creating API environment file..."
cat > apps/api/.env << EOF
# Database
DATABASE_URL="postgresql://tracker:tracker@localhost:5432/tracker?schema=public"

# JWT
JWT_SECRET="blackratio-dev-secret-key-change-in-production"

# Server
PORT=3000
FRONTEND_URL="http://localhost:3001"
EOF

# Create Web .env.local file
echo "📝 Creating Web environment file..."
cat > apps/web/.env.local << EOF
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
EOF

echo "✅ Environment files created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Start the database: docker compose up -d"
echo "2. Setup the database: cd apps/api && pnpm prisma:generate && pnpm prisma:push && pnpm seed"
echo "3. Start the development servers: pnpm dev"
echo ""
echo "🎫 Demo credentials:"
echo "Admin: admin@blackratio.dev / admin"
echo "User 1: user1@example.com / user1"
echo "User 2: user2@example.com / user2"
echo ""
echo "🎫 Invite codes: WELCOME2024, DEMO123"
