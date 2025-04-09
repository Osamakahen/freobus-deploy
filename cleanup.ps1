# Stop any running Next.js processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# Wait for processes to stop
Start-Sleep -Seconds 2

# Remove .next directory
if (Test-Path -Path ".next") {
    Write-Host "Removing .next directory..."
    Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
}

# Remove node_modules directory
if (Test-Path -Path "node_modules") {
    Write-Host "Removing node_modules directory..."
    Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
}

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Build the project
Write-Host "Building the project..."
npm run build

Write-Host "Cleanup complete!" 