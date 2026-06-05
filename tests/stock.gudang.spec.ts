import { test, expect } from '@playwright/test';

test.describe('Gudang Stock Management', () => {
  test('Warehouse stock page loads with summary and table', async ({ page }) => {
    await page.goto('/kelolagudang/stock');

    // Page title
    await expect(page.getByRole('heading', { name: 'Stok Gudang' })).toBeVisible();
    await expect(page.getByText('Pantau stok barang yang tersedia di gudang')).toBeVisible();

    // Summary cards
    await expect(page.getByText('Total Produk').first()).toBeVisible();
    await expect(page.getByText('Total Stok').first()).toBeVisible();
    await expect(page.getByText('Stok Rendah').first()).toBeVisible();

    // Search input
    await expect(page.getByPlaceholder('Cari produk...')).toBeVisible();

    // Table headers
    await expect(page.getByText('ID Stok').first()).toBeVisible();
    await expect(page.getByText('Nama Produk').first()).toBeVisible();
    await expect(page.getByText('Lokasi Gudang').first()).toBeVisible();
    await expect(page.getByText('Satuan').first()).toBeVisible();
    await expect(page.getByText('Stok Aktif').first()).toBeVisible();
    await expect(page.getByText('Aksi').first()).toBeVisible();

    // Refresh button
    await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();
  });
});
