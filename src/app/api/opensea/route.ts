import { NextRequest, NextResponse } from 'next/server';

const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
const OPENSEA_API_URL = 'https://api.opensea.io/api/v1';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json(
      { error: 'Wallet address is required' },
      { status: 400 }
    );
  }

  if (!OPENSEA_API_KEY) {
    return NextResponse.json(
      { error: 'OpenSea API key is not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${OPENSEA_API_URL}/assets?owner=${address}&limit=20`,
      {
        headers: {
          'X-API-KEY': OPENSEA_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from OpenSea API');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('OpenSea API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch NFTs from OpenSea' },
      { status: 500 }
    );
  }
} 