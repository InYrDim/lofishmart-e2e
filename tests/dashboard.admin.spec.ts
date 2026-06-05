import { test, expect } from '@playwright/test';

test.describe('Admin Dashboard', () => {
  test('Admin can see dashboard metrics and quick actions', async ({ page }) => {
    await page.goto('/dashboard');

    // Dashboard should show greeting (one of: Selamat Pagi/Siang/Sore/Malam)
    await expect(page.getByText(/Selamat (Pagi|Siang|Sore|Malam)/)).toBeVisible();

    // Revenue stat card
    await expect(page.getByText('Total Pendapatan').first()).toBeVisible();

    // Transaction count stat card
    await expect(page.getByText('Total Transaksi').first()).toBeVisible();

    // Unpaid transactions stat card
    await expect(page.getByText('Belum Lunas').first()).toBeVisible();

    // Average transaction stat card
    await expect(page.getByText('Rata-rata Transaksi').first()).toBeVisible();

    // Active cashiers stat card
    await expect(page.getByText('Kasir Aktif').first()).toBeVisible();

    // Quick actions section
    await expect(page.getByText('Aksi Cepat').first()).toBeVisible();
    await expect(page.getByText('Point of Sale (POS)').first()).toBeVisible();
    await expect(page.getByText('Data Transaksi').first()).toBeVisible();
    await expect(page.getByText('Manajemen Produk').first()).toBeVisible();
    await expect(page.getByText('Manajemen User').first()).toBeVisible();
  });
});
