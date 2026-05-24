# EO Wedding Astro

Website wedding organizer berbasis Astro dengan konten portofolio, testimoni, dan paket layanan yang bisa dikelola melalui Decap CMS.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Setelah server berjalan, buka alamat yang muncul di terminal. Biasanya:

```bash
http://localhost:4321
```

## Struktur Konten

- `src/content/portofolio` berisi cerita portofolio acara.
- `src/content/testimoni` berisi testimoni pasangan.
- `src/content/paket` berisi paket layanan.
- `public/images` dipakai untuk menyimpan gambar yang diunggah dari CMS.
- `public/admin` berisi dashboard Decap CMS.

## Dashboard CMS

Dashboard CMS dapat dibuka melalui:

```bash
/admin
```

Untuk produksi, aktifkan Git Gateway dan Identity pada Netlify atau sesuaikan `public/admin/config.yml` dengan backend CMS yang dipakai.

## Mengubah Nomor WhatsApp

Nomor WhatsApp ada di:

```bash
src/components/WhatsAppButton.astro
```

Ganti nomor pada URL `https://wa.me/6281234567890` dengan nomor bisnis klien.
