#!/bin/bash

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Skip build if we're not on the main branch
if [ "$BRANCH" != "main" ]; then
  echo "🛑 - Build can be skipped for non-main branch"
  exit 0;
fi

# Get the latest commit message
COMMIT_MSG=$(git log -1 --pretty=%B)

# Skip build if the commit message contains [skip build]
if [[ "$COMMIT_MSG" == *"[skip build]"* ]]; then
  echo "🛑 - Build can be skipped due to [skip build] in commit message"
  exit 0;
fi

# Don't skip the build
echo "✅ - Build can proceed"
exit 1; 