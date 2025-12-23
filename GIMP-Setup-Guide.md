# GIMP Setup Guide for VS Code

## Overview
This guide documents how to work with GIMP from VS Code on Windows, including paths, executables, and automated background removal scripts.

## GIMP Installation Details

### Executable Location
- **GIMP Version**: GIMP 3
- **Executable Path**: `C:\Users\smart\AppData\Local\Microsoft\WindowsApps\gimp-3.exe`
- **Package Location**: `C:\Users\smart\AppData\Local\Packages\GIMP.43237F745459_nq49gba4h4mx8`

### PATH Configuration
GIMP is already accessible through Windows App Execution Alias, so it's available system-wide without manual PATH configuration.

**To verify GIMP is accessible:**
```powershell
Get-Command gimp* | Select-Object Name, Source
```

Expected output:
```
Name       Source
----       ------
gimp-3.exe C:\Users\smart\AppData\Local\Microsoft\WindowsApps\gimp-3.exe
```

## Opening Images in GIMP from VS Code

### Method 1: Command Line
```powershell
gimp-3 "C:\path\to\your\image.png"
```

### Method 2: Using VS Code Terminal
1. Open integrated terminal in VS Code (`` Ctrl+` ``)
2. Navigate to your project directory
3. Run: `gimp-3 ".\public\images\YourImage.png"`

## Automated Background Removal

### Python Environment Setup

**Location**: `C:\Srinath\git\netlify\netlify\.venv`

**Python Version**: 3.14.0

**Required Packages**:
- pillow
- numpy
- scipy
- scikit-image

### Setting Up After Computer Restart

1. **Open VS Code** in your project directory
2. **Activate Python Environment** (if not auto-activated):
   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

3. **Install packages** (if starting fresh):
   ```powershell
   pip install pillow numpy scipy scikit-image
   ```

### Background Removal Script

**Script Location**: `C:\Srinath\git\netlify\netlify\remove_bg.py`

**Usage**:
```powershell
# Using the venv Python
C:/Srinath/git/netlify/netlify/.venv/Scripts/python.exe remove_bg.py

# Or if venv is activated
python remove_bg.py
```

**How it works**:
- Loads the original image from `public/images/Bella.png`
- Detects the subject based on non-white areas (black spots)
- Uses morphological operations to expand around subject
- Fills holes to preserve white foreground areas between dark spots
- Removes only the outer white background
- Saves result as `public/images/Bella-no-bg.png`

**Adjustable Parameters** in `remove_bg.py`:
- `threshold = 40` - Color similarity threshold for detecting white
- `morphology.disk(5)` - Size of morphological structuring element
- `iterations=3` - Number of dilation iterations
- `max_size=1000` - Minimum hole size to fill

## MCP (Model Context Protocol) Integration

### Status
**Currently NOT configured**. The current setup uses:
- Direct GIMP command-line launching
- Python scripts for image processing
- No MCP server or bridge

### Future MCP Setup (If Needed)

To integrate GIMP with VS Code via MCP, you would need to:

1. **Create an MCP Server** for GIMP
   - Server would expose GIMP functions as MCP tools
   - Location: Create in a dedicated directory
   - Language: Typically Python or Node.js

2. **Configure MCP Server** in VS Code settings
   - File: `.vscode/settings.json` or user settings
   - Add server configuration under `mcp.servers`

3. **GIMP Bridge/Plugin**
   - Create a GIMP plugin that communicates with the MCP server
   - Plugin location: GIMP plugins directory
   - Protocol: Could use HTTP, WebSocket, or IPC

4. **MCP Inspector** for testing
   - Install: `npm install -g @modelcontextprotocol/inspector`
   - Run: `mcp-inspector`
   - Test server endpoints before VS Code integration

### Example MCP Configuration (Template)
```json
{
  "mcp.servers": {
    "gimp": {
      "command": "python",
      "args": ["-m", "gimp_mcp_server"],
      "cwd": "C:/path/to/mcp/server",
      "env": {
        "GIMP_EXECUTABLE": "C:/Users/smart/AppData/Local/Microsoft/WindowsApps/gimp-3.exe"
      }
    }
  }
}
```

## Quick Reference Commands

### Open GIMP with Image
```powershell
gimp-3 ".\public\images\Bella.png"
```

### Remove Background (Python Script)
```powershell
.\.venv\Scripts\python.exe remove_bg.py
```

### Check GIMP Installation
```powershell
gimp-3 --version
```

### Verify Python Environment
```powershell
.\.venv\Scripts\python.exe --version
```

### List Installed Python Packages
```powershell
.\.venv\Scripts\pip.exe list
```

## Troubleshooting

### GIMP not found
- Verify installation: `Get-Command gimp-3`
- If not found, reinstall GIMP from Microsoft Store or official website

### Python environment not working
```powershell
# Recreate virtual environment
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install pillow numpy scipy scikit-image
```

### Script errors
- Ensure all packages are installed
- Check image path is correct
- Verify input image exists: `Test-Path ".\public\images\Bella.png"`

## Notes

- GIMP 3 uses `gimp-3.exe` (not `gimp.exe`)
- Windows App Execution Alias automatically handles PATH
- Virtual environment must be activated for script execution
- Background removal script preserves white foreground areas

---

**Last Updated**: December 22, 2025  
**Project**: c:\Srinath\git\netlify\netlify
