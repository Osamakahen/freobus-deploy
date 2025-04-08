#!/bin/bash

echo "👉 Checking if we should skip the build..."

# Get the commit message
COMMIT_MSG=$(git log -1 --pretty=%B)

# Skip build if commit message contains [skip build]
if [[ $COMMIT_MSG == *"[skip build]"* ]]; then
  echo "⏭️ Build skipped because commit message contains [skip build]"
  exit 1;
fi

# Skip build if only documentation files were changed
if git diff --name-only HEAD^ HEAD | grep -q "^docs/"; then
  if ! git diff --name-only HEAD^ HEAD | grep -vq "^docs/"; then
    echo "⏭️ Build skipped because only documentation files were changed"
    exit 1;
  fi
fi

echo "✅ Build should proceed"
exit 0; 