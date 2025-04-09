# Stop on first error
$ErrorActionPreference = "Stop"

Write-Host "🧹 Starting cleanup process..." -ForegroundColor Yellow

# Function to safely remove directory
function Remove-DirectorySafely {
    param([string]$path)
    if (Test-Path $path) {
        Write-Host "Removing $path..." -ForegroundColor Cyan
        try {
            Remove-Item -Path $path -Recurse -Force -ErrorAction Stop
        } catch {
            Write-Host "⚠️ Failed to remove $path normally, trying alternative method..." -ForegroundColor Yellow
            # Alternative method using cmd.exe
            cmd.exe /c "rd /s /q `"$path`""
        }
    }
}

# 1. Stop any running Next.js processes
Write-Host "Stopping any running Next.js processes..." -ForegroundColor Cyan
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force -ErrorAction SilentlyContinue

# 2. Clear npm cache
Write-Host "Clearing npm cache..." -ForegroundColor Cyan
npm cache clean --force

# 3. Remove directories
Remove-DirectorySafely ".next"
Remove-DirectorySafely "node_modules"

# 4. Clear package-lock.json
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json" -Force
}

# 5. Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install --force

Write-Host "✅ Clean installation completed!" -ForegroundColor Green
Write-Host "You can now run 'npm run dev' to start the development server." -ForegroundColor Green 