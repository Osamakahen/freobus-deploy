# Stop on first error
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting commit process..." -ForegroundColor Yellow

# 1. Add all changes
Write-Host "Adding all changes..." -ForegroundColor Cyan
git add .

# 2. Commit changes
Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m "Fix build issues and update configuration"

# 3. Push changes
Write-Host "Pushing changes..." -ForegroundColor Cyan
git push origin main

Write-Host "✅ Commit and push completed!" -ForegroundColor Green 