import { test, expect } from '@playwright/test';

test.describe('Admin Dashboard', () => {
  test('Admin can see dashboard metrics', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Verify dashboard title or key elements
    await expect(page.getByText('Total Pendapatan').first()).toBeVisible();
    await expect(page.getByText('Aksi Cepat').first()).toBeVisible();
  });
});
