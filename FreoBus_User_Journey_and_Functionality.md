# FreoBus Platform – Main User Journey & Functionalities

## 1. Main Landing Page (Look & Feel Remains Untouched)
- **Audience:** Both new and returning users.
- **Primary Actions:**
  - **Web3 Shopping Mall:** Navigates the user to the dApp marketplace page.
  - **Get Your FreoWallet:** Starts the process for new users to install and set up the FreoWallet browser extension.
  - **Connect Wallet (Navigation Bar):** For returning users who already have FreoWallet installed and set up.

---

## 2. Web3 Shopping Mall Page
- **Navigation Bar (Right Side):**
  - **Connect Wallet:** For users with FreoWallet installed, initiates the wallet connection flow.
  - **Get Your FreoWallet:** For users without FreoWallet, starts the onboarding process (see below).
- **dApp List:**
  - Users can browse a list of available dApps.
  - **If the user's account status is not "Connected" and they click on any dApp:**
    - Show a message: **"Connect your FreoWallet"** and prompt the user to connect their wallet before proceeding.

---

## 3. FreoWallet Onboarding Flow
- **Step 1: Install FreoWallet Extension**
  - User is directed to the Chrome Web Store to install the FreoWallet browser extension.
- **Step 2: Create FreoWallet**
  - After installation, the user is guided through the wallet creation process (username, password, etc.).
- **Step 3: Connect Wallet**
  - Upon successful wallet creation, a "Connect Wallet" button is shown.
  - Clicking this prompts the user to confirm their password.
  - If successful, the button/status updates to "Connected".

---

## 4. Connect Wallet Flow (Anywhere on Platform)
- **Trigger:** User clicks "Connect Wallet" (from navigation bar, marketplace, or any page).
- **Action:** User is prompted to enter and confirm their wallet password.
- **Result:**
  - If authentication is successful, the UI updates to show "Connected" status.
  - This triggers the session management system and auto-connect features, ensuring SSO (Single Sign-On) across all dApps and platform pages.

---

## 5. Session Management & Auto-Connect
- **After Connection:**
  - The platform maintains the user's session, enabling seamless access to all dApps and features without repeated wallet connection prompts.
  - Auto-connect logic ensures the user remains authenticated and connected as long as their session is valid.

---

## Summary of User Flows

- **New User:**
  1. Lands on main page → Clicks "Get Your FreoWallet" → Installs extension → Creates wallet → Connects wallet (password confirmation) → Status: Connected → Session/auto-connect enabled.

- **Returning User:**
  1. Lands on main page → Clicks "Connect Wallet" (nav or marketplace) → Confirms password → Status: Connected → Session/auto-connect enabled.

- **Any User:**
  - Can access the Web3 Shopping Mall at any time, with wallet connection and onboarding options always available in the navigation bar.
  - **If not connected and they click a dApp,** they are prompted to connect their FreoWallet first. 