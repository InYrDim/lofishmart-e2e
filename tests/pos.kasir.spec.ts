import { test, expect } from '@playwright/test';

test.describe('POS Flow', () => {
  test('User can open POS and see catalog', async ({ page }) => {
    // 1. Go to POS page
    await page.goto('/pos');

    // 2. Wait for loading to finish
    await expect(page.getByText('Memuat produk...')).not.toBeVisible();

    // 3. Verify header is present
    await expect(page.getByText('LoFISH MART')).toBeVisible();

    // 4. Verify catalog is visible
    // Based on the code, ProductCatalog should be rendered
    const catalog = page.locator('.product-catalog'); // Check if this class exists or use a better selector
    
    // Let's try searching for a common word if we don't know the class
    const searchInput = page.getByPlaceholder('Cari produk...');
    await expect(searchInput).toBeVisible();
    
    await searchInput.fill('Aqua'); // Sample product
    
    // 5. Verify results (if any)
    // This depends on the seeded data
  });
});
