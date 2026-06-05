import { test, expect } from '@playwright/test';

test.describe('POS Flow', () => {
  test('User can open POS and see catalog with filters', async ({ page }) => {
    await page.goto('/pos');

    // Wait for loading to finish
    await expect(page.getByText('Memuat produk...')).not.toBeVisible();

    // Verify header branding
    await expect(page.getByText('LoFISH MART')).toBeVisible();

    // Search input should be visible
    const searchInput = page.getByPlaceholder('Cari produk...');
    await expect(searchInput).toBeVisible();

    // Catalog filter buttons should be present
    await expect(page.getByRole('button', { name: 'Semua' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Produk' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Layanan' })).toBeVisible();

    // Cart sidebar should be present with empty state
    await expect(page.getByText('Pesanan').first()).toBeVisible();
    await expect(page.getByText('Belum ada pesanan')).toBeVisible();

    // Search for a product
    await searchInput.fill('Aqua');

    // Verify the search input has the value
    await expect(searchInput).toHaveValue('Aqua');
  });

  test('User can switch between catalog filters', async ({ page }) => {
    await page.goto('/pos');

    // Wait for loading
    await expect(page.getByText('Memuat produk...')).not.toBeVisible();

    // Click "Produk" filter tab
    await page.getByRole('button', { name: 'Produk' }).click();

    // Click "Layanan" filter tab
    await page.getByRole('button', { name: 'Layanan' }).click();

    // Click "Semua" to go back to all
    await page.getByRole('button', { name: 'Semua' }).click();

    // Grade and size filters should be visible
    await expect(page.getByText('Semua Grade').first()).toBeVisible();
    await expect(page.getByText('Semua Ukuran').first()).toBeVisible();

    // Availability toggle should be visible
    await expect(page.getByText('Tersedia Saja')).toBeVisible();
  });
});
