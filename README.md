# FreoBusPlatform - Unified Web3 Wallet & Marketplace

FreoBusPlatform is a next-generation unified Web3 platform that seamlessly integrates a modern crypto wallet dashboard and a dApp marketplace. Users can connect their wallet once and enjoy seamless navigation, wallet-aware dApp interactions, and a consistent experience across all features.

## Features

- **Unified Web3 Wallet & Marketplace**: One platform for managing assets and exploring dApps.
- **Global Wallet Connection**: Connect your wallet once—use it everywhere (dashboard, dApps, marketplace).
- **Modern, Responsive UI**: Built with Next.js, Tailwind CSS, and Framer Motion.
- **dApp Marketplace**: Browse, search, and filter real dApps (Uniswap, OpenSea, Mirror.xyz, ENS, and more).
- **Wallet Dashboard**: View wallet status, send transactions, and access (coming soon) portfolio, transaction history, NFTs, and settings.
- **Seamless Navigation**: Unified navigation bar for Portfolio, Transactions, NFTs, DApps, and Settings.
- **Placeholder Pages**: No more 404s—each section has a "Coming Soon" page until fully implemented.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Ethers.js
- viem

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/freobus.git
   cd freobus
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

```
freobus-deploy/
├── public/                    # Static assets
├── src/
│   ├── app/                  # Next.js app directory (routes, pages)
│   │   ├── marketplace/      # Marketplace page and components
│   │   ├── wallet/           # Wallet dashboard page
│   │   ├── history/          # Transactions placeholder
│   │   ├── nfts/             # NFTs placeholder
│   │   ├── dapps/            # DApps placeholder
│   │   └── settings/         # Settings placeholder
│   ├── components/           # Reusable UI components (Navigation, WalletUI, AppCard, etc.)
│   └── context/              # Global context providers (Wallet, Network)
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**You can contribute to:**
- Wallet dashboard features (portfolio, transactions, NFTs, etc.)
- Marketplace dApp integration and UI
- Navigation and global state improvements

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Twitter: [@freobus](https://twitter.com/freobus)
- Discord: [Join our community](https://discord.gg/freobus)
- GitHub: [freobus](https://github.com/freobus) 