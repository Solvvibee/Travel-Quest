/**
 * TravelQuest Development Runner
 * Starts both backend server (port 5000) and React frontend (port 3000) concurrently.
 * Displays local network IP so you can test on Android mobile!
 */

import { spawn } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect local IP address for Android mobile testing
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const localIp = getLocalIpAddress();
const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';

console.log('\n======================================================');
console.log('       🎮  TravelQuest Development Server  🌍        ');
console.log('======================================================');
console.log(`💻 Laptop Browser:   http://localhost:3000`);
console.log(`📱 Android Mobile:   http://${localIp}:3000`);
console.log(`⚙️  Backend API:      http://localhost:5000/api/health`);
console.log('======================================================\n');

// Start Express Server
const serverProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'server'),
  stdio: 'inherit',
  shell: true,
});

// Start React Client
const clientProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'client'),
  stdio: 'inherit',
  shell: true,
});

function cleanup() {
  console.log('\nStopping TravelQuest processes...');
  serverProcess.kill();
  clientProcess.kill();
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
