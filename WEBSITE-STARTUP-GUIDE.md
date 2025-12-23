# Website Development - Quick Start Guide

## Running the Website Locally After Computer Restart

### Project Information
- **Location**: `C:\Srinath\git\netlify\netlify`
- **Framework**: Vite + React
- **Local URL**: http://localhost:5173/

### Steps to Run Locally

1. **Open VS Code in Project Directory**
   - Open folder: `C:\Srinath\git\netlify\netlify`

2. **Open Integrated Terminal**
   - Press `` Ctrl+` `` or go to Terminal → New Terminal

3. **Install Dependencies** (only needed if `node_modules` folder is missing)
   ```powershell
   npm install
   ```

4. **Start Development Server**
   ```powershell
   npm run dev
   ```

5. **Access Website**
   - Open browser and go to: http://localhost:5173/
   - Or Ctrl+Click on the URL shown in terminal

### Available Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Stopping the Server
- Press `Ctrl+C` in the terminal running the dev server
- Type `Y` to confirm termination

### Troubleshooting

**Server not starting:**
```powershell
# Clear cache and reinstall
rm -r node_modules
rm package-lock.json
npm install
npm run dev
```

**Port 5173 already in use:**
```powershell
# Kill the process using the port
netstat -ano | findstr :5173
# Then kill the process ID shown
taskkill /PID <process_id> /F
```

**Module not found errors:**
```powershell
npm install
```

### Quick Reference

| Action | Command |
|--------|---------|
| Start dev server | `npm run dev` |
| Stop server | `Ctrl+C` |
| Install packages | `npm install` |
| Build project | `npm run build` |

---

**Last Updated**: December 22, 2025
