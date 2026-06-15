# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pos.kasir.spec.ts >> POS Flow >> User can complete a cash payment and see success modal
- Location: tests\pos.kasir.spec.ts:100:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Transaksi Sukses!').or(getByText(/gagal|error|stok|failed/i))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByText('Transaksi Sukses!').or(getByText(/gagal|error|stok|failed/i))

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - heading "Menu" [level=1] [ref=e6]
        - navigation [ref=e7]:
          - button "Dashboard" [ref=e9]:
            - img [ref=e10]
            - generic [ref=e15]: Dashboard
          - button "POS" [ref=e17]:
            - img [ref=e18]
            - generic [ref=e22]: POS
          - button "Riwayat Transaksi" [ref=e24]:
            - img [ref=e25]
            - generic [ref=e29]: Riwayat Transaksi
            - img [ref=e30]
          - button "Pengaturan" [ref=e33]:
            - img [ref=e34]
            - generic [ref=e37]: Pengaturan
        - generic [ref=e38]:
          - generic [ref=e39]:
            - img [ref=e41]
            - generic [ref=e44]:
              - generic [ref=e45]: kasir1
              - generic [ref=e46]: kasir1@lofish.market
          - button "Keluar" [ref=e47]:
            - img
            - generic [ref=e48]: Keluar
      - generic [ref=e49]:
        - banner [ref=e50]:
          - generic [ref=e51]:
            - button [ref=e52]:
              - img [ref=e53]
            - generic [ref=e54]:
              - img [ref=e57]
              - heading "Lofish Mart" [level=1] [ref=e62]
          - generic [ref=e65]:
            - generic:
              - img
            - textbox "Cari produk..." [ref=e66]
          - generic [ref=e67]:
            - generic "Timbangan Serial Terputus" [ref=e68]:
              - generic [ref=e70]: Tidak Ada Perangkat
            - button "Pengaturan Perangkat" [ref=e71]:
              - img [ref=e72]
            - button "Muat Ulang Katalog" [ref=e75]:
              - img [ref=e76]
            - button "1" [ref=e81]:
              - img [ref=e82]
              - generic [ref=e86]: "1"
        - generic [ref=e87]:
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "Semua" [ref=e90]
              - button "Produk" [ref=e91]:
                - img
                - text: Produk
              - button "Layanan" [ref=e92]:
                - img
                - text: Layanan
            - generic [ref=e93]:
              - combobox [ref=e96]:
                - generic: Semua Grade
                - img
              - combobox [ref=e99]:
                - generic: Semua Ukuran
                - img
              - generic [ref=e100]:
                - checkbox "Tersedia Saja" [ref=e101]
                - generic [ref=e102]: Tersedia Saja
          - generic [ref=e104]:
            - generic [ref=e105]:
              - generic [ref=e106]:
                - generic [ref=e107]:
                  - text: "1.00"
                  - img
                - img "Siangi Ikan" [ref=e109]
              - generic [ref=e110]:
                - generic [ref=e111]:
                  - heading "Siangi Ikan" [level=3] [ref=e112]
                  - paragraph [ref=e114]: Rp 2.000
                  - generic [ref=e117]: Layanan
                - generic [ref=e118]: SRV-SIANGI
                - generic [ref=e119]:
                  - button [ref=e120]:
                    - img
                  - generic [ref=e121]: "1.00"
                  - button [ref=e122]:
                    - img
            - generic [ref=e123]:
              - img "Potong Ikan" [ref=e126]
              - generic [ref=e127]:
                - generic [ref=e128]:
                  - heading "Potong Ikan" [level=3] [ref=e129]
                  - paragraph [ref=e131]: Rp 1.500
                  - generic [ref=e134]: Layanan
                - generic [ref=e135]: SRV-POTONG
                - button "Tambah" [ref=e137]:
                  - img
                  - text: Tambah
            - generic [ref=e138]:
              - img "Fillet Ikan" [ref=e141]
              - generic [ref=e142]:
                - generic [ref=e143]:
                  - heading "Fillet Ikan" [level=3] [ref=e144]
                  - paragraph [ref=e146]: Rp 5.000
                  - generic [ref=e149]: Layanan
                - generic [ref=e150]: SRV-FILLET
                - button "Tambah" [ref=e152]:
                  - img
                  - text: Tambah
            - generic [ref=e153]:
              - img "E2E Product 1781438824856" [ref=e156]
              - generic [ref=e157]:
                - generic [ref=e158]:
                  - heading "E2E Product 1781438824856" [level=3] [ref=e159]
                  - generic [ref=e160]:
                    - generic [ref=e161]: BESAR
                    - generic [ref=e162]: GRADE A
                  - paragraph [ref=e164]: Rp 50.000
                  - generic [ref=e167]: 100.00 PCS
                - generic [ref=e168]: 9001A
                - button "Tambah" [ref=e170]:
                  - img
                  - text: Tambah
            - generic [ref=e171]:
              - img "Ikan Bandeng" [ref=e174]
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - heading "Ikan Bandeng" [level=3] [ref=e177]
                  - generic [ref=e178]:
                    - generic [ref=e179]: BESAR
                    - generic [ref=e180]: GRADE A
                  - paragraph [ref=e182]: Rp 35.000
                  - generic [ref=e185]: 100.00 KG
                - generic [ref=e186]: 111A
                - button "Tambah" [ref=e188]:
                  - img
                  - text: Tambah
            - generic [ref=e189]:
              - img "Ikan Bandeng" [ref=e192]
              - generic [ref=e193]:
                - generic [ref=e194]:
                  - heading "Ikan Bandeng" [level=3] [ref=e195]
                  - generic [ref=e196]:
                    - generic [ref=e197]: SEDANG
                    - generic [ref=e198]: GRADE A
                  - paragraph [ref=e200]: Rp 32.000
                  - generic [ref=e203]: 100.00 KG
                - generic [ref=e204]: 111B
                - button "Tambah" [ref=e206]:
                  - img
                  - text: Tambah
            - generic [ref=e207]:
              - img "Ikan Bandeng" [ref=e210]
              - generic [ref=e211]:
                - generic [ref=e212]:
                  - heading "Ikan Bandeng" [level=3] [ref=e213]
                  - generic [ref=e214]:
                    - generic [ref=e215]: KECIL
                    - generic [ref=e216]: GRADE A
                  - paragraph [ref=e218]: Rp 28.000
                  - generic [ref=e221]: 100.00 KG
                - generic [ref=e222]: 111C
                - button "Tambah" [ref=e224]:
                  - img
                  - text: Tambah
            - generic [ref=e225]:
              - img "Ikan Bandeng" [ref=e228]
              - generic [ref=e229]:
                - generic [ref=e230]:
                  - heading "Ikan Bandeng" [level=3] [ref=e231]
                  - generic [ref=e232]:
                    - generic [ref=e233]: BESAR
                    - generic [ref=e234]: GRADE B
                  - paragraph [ref=e236]: Rp 28.000
                  - generic [ref=e239]: 100.00 KG
                - generic [ref=e240]: 112A
                - button "Tambah" [ref=e242]:
                  - img
                  - text: Tambah
            - generic [ref=e243]:
              - img "Ikan Bandeng" [ref=e246]
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - heading "Ikan Bandeng" [level=3] [ref=e249]
                  - generic [ref=e250]:
                    - generic [ref=e251]: SEDANG
                    - generic [ref=e252]: GRADE B
                  - paragraph [ref=e254]: Rp 25.000
                  - generic [ref=e257]: 100.00 KG
                - generic [ref=e258]: 112B
                - button "Tambah" [ref=e260]:
                  - img
                  - text: Tambah
            - generic [ref=e261]:
              - img "Ikan Tongkol" [ref=e264]
              - generic [ref=e265]:
                - generic [ref=e266]:
                  - heading "Ikan Tongkol" [level=3] [ref=e267]
                  - generic [ref=e268]:
                    - generic [ref=e269]: BESAR
                    - generic [ref=e270]: GRADE A
                  - paragraph [ref=e272]: Rp 45.000
                  - generic [ref=e275]: 100.00 KG
                - generic [ref=e276]: 121A
                - button "Tambah" [ref=e278]:
                  - img
                  - text: Tambah
            - generic [ref=e279]:
              - img "Ikan Tongkol" [ref=e282]
              - generic [ref=e283]:
                - generic [ref=e284]:
                  - heading "Ikan Tongkol" [level=3] [ref=e285]
                  - generic [ref=e286]:
                    - generic [ref=e287]: SEDANG
                    - generic [ref=e288]: GRADE A
                  - paragraph [ref=e290]: Rp 42.000
                  - generic [ref=e293]: 100.00 KG
                - generic [ref=e294]: 121B
                - button "Tambah" [ref=e296]:
                  - img
                  - text: Tambah
            - generic [ref=e297]:
              - img "Ikan Tongkol" [ref=e300]
              - generic [ref=e301]:
                - generic [ref=e302]:
                  - heading "Ikan Tongkol" [level=3] [ref=e303]
                  - generic [ref=e304]:
                    - generic [ref=e305]: KECIL
                    - generic [ref=e306]: GRADE A
                  - paragraph [ref=e308]: Rp 38.000
                  - generic [ref=e311]: 100.00 KG
                - generic [ref=e312]: 121C
                - button "Tambah" [ref=e314]:
                  - img
                  - text: Tambah
            - generic [ref=e315]:
              - img "Ikan Tongkol" [ref=e318]
              - generic [ref=e319]:
                - generic [ref=e320]:
                  - heading "Ikan Tongkol" [level=3] [ref=e321]
                  - generic [ref=e322]:
                    - generic [ref=e323]: BESAR
                    - generic [ref=e324]: GRADE B
                  - paragraph [ref=e326]: Rp 38.000
                  - generic [ref=e329]: 100.00 KG
                - generic [ref=e330]: 122A
                - button "Tambah" [ref=e332]:
                  - img
                  - text: Tambah
            - generic [ref=e333]:
              - img "Ikan Tongkol" [ref=e336]
              - generic [ref=e337]:
                - generic [ref=e338]:
                  - heading "Ikan Tongkol" [level=3] [ref=e339]
                  - generic [ref=e340]:
                    - generic [ref=e341]: SEDANG
                    - generic [ref=e342]: GRADE B
                  - paragraph [ref=e344]: Rp 35.000
                  - generic [ref=e347]: 100.00 KG
                - generic [ref=e348]: 122B
                - button "Tambah" [ref=e350]:
                  - img
                  - text: Tambah
            - generic [ref=e351]:
              - img "Ikan Layang" [ref=e354]
              - generic [ref=e355]:
                - generic [ref=e356]:
                  - heading "Ikan Layang" [level=3] [ref=e357]
                  - generic [ref=e358]:
                    - generic [ref=e359]: BESAR
                    - generic [ref=e360]: GRADE A
                  - paragraph [ref=e362]: Rp 35.000
                  - generic [ref=e365]: 100.00 KG
                - generic [ref=e366]: 131A
                - button "Tambah" [ref=e368]:
                  - img
                  - text: Tambah
            - generic [ref=e369]:
              - img "Ikan Layang" [ref=e372]
              - generic [ref=e373]:
                - generic [ref=e374]:
                  - heading "Ikan Layang" [level=3] [ref=e375]
                  - generic [ref=e376]:
                    - generic [ref=e377]: SEDANG
                    - generic [ref=e378]: GRADE A
                  - paragraph [ref=e380]: Rp 32.000
                  - generic [ref=e383]: 100.00 KG
                - generic [ref=e384]: 131B
                - button "Tambah" [ref=e386]:
                  - img
                  - text: Tambah
            - generic [ref=e387]:
              - img "Ikan Layang" [ref=e390]
              - generic [ref=e391]:
                - generic [ref=e392]:
                  - heading "Ikan Layang" [level=3] [ref=e393]
                  - generic [ref=e394]:
                    - generic [ref=e395]: KECIL
                    - generic [ref=e396]: GRADE A
                  - paragraph [ref=e398]: Rp 28.000
                  - generic [ref=e401]: 100.00 KG
                - generic [ref=e402]: 131C
                - button "Tambah" [ref=e404]:
                  - img
                  - text: Tambah
            - generic [ref=e405]:
              - img "Ikan Baronang" [ref=e408]
              - generic [ref=e409]:
                - generic [ref=e410]:
                  - heading "Ikan Baronang" [level=3] [ref=e411]
                  - generic [ref=e412]:
                    - generic [ref=e413]: BESAR
                    - generic [ref=e414]: GRADE A
                  - paragraph [ref=e416]: Rp 65.000
                  - generic [ref=e419]: 100.00 KG
                - generic [ref=e420]: 141A
                - button "Tambah" [ref=e422]:
                  - img
                  - text: Tambah
            - generic [ref=e423]:
              - img "Udang Vaname" [ref=e426]
              - generic [ref=e427]:
                - generic [ref=e428]:
                  - heading "Udang Vaname" [level=3] [ref=e429]
                  - generic [ref=e430]:
                    - generic [ref=e431]: BESAR
                    - generic [ref=e432]: GRADE A
                  - paragraph [ref=e434]: Rp 110.000
                  - generic [ref=e437]: 100.00 KG
                - generic [ref=e438]: 211A
                - button "Tambah" [ref=e440]:
                  - img
                  - text: Tambah
            - generic [ref=e441]:
              - img "Udang Windu" [ref=e444]
              - generic [ref=e445]:
                - generic [ref=e446]:
                  - heading "Udang Windu" [level=3] [ref=e447]
                  - generic [ref=e448]:
                    - generic [ref=e449]: BESAR
                    - generic [ref=e450]: GRADE A
                  - paragraph [ref=e452]: Rp 150.000
                  - generic [ref=e455]: 100.00 KG
                - generic [ref=e456]: 221A
                - button "Tambah" [ref=e458]:
                  - img
                  - text: Tambah
            - generic [ref=e459]:
              - img "Cumi Tube" [ref=e462]
              - generic [ref=e463]:
                - generic [ref=e464]:
                  - heading "Cumi Tube" [level=3] [ref=e465]
                  - generic [ref=e466]:
                    - generic [ref=e467]: BESAR
                    - generic [ref=e468]: GRADE A
                  - paragraph [ref=e470]: Rp 85.000
                  - generic [ref=e473]: 100.00 KG
                - generic [ref=e474]: 311A
                - button "Tambah" [ref=e476]:
                  - img
                  - text: Tambah
            - generic [ref=e477]:
              - img "Cumi Ring" [ref=e480]
              - generic [ref=e481]:
                - generic [ref=e482]:
                  - heading "Cumi Ring" [level=3] [ref=e483]
                  - generic [ref=e484]:
                    - generic [ref=e485]: BESAR
                    - generic [ref=e486]: GRADE A
                  - paragraph [ref=e488]: Rp 95.000
                  - generic [ref=e491]: 100.00 KG
                - generic [ref=e492]: 321A
                - button "Tambah" [ref=e494]:
                  - img
                  - text: Tambah
      - generic [ref=e497]:
        - generic [ref=e498]:
          - heading "Pesanan" [level=2] [ref=e499]
          - button "Reset" [ref=e500]:
            - img
            - text: Reset
        - generic [ref=e502]:
          - generic [ref=e503]:
            - img [ref=e504]
            - heading "Layanan" [level=3] [ref=e507]
            - generic [ref=e508]: 1 item
          - generic [ref=e509]:
            - img "Siangi Ikan" [ref=e511]
            - generic [ref=e512]:
              - generic [ref=e513]:
                - generic [ref=e514]:
                  - heading "Siangi Ikan" [level=4] [ref=e515]
                  - generic [ref=e516]:
                    - generic [ref=e517]: 1 kg
                    - generic [ref=e518]:
                      - img [ref=e519]
                      - text: Manual
                  - generic [ref=e522]: Rp 2.000
                - paragraph [ref=e524]: Rp 2.000
              - generic [ref=e526]:
                - generic [ref=e527]:
                  - button [ref=e528]:
                    - img
                  - generic [ref=e529]: "1.00"
                  - button [ref=e530]:
                    - img
                - button [ref=e531]:
                  - img
        - generic [ref=e532]:
          - generic [ref=e533]:
            - combobox [ref=e534]:
              - text: Pilih Nama Member...
              - img
            - textbox "Catatan" [ref=e537]
            - 'textbox "Kode Voucher (Coba: ITEM10)" [ref=e541]'
          - generic [ref=e542]:
            - generic [ref=e543]:
              - generic [ref=e544]: Subtotal
              - generic [ref=e545]: Rp 2.000
            - generic [ref=e546]:
              - generic [ref=e547]: Pajak
              - generic [ref=e548]: Rp 0
          - generic [ref=e549]:
            - generic [ref=e550]: Total
            - generic [ref=e551]: Rp 2.000
          - button "Proses Pembayaran" [ref=e552]
    - region "Notifications alt+T"
    - generic:
      - contentinfo:
        - button "Open TanStack Router Devtools" [ref=e553] [cursor=pointer]:
          - generic [ref=e554]:
            - img [ref=e556]
            - img [ref=e591]
          - generic [ref=e625]: "-"
          - generic [ref=e626]: TanStack Router
  - generic [ref=e629]:
    - generic [ref=e630]:
      - generic [ref=e632]:
        - img [ref=e633]
        - heading "Pembayaran" [level=2] [ref=e636]
      - generic [ref=e637]:
        - text: Total Tagihan
        - heading "Rp 2.000" [level=3] [ref=e638]
      - generic [ref=e639]:
        - generic [ref=e640]: Metode Pembayaran
        - generic [ref=e641]:
          - button "Tunai" [ref=e642]:
            - img
            - text: Tunai
          - button "QRIS" [ref=e643]:
            - img
            - text: QRIS
      - generic [ref=e645]:
        - generic [ref=e646]:
          - paragraph [ref=e647]: Uang Cepat
          - generic [ref=e648]:
            - button "1.000" [ref=e649]
            - button "2.000" [ref=e650]
            - button "5.000" [ref=e651]
            - button "10.000" [ref=e652]
            - button "20.000" [ref=e653]
            - button "50.000" [ref=e654]
            - button "100.000" [ref=e655]
            - button "Uang Pas" [ref=e656]
        - generic [ref=e657]:
          - generic [ref=e658]: Jumlah Tunai
          - generic [ref=e660]:
            - generic [ref=e662]: Rp
            - textbox "0" [ref=e663]: "2.000"
      - generic [ref=e664]:
        - button "Batal" [ref=e665]
        - button "Bayar" [active] [ref=e666]
    - generic [ref=e667]:
      - generic [ref=e668]:
        - heading "Rincian Pesanan" [level=3] [ref=e669]
        - button [ref=e670]:
          - img
      - generic [ref=e672]:
        - generic [ref=e673]:
          - generic [ref=e674]: Siangi Ikan
          - generic [ref=e675]: Rp 2.000
        - generic [ref=e677]:
          - generic [ref=e678]: 1 x Rp 2.000
          - generic [ref=e679]: 1kg
          - generic [ref=e680]:
            - img
            - text: Manual
      - generic [ref=e681]:
        - generic [ref=e682]:
          - generic [ref=e683]: SUBTOTAL
          - generic [ref=e684]: Rp 2.000
        - generic [ref=e685]:
          - generic [ref=e686]: PAJAK
          - generic [ref=e687]: Rp 0
        - generic [ref=e688]:
          - generic [ref=e689]: TOTAL DISKON ITEM
          - generic [ref=e690]: "-"
        - generic [ref=e691]:
          - generic [ref=e693]: DISKON VOUCHER
          - generic [ref=e694]: "-"
        - generic [ref=e696]:
          - generic [ref=e697]: TOTAL
          - generic [ref=e698]: Rp 2.000
        - generic [ref=e699]:
          - generic [ref=e700]: UANG
          - generic [ref=e701]: Rp 2.000
        - generic [ref=e702]:
          - generic [ref=e703]: KEMBALIAN
          - generic [ref=e704]: Rp 0
