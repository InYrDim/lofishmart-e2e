import { test, expect } from '@playwright/test';

test.describe('Admin Product CRUD', () => {
  test('Tambah Produk modal opens with all tabs and fields', async ({ page }) => {
    await page.goto('/products');

    await page.getByRole('button', { name: 'Tambah Produk' }).click();
    const modal = page.getByRole('dialog', { name: 'Tambah Produk Baru' });

    await expect(modal.getByText('Tambah Produk Baru')).toBeVisible();
    await expect(modal.getByRole('tab', { name: 'Informasi Dasar' })).toBeVisible();
    await expect(modal.getByRole('tab', { name: 'Varian & Harga' })).toBeVisible();
    await expect(modal.getByRole('tab', { name: 'Pengaturan' })).toBeVisible();
    await expect(modal.getByText('Nama Produk')).toBeVisible();
    await expect(modal.getByText('Lacak (Barcode)')).toBeVisible();
    await expect(modal.getByText('Grup Kategori')).toBeVisible();
    await expect(modal.getByText('Unit Basis Perhitungan')).toBeVisible();
    await expect(modal.getByPlaceholder('Contoh: Ikan Layang Spesial')).toBeVisible();
    await expect(modal.getByRole('button', { name: 'Batalkan' })).toBeVisible();
    await expect(modal.getByRole('button', { name: 'Tambah Produk' })).toBeVisible();

    await modal.getByRole('button', { name: 'Batalkan' }).click();
    await expect(page.getByText('Tambah Produk Baru')).not.toBeVisible();
  });

  test('Tambah Layanan modal opens with form fields', async ({ page }) => {
    await page.goto('/products');

    await page.getByRole('button', { name: 'Tambah Layanan' }).click();
    const modal = page.getByRole('dialog', { name: 'Tambah Layanan Baru' });

    await expect(modal.getByText('Tambah Layanan Baru')).toBeVisible();
    await expect(modal.getByText('Nama Layanan')).toBeVisible();
    await expect(modal.getByText('Barcode')).toBeVisible();
    await expect(modal.getByText('Harga (Tarif)')).toBeVisible();
    await expect(modal.getByText('Diskon (Opsional)')).toBeVisible();
    await expect(modal.getByPlaceholder('Contoh: Titip Jual, Voucher, dll')).toBeVisible();
    await expect(modal.getByRole('button', { name: 'Batalkan' })).toBeVisible();
    await expect(modal.getByRole('button', { name: 'Tambah Layanan' })).toBeVisible();

    await modal.getByRole('button', { name: 'Batalkan' }).click();
  });

  test('Variants tab shows empty state and add variant modal', async ({ page }) => {
    await page.goto('/products');

    await page.getByRole('button', { name: 'Tambah Produk' }).click();
    const modal = page.getByRole('dialog', { name: 'Tambah Produk Baru' });

    await modal.getByRole('tab', { name: 'Varian & Harga' }).click();
    await expect(modal.getByText('Formasi Kosong')).toBeVisible();
    await expect(modal.getByText('Tambah Matriks Varian')).toBeVisible();

    await modal.getByRole('button', { name: 'Tambah Matriks Varian' }).click();
    const variantModal = page.getByRole('dialog', { name: 'Tambah Varian Harga' });

    await expect(variantModal.getByText('Tambah Varian Harga')).toBeVisible();
    await expect(variantModal.getByText('Ukuran (Size)')).toBeVisible();
    await expect(variantModal.getByText('Grade (Kualitas)')).toBeVisible();
    await expect(variantModal.getByText('Harga Dasar')).toBeVisible();
    await expect(variantModal.getByPlaceholder('Contoh: 15000')).toBeVisible();

    await variantModal.getByRole('button', { name: 'Batal' }).click();
    await expect(page.getByText('Tambah Varian Harga')).not.toBeVisible();

    await modal.getByRole('button', { name: 'Batalkan' }).click();
  });

  test('Settings tab shows visibility and stock options', async ({ page }) => {
    await page.goto('/products');

    await page.getByRole('button', { name: 'Tambah Produk' }).click();
    const modal = page.getByRole('dialog', { name: 'Tambah Produk Baru' });

    await modal.getByRole('tab', { name: 'Pengaturan' }).click();

    await expect(modal.getByText('Visibilitas Sistem Point of Sale')).toBeVisible();
    await expect(modal.getByText('Flag Persediaan Perputaran Cepat')).toBeVisible();
    await expect(modal.getByText('Normal Stock (Dilacak Gudang)').first()).toBeVisible();

    await modal.getByRole('button', { name: 'Batalkan' }).click();
  });

  test('Admin can edit an existing product name', async ({ page }) => {
    await page.goto('/products');

    const originalName = `E2E Edit Original ${Date.now()}`;
    const updatedName = `E2E Edit Updated ${Date.now()}`;

    // Create a product first
    await page.getByRole('button', { name: 'Tambah Produk' }).click();
    let modal = page.getByRole('dialog', { name: 'Tambah Produk Baru' });
    await modal.getByPlaceholder('Contoh: Ikan Layang Spesial').fill(originalName);
    await modal.locator('[data-slot="select-trigger"]').filter({ hasText: /^Pilih Kategori Induk$/ }).click();
    const categoryOptions = page.getByRole('option');
    await categoryOptions.first().click();
    // Verify category was selected
    await expect(modal.locator('[data-slot="select-trigger"]').filter({ hasText: /^Pilih Kategori Induk$/ })).not.toBeVisible();
    await modal.getByRole('tab', { name: 'Varian & Harga' }).click();
    await modal.getByRole('button', { name: 'Tambah Matriks Varian' }).click();
    let variantModal = page.getByRole('dialog', { name: 'Tambah Varian Harga' });
    await variantModal.locator('[data-slot="select-trigger"]').filter({ hasText: /^Pilih Ukuran$/ }).click();
    await page.getByRole('option').first().click();
    await variantModal.locator('[data-slot="select-trigger"]').filter({ hasText: 'Pilih Grade' }).click();
    await page.getByRole('option').first().click();
    await variantModal.getByPlaceholder('Contoh: 15000').fill('50000');
    await variantModal.getByRole('button', { name: 'Simpan Varian' }).click();
    await expect(variantModal).not.toBeVisible();
    await modal.getByRole('button', { name: 'Tambah Produk' }).click();
    await expect(modal).not.toBeVisible({ timeout: 15000 });

    const productRow = page.getByRole('row').filter({ hasText: originalName });
    await expect(productRow).toBeVisible({ timeout: 10000 });

    // Edit the product name
    await productRow.getByRole('button', { name: 'Edit' }).click();
    modal = page.getByRole('dialog', { name: 'Edit Produk' });
    await expect(modal).toBeVisible();

    // Clear and fill new name
    const nameInput = modal.getByPlaceholder('Contoh: Ikan Layang Spesial');
    await nameInput.clear();
    await nameInput.fill(updatedName);

    // Save changes
    await modal.getByRole('button', { name: 'Simpan Perubahan' }).click();
    await expect(modal).not.toBeVisible({ timeout: 10000 });

    // Verify updated name appears
    await expect(page.getByText(updatedName)).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(originalName)).not.toBeVisible();

    // Cleanup: delete the edited product
    const updatedRow = page.getByRole('row').filter({ hasText: updatedName });
    await updatedRow.getByRole('button', { name: 'Hapus Produk' }).click();
    await expect(page.getByRole('heading', { name: 'Hapus Produk' })).toBeVisible();
    await page.getByRole('button', { name: 'Hapus', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Hapus Produk' })).not.toBeVisible({ timeout: 10000 });
    await expect(page.getByText(updatedName)).not.toBeVisible();
  });

  test('Create, archive, restore, and delete a product', async ({ page }) => {
    await page.goto('/products');

    const productName = `E2E Product ${Date.now()}`;

    // --- CREATE ---
    await page.getByRole('button', { name: 'Tambah Produk' }).click();
    const modal = page.getByRole('dialog', { name: 'Tambah Produk Baru' });

    // Fill product name
    await modal.getByPlaceholder('Contoh: Ikan Layang Spesial').fill(productName);

    // Select a category from the dropdown
    await modal.locator('[data-slot="select-trigger"]').filter({ hasText: /^Pilih Kategori Induk$/ }).click();
    await page.getByRole('option').first().click();

    // Go to Variants tab and add a variant
    await modal.getByRole('tab', { name: 'Varian & Harga' }).click();
    await modal.getByRole('button', { name: 'Tambah Matriks Varian' }).click();

    const variantModal = page.getByRole('dialog', { name: 'Tambah Varian Harga' });

    // Select size
    await variantModal.locator('[data-slot="select-trigger"]').filter({ hasText: /^Pilih Ukuran$/ }).click();
    await page.getByRole('option').first().click();

    // Select grade (now enabled after size is selected)
    await variantModal.locator('[data-slot="select-trigger"]').filter({ hasText: 'Pilih Grade' }).click();
    await page.getByRole('option').first().click();

    // Fill base price
    await variantModal.getByPlaceholder('Contoh: 15000').fill('50000');

    // Save variant
    await variantModal.getByRole('button', { name: 'Simpan Varian' }).click();
    await expect(variantModal).not.toBeVisible();

    // Submit the form
    await modal.getByRole('button', { name: 'Tambah Produk' }).click();
    await expect(modal).not.toBeVisible({ timeout: 10000 });

    // Verify product appears in the table
    const productRow = page.getByRole('row').filter({ hasText: productName });
    await expect(productRow).toBeVisible({ timeout: 10000 });

    // --- ARCHIVE ---
    await productRow.getByRole('button', { name: 'Arsipkan' }).click();
    await expect(page.getByText('Arsipkan Produk')).toBeVisible();
    await page.getByRole('button', { name: 'Arsipkan' }).last().click();

    // Wait for archive to complete
    await expect(archiveModal).not.toBeVisible({ timeout: 10000 });

    // Verify product shows archived status
    await expect(productRow.getByText('Diarsipkan')).toBeVisible({ timeout: 10000 });

    // --- RESTORE ---
    await productRow.getByRole('button', { name: 'Pulihkan' }).click();
    await expect(page.getByText('Pulihkan Produk')).toBeVisible();
    await page.getByRole('button', { name: 'Pulihkan' }).last().click();

    await expect(page.getByText('Pulihkan Produk')).not.toBeVisible({ timeout: 10000 });
    await expect(productRow.getByText('Aktif')).toBeVisible({ timeout: 10000 });

    // --- DELETE ---
    await productRow.getByRole('button', { name: 'Hapus Produk' }).click();
    await expect(page.getByRole('heading', { name: 'Hapus Produk' })).toBeVisible();
    await page.getByRole('button', { name: 'Hapus', exact: true }).click();

    await expect(page.getByRole('heading', { name: 'Hapus Produk' })).not.toBeVisible({ timeout: 10000 });
    await expect(page.getByText(productName)).not.toBeVisible();
  });
});
