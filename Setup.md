# Project Setup Guide

## Initial Setup

1. Create a new project and initialize npm:
```bash
npm init -y
```
This creates a basic `package.json` file with default values.

2. Install core dependencies:
```bash
# Core dependencies
npm install --save-dev parcel
npm install react@^18 react-dom@^18
npm install -D tailwindcss postcss

# VeChain Kit and its UI dependencies
npm install @vechain/vechain-kit

# Data fetching and routing
npm install react-router-dom
```

This installs:
- Parcel as our build tool and development server
- React and React DOM for our UI framework
- Tailwind CSS for styling with its PostCSS dependency
- VeChain Kit for blockchain connectivity and interactions with the VeChain network
- React Router for client-side routing

3. Configure Parcel:
Add the following configuration to `package.json` to enable package exports resolution ([source](https://parceljs.org/blog/v2-9-0/#new-resolver)):
```json
{
  "@parcel/resolver-default": {
    "packageExports": true
  }
}
```

4. Create basic application structure:
```bash
mkdir -p src/components
touch src/App.tsx src/index.html src/components/Menu.tsx src/components/Connect.tsx src/pages/Home.tsx
```

This creates our main application files:
- `index.html`: Entry point HTML file
- `App.tsx`: Main React application component with React Query and Chakra UI providers
- `components/Menu.tsx`: Navigation menu component with wallet connection button
- `components/Connect.tsx`: Wallet connection component using VeChain Kit
- `pages/Home.tsx`: Home page component

The Connect component provides:
- Wallet connection/disconnection functionality
- Loading state handling
- Mobile and desktop variants of the connection button
- Integration with VeChain Kit's wallet management

5. Configure npm scripts:
Add the following scripts to `package.json`:
```json
{
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}
```

You can now:
- Run `npm start` to start the development server
- Run `npm run build` to create a production build