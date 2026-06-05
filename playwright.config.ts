import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'admin',
      testMatch: /.*\.admin\.spec\.ts/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/admin.json',
        launchOptions: { slowMo: 500 },
      },
      dependencies: ['setup'],
    },
    {
      name: 'kasir',
      testMatch: /.*\.kasir\.spec\.ts/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/kasir.json',
        launchOptions: { slowMo: 500 },
      },
      dependencies: ['setup'],
    },
    {
      name: 'gudang',
      testMatch: /.*\.gudang\.spec\.ts/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/gudang.json',
        launchOptions: { slowMo: 500 },
      },
      dependencies: ['setup'],
    },
  ],

  webServer: [
    {
      command: 'npm run start',
      cwd: '../lofishmart-backend',
      url: 'http://localhost:3030/api',
      reuseExistingServer: true,
    },
    {
      command: 'npm run dev',
      cwd: '../lofishmart-frontend',
      url: 'http://localhost:5173',
      reuseExistingServer: true,
    }
  ],
});
