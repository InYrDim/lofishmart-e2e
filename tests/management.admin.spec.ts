import { test, expect } from '@playwright/test';

test.describe('Admin Management Pages', () => {
  test('Product management page loads with stats and table', async ({ page }) => {
    await page.goto('/products');

    await expect(page.getByText('Manajemen Produk')).toBeVisible();

    await expect(page.getByText('Total Produk').first()).toBeVisible();
    await expect(page.getByText('Total Jasa').first()).toBeVisible();
    await expect(page.getByText('Diarsipkan').first()).toBeVisible();

    await expect(page.getByPlaceholder('Cari nama atau barcode produk...')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Tambah Produk' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Tambah Layanan' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();

    await expect(page.getByText('Gambar').first()).toBeVisible();
    await expect(page.getByText('Barcode').first()).toBeVisible();
    await expect(page.getByText('Nama Produk').first()).toBeVisible();
    await expect(page.getByText('Kategori').first()).toBeVisible();
    await expect(page.getByText('Status').first()).toBeVisible();
    await expect(page.getByText('Harga Base').first()).toBeVisible();
    await expect(page.getByText('Aksi').first()).toBeVisible();
  });

  test('User management page loads with search and filters', async ({ page }) => {
    await page.goto('/users');

    await expect(page.getByText('Kelola User')).toBeVisible();

    await expect(page.getByPlaceholder('Cari user (nama, email, username)...')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Tambah User' })).toBeVisible();

    await expect(page.getByText('Semua Role').first()).toBeVisible();
    await expect(page.getByText('Semua Outlet').first()).toBeVisible();
  });

  test('Product attributes page loads with category, grade, and size cards', async ({ page }) => {
    await page.goto('/product-attributes');

    await expect(page.getByRole('heading', { name: 'Atribut Produk' })).toBeVisible();
    await expect(page.getByText('Kelola atribut yang digunakan untuk mengklasifikasikan produk')).toBeVisible();

    await expect(page.getByText('Kategori').first()).toBeVisible();
    await expect(page.getByText('Kelola Kategori').first()).toBeVisible();

    await expect(page.getByText('Grade').first()).toBeVisible();
    await expect(page.getByText('Kelola Grade').first()).toBeVisible();

    await expect(page.getByText('Ukuran').first()).toBeVisible();
    await expect(page.getByText('Kelola Ukuran').first()).toBeVisible();
  });

  test('Roles page loads with search and table', async ({ page }) => {
    await page.goto('/roles');

    await expect(page.getByText('Kelola Role & Hak Akses')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Tambah Role' })).toBeVisible();
    await expect(page.getByPlaceholder('Cari role (nama, kode)...')).toBeVisible();

    await expect(page.getByText('ID').first()).toBeVisible();
    await expect(page.getByText('Nama Role').first()).toBeVisible();
    await expect(page.getByText('Permissions').first()).toBeVisible();
    await expect(page.getByText('Aksi').first()).toBeVisible();
  });

  test('Suppliers page loads with search and table', async ({ page }) => {
    await page.goto('/suppliers');

    await expect(page.getByText('Kelola Supplier')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Tambah Supplier' })).toBeVisible();

    await expect(page.getByText('Supplier').first()).toBeVisible();
    await expect(page.getByText('Kontak').first()).toBeVisible();
    await expect(page.getByText('Alamat').first()).toBeVisible();
    await expect(page.getByText('Bank').first()).toBeVisible();
    await expect(page.getByText('Aksi').first()).toBeVisible();
  });

  test('Outlet & Gudang page loads with tabs and search', async ({ page }) => {
    await page.goto('/outletandgudang');

    await expect(page.getByRole('heading', { name: 'Outlet & Gudang' })).toBeVisible();

    await expect(page.getByRole('button', { name: 'Outlet', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Gudang', exact: true })).toBeVisible();

    await expect(page.getByPlaceholder('Cari outlet...')).toBeVisible();
  });

  test('Report per item page loads with filters and table', async ({ page }) => {
    await page.goto('/report-item');

    await expect(page.getByRole('heading', { name: 'Laporan per Item' })).toBeVisible();
    await expect(page.getByText('Analisis rincian penjualan produk secara mendetail')).toBeVisible();

    await expect(page.getByText('Total Produk Terjual').first()).toBeVisible();
    await expect(page.getByText('Total Berat').first()).toBeVisible();
    await expect(page.getByText('Total Pendapatan').first()).toBeVisible();

    await expect(page.getByPlaceholder('Cari produk atau ID transaksi...')).toBeVisible();

    await expect(page.getByText('Tanggal').first()).toBeVisible();
    await expect(page.getByText('Produk').first()).toBeVisible();
    await expect(page.getByText('Detail').first()).toBeVisible();
    await expect(page.getByText('Qty').first()).toBeVisible();
    await expect(page.getByText('Harga Jual').first()).toBeVisible();
    await expect(page.getByText('Total').first()).toBeVisible();
  });
});
