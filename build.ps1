# Standardized build script for FreoBus platform
param(
    [string]$Environment = "development",
    [switch]$Clean = $false
)

$ErrorActionPreference = "Stop"

# Load environment variables
$envFile = ".env.$Environment"
if (Test-Path $envFile) {
    Get-Content $envFile | ForEach-Object {
        if ($_ -match '^([^=]+)=(.*)$') {
            $name = $matches[1]
            $value = $matches[2]
            [Environment]::SetEnvironmentVariable($name, $value, "Process")
        }
    }
}

# Clean build if requested
if ($Clean) {
    Write-Host "Cleaning previous build artifacts..."
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "dist"
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "node_modules"
    npm cache clean --force
}

# Install dependencies
Write-Host "Installing dependencies..."
npm install

# Build main platform
Write-Host "Building main platform..."
npm run build

# Build wallet component
Write-Host "Building wallet component..."
cd ../freo-wallet
npm install
npm run build
cd ../freobus-deploy

# Run tests
Write-Host "Running tests..."
npm test

# Generate build artifacts
Write-Host "Generating build artifacts..."
New-Item -ItemType Directory -Force -Path "dist"
Copy-Item -Path "public" -Destination "dist" -Recurse
Copy-Item -Path "src" -Destination "dist" -Recurse
Copy-Item -Path "../freo-wallet/dist" -Destination "dist/wallet" -Recurse

# Generate build info
$buildInfo = @{
    timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    environment = $Environment
    version = (Get-Content package.json | ConvertFrom-Json).version
    commit = git rev-parse --short HEAD
} | ConvertTo-Json

$buildInfo | Out-File -FilePath "dist/build-info.json"

Write-Host "Build completed successfully!" 