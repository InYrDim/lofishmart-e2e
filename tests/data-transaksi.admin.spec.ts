import { test, expect } from '@playwright/test';

test.describe('Transaction Data Page', () => {
  test('Transaction data page loads with filters and controls', async ({ page }) => {
    await page.goto('/data-transaksi');

    // Page title
    await expect(page.getByRole('heading', { name: 'Data Transaksi' })).toBeVisible();

    // Refresh button
    await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();

    // Tambah Transaksi button (admin/manager only)
    await expect(page.getByRole('button', { name: 'Tambah Transaksi' })).toBeVisible();

    // Period filter
    await expect(page.getByText('Periode:').first()).toBeVisible();

    // Search input
    await expect(page.getByPlaceholder('Cari ID / Nama...')).toBeVisible();

    // Various filters
    await expect(page.getByText('Kasir:').first()).toBeVisible();
    await expect(page.getByText('Metode:').first()).toBeVisible();
    await expect(page.getByText('Status:').first()).toBeVisible();
  });

  test('Transaction history page loads with dashboard view', async ({ page }) => {
    await page.goto('/transactions');

    // Page title
    await expect(page.getByRole('heading', { name: 'Riwayat Transaksi' })).toBeVisible();

    // Dashboard view should show the "Lihat Detail Transaksi" button
    await expect(page.getByText('Lihat Detail Transaksi').first()).toBeVisible();
  });
});
