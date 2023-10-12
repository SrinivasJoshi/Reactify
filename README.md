# Reactify

Reactify: Simplifying dApp Creation with the Strength of React and the Agility of react-router-dom.

### Why Use This:

- **React Advantage**: Leverage the power of React to build dynamic, responsive, and efficient web applications.

- **Routing with react-router-dom**: Seamlessly manage your application's navigation with `react-router-dom`, making it easy to create single-page applications (SPAs) with client-side routing.

- **Tailwind CSS Integration**: Enjoy the benefits of Tailwind CSS, a highly customizable utility-first CSS framework, to streamline your UI development.

- **User-Friendly Wallet Access**: **RainbowKit** offers a fast, user-friendly, and highly customizable solution for integrating wallet functionality into your application, ensuring a great user experience.

- **Effortless Contract Integration**: **Wagmi** simplifies the integration of smart contracts, reducing the complexity of Ethereum interactions and allowing you to focus on building your dApp's core functionality.

- **Ethers.js Compatibility**: We harness **Ethers.js** to handle blockchain-related operations, making it easy to work with blockchain data, like BigInt, and parse inputs.

- **TypeScript Support**: Enjoy the benefits of TypeScript for enhanced code quality, better tooling, and an improved developer experience, ensuring a smoother development process.

### Setup and use

1.  **Clone the Repository**:

        git clone https://github.com/SrinivasJoshi/Reactify.git

2.  **Change Directory**:

        cd Reactify

3.  **Install Dependencies**:

        npm install

4.  **Configure WalletConnect Cloud**:

- Obtain a `projectId` from [WalletConnect Cloud](https://cloud.walletconnect.com/).
- Open `src/main.tsx` in your code editor.
- Add the obtained `projectId` and the desired `appName` in the provided space in the code.
- Optionally also configure the chain as shown in `src/main.tsx`.

5.  **Start dev server** :

        npm run dev

6.  **Format code** :

        npm run format

## Folder structure
📁 root

├── 📁 public

├── 📁 src

├── 📄 index.html

├── 📄 tailwind.config.js

├── 📄 tsconfig.js

├── 📄 package.json

├── 📄 package-lock.json

├── 📄 .gitignore

├── 📄 `README.md`

└── 📁 .husky

`src`

- `components` : Reusable React components for the dApp.

- `contracts` : Store for smart contract references.

- `utils` : Utilities like contract info.Could be potentially used for state management using recoil

  -  `contractInfo.ts` : smart contract address and ABI

`index.html` : Main HTML file for the web app, used to add required metadata.

`tailwind.config.js` : Tailwind CSS customization file for custom themes, fonts, and colors.
`public` : Assest folder

### Additional reads

1. Basic example usage of Wagmi with React - [Link](https://www.rareskills.io/post/wagmi-react-example).

2. React-Router(v6) docs - [Link](https://reactrouter.com/en/main/start/tutorial)

3. Wagmi docs - [Link](https://wagmi.sh/react/getting-started)
