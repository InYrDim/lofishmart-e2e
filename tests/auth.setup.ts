import { test as setup, expect } from '@playwright/test';

const users = [
  { role: 'admin', username: 'admin', password: 'admin123' },
  { role: 'kasir', username: 'kasir1', password: 'kasir123' },
  { role: 'gudang', username: 'gudang1', password: 'gudang123' },
];

for (const user of users) {
  setup(`authenticate as ${user.role}`, async ({ page }) => {
    await page.goto('/');
    
    // Fill credentials
    await page.getByLabel('Username').fill(user.username);
    await page.getByLabel('Password').fill(user.password);
    
    // Submit
    await page.getByRole('button', { name: 'Masuk Sekarang' }).click();

    // Flexible wait for any post-login page
    // Admin/Manager -> /dashboard
    // Others -> /pos
    await page.waitForURL(url => 
      url.pathname.includes('/dashboard') || 
      url.pathname.includes('/pos')
    );
    
    // Final check for branding to ensure page is loaded
    await expect(page.getByText('LoFISH MART')).toBeVisible();

    // Save state
    await page.context().storageState({ path: `playwright/.auth/${user.role}.json` });
  });
}
