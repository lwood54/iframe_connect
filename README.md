# Iframe Connect Demo

A demonstration of cross-origin communication between a parent application and an iframe using the `postMessage` API.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd iframe_connect
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Running the Applications

### Option 1: Using pnpm workspaces (Recommended)

Start both applications simultaneously:

```bash
# Start Parent Controller (runs on http://localhost:5173)
pnpm --filter ./ParentController dev

# Start Counter App (runs on http://localhost:5174)
pnpm --filter ./Counter dev
```

### Option 2: Manual startup

```bash
# Terminal 1 - Start Parent Controller
cd ./ParentController
pnpm dev

# Terminal 2 - Start Counter App
cd ./Counter
pnpm dev
```

## How it Works

- **Parent Controller**: A React app that embeds the Counter app in an iframe
- **Counter App**: A React app that receives messages from the parent via `postMessage`
- **Communication**: The parent can send increment/decrement commands to the iframe

## 📁 Project Structure

```
iframe_connect/
├── ParentController/     # Parent application with iframe
├── Counter/             # Counter app embedded in iframe
└── README.md
```

## 🔧 Development

Both applications are built with:

- **React 18** with TypeScript
- **Vite** for fast development
- **pnpm** for package management

## 🌐 Access the Applications

- **Parent Controller**: http://localhost:5173
- **Counter App**: http://localhost:5174

## 📝 Notes

- The applications communicate using the `postMessage` API
- Cross-origin communication is enabled for development
- For production, consider implementing proper origin validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

[Add your license here]