```

# Test source

```ts
  36  |     // Wait for loading
  37  |     await expect(page.getByText('Memuat produk...')).not.toBeVisible();
  38  | 
  39  |     // Click "Produk" filter tab
  40  |     await page.getByRole('button', { name: 'Produk' }).click();
  41  | 
  42  |     // Click "Layanan" filter tab
  43  |     await page.getByRole('button', { name: 'Layanan' }).click();
  44  | 
  45  |     // Click "Semua" to go back to all
  46  |     await page.getByRole('button', { name: 'Semua' }).click();
  47  | 
  48  |     // Grade and size filters should be visible
  49  |     await expect(page.getByText('Semua Grade').first()).toBeVisible();
  50  |     await expect(page.getByText('Semua Ukuran').first()).toBeVisible();
  51  | 
  52  |     // Availability toggle should be visible
  53  |     await expect(page.getByText('Tersedia Saja')).toBeVisible();
  54  |   });
  55  | 
  56  |   test('User can add a product to cart and see it in the sidebar', async ({ page }) => {
  57  |     await page.goto('/pos');
  58  | 
  59  |     // Wait for products to load
  60  |     await expect(page.getByText('Memuat produk...')).not.toBeVisible({ timeout: 15000 });
  61  | 
  62  |     // Find a "Tambah" button to add first available product to cart
  63  |     const addButton = page.getByRole('button', { name: 'Tambah' }).first();
  64  |     const addBtnCount = await addButton.count();
  65  |     test.skip(addBtnCount === 0, 'No products available in test data to add to cart');
  66  | 
  67  |     await addButton.click();
  68  | 
  69  |     // "Belum ada pesanan" should disappear — cart now has items
  70  |     await expect(page.getByText('Belum ada pesanan')).not.toBeVisible({ timeout: 5000 });
  71  | 
  72  |     // The cart sidebar should show the "Produk" section with item count
  73  |     await expect(page.getByText('Produk').first()).toBeVisible();
  74  | 
  75  |     // Verify the total section is visible in the cart footer
  76  |     await expect(page.getByText('Proses Pembayaran')).toBeVisible();
  77  |   });
  78  | 
  79  |   test('User can open payment modal from cart', async ({ page }) => {
  80  |     await page.goto('/pos');
  81  | 
  82  |     // Wait for products to load
  83  |     await expect(page.getByText('Memuat produk...')).not.toBeVisible({ timeout: 15000 });
  84  | 
  85  |     // Add a product to cart
  86  |     const addButton = page.getByRole('button', { name: 'Tambah' }).first();
  87  |     const addBtnCount = await addButton.count();
  88  |     test.skip(addBtnCount === 0, 'No products available to complete transaction');
  89  | 
  90  |     await addButton.click();
  91  |     await expect(page.getByText('Belum ada pesanan')).not.toBeVisible({ timeout: 5000 });
  92  | 
  93  |     // Click the "Proses Pembayaran" button in the cart footer
  94  |     await page.getByRole('button', { name: 'Proses Pembayaran' }).click();
  95  | 
  96  |     // Payment modal should appear with title "Pembayaran"
  97  |     await expect(page.getByText('Pembayaran').first()).toBeVisible({ timeout: 5000 });
  98  |   });
  99  | 
  100 |   test('User can complete a cash payment and see success modal', async ({ page }) => {
  101 |     await page.goto('/pos');
  102 | 
  103 |     // Wait for products to load
  104 |     await expect(page.getByText('Memuat produk...')).not.toBeVisible({ timeout: 15000 });
  105 | 
  106 |     // Add a product to cart
  107 |     const addButton = page.getByRole('button', { name: 'Tambah' }).first();
  108 |     const addBtnCount = await addButton.count();
  109 |     test.skip(addBtnCount === 0, 'No products available to complete transaction');
  110 | 
  111 |     await addButton.click();
  112 |     await expect(page.getByText('Belum ada pesanan')).not.toBeVisible({ timeout: 5000 });
  113 | 
  114 |     // Open payment modal
  115 |     await page.getByRole('button', { name: 'Proses Pembayaran' }).click();
  116 |     // The modal uses a custom <Modal> component (not role="dialog"), locate by heading text
  117 |     await expect(page.getByText('Pembayaran').first()).toBeVisible({ timeout: 5000 });
  118 |     const paymentModal = page.locator('text=Pembayaran').first();
  119 | 
  120 |     // Click "Uang Pas" button to auto-fill exact amount
  121 |     const uangPasButton = page.getByRole('button', { name: 'Uang Pas' });
  122 |     if (await uangPasButton.isVisible()) {
  123 |       await uangPasButton.click();
  124 |     }
  125 | 
  126 |     // Click "Bayar" to submit payment
  127 |     const payButton = page.getByRole('button', { name: 'Bayar' }).last();
  128 |     if (await payButton.isVisible()) {
  129 |       await payButton.click();
  130 | 
  131 |       // Wait for success modal to appear
  132 |       // Wait for result — either success modal (payment processed) or
  133 |       // error toast (test data may not have stock records)
  134 |       await expect(
  135 |         page.getByText('Transaksi Sukses!').or(page.getByText(/gagal|error|stok|failed/i))
> 136 |       ).toBeVisible({ timeout: 15000 });
      |         ^ Error: expect(locator).toBeVisible() failed
  137 |     }
  138 |   });
  139 | });
  140 | 
```