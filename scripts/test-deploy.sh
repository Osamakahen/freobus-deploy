#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting FreoWallet Test Deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm test

# Check test coverage
echo "📊 Checking test coverage..."
npm run test:coverage

# Deploy to Vercel preview
echo "🌐 Deploying to Vercel preview..."
vercel --prod

echo "✅ Test deployment completed!" 