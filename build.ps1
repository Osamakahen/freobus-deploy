# Stop on first error
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting build process..." -ForegroundColor Yellow

# 1. Clean up
Write-Host "Cleaning up..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
}

# 2. Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install --force

# 3. Build the project
Write-Host "Building the project..." -ForegroundColor Cyan
npm run build

Write-Host "✅ Build completed!" -ForegroundColor Green 