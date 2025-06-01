# SPK Rekomendasi Laptop

Sistem Pendukung Keputusan untuk rekomendasi laptop menggunakan metode TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution).

## Fitur

- ✅ Rekomendasi laptop berdasarkan kebutuhan (Gaming, Office, Design, Programming)
- ✅ Filter berdasarkan budget minimum dan maksimum
- ✅ Perhitungan TOPSIS otomatis dengan bobot kriteria yang dapat disesuaikan
- ✅ Ranking laptop berdasarkan skor preferensi
- ✅ Interface yang responsive dan user-friendly
- ✅ Database Supabase untuk penyimpanan data

## Teknologi yang Digunakan

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Metode**: TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution)

## Cara Instalasi

1. Clone repository ini
```bash
git clone <repository-url>
cd spk-rekomendasi-laptop
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
Buat file `.env.local` dan tambahkan:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

4. Setup database
- Buat project baru di Supabase
- Jalankan SQL script yang ada di file `database-setup.sql` untuk membuat tabel dan data sample

5. Jalankan aplikasi
```bash
npm run dev
```

6. Buka browser dan akses `http://localhost:3000`

## Struktur Database

### Tabel `laptops`
Menyimpan data spesifikasi laptop termasuk harga, processor, RAM, storage, GPU, dll.

### Tabel `criteria`
Menyimpan kriteria penilaian dengan bobot masing-masing untuk perhitungan TOPSIS.

### Tabel `recommendations`
Menyimpan riwayat rekomendasi pengguna.

## Metode TOPSIS

Sistem ini menggunakan metode TOPSIS dengan langkah-langkah:

1. **Normalisasi Matriks**: Menggunakan metode vektor normalization
2. **Pembobotan**: Mengalikan matriks ternormalisasi dengan bobot kriteria
3. **Ideal Solutions**: Menentukan solusi ideal positif dan negatif
4. **Perhitungan Jarak**: Menghitung jarak euclidean ke solusi ideal
5. **Skor Preferensi**: Menghitung skor relatif untuk ranking

## Kriteria Penilaian

- **Harga** (Cost, 20%): Semakin rendah semakin baik
- **Processor** (Benefit, 15%): Semakin baik semakin tinggi nilai
- **RAM** (Benefit, 15%): Kapasitas lebih besar lebih baik
- **Storage** (Benefit, 10%): Kapasitas lebih besar lebih baik
- **GPU** (Benefit, 10%): Performa grafis lebih baik
- **Layar** (Benefit, 8%): Ukuran sesuai kebutuhan
- **Berat** (Cost, 7%): Semakin ringan semakin baik
- **Baterai** (Benefit, 15%): Daya tahan lebih lama lebih baik

## Penyesuaian Bobot Berdasarkan Kebutuhan

- **Gaming**: Prioritas pada GPU, Processor, RAM
- **Office**: Prioritas pada Baterai, Berat, Harga
- **Design**: Prioritas pada Layar, RAM, Processor, GPU
- **Programming**: Prioritas pada Processor, RAM, Storage, Baterai

## Kontribusi

Silakan buat pull request atau issue untuk perbaikan dan penambahan fitur.

## Lisensi

MIT License