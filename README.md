💻 SPK Rekomendasi Laptop (Metode TOPSIS)
Sistem Pendukung Keputusan (SPK) untuk memberikan rekomendasi laptop berdasarkan kebutuhan pengguna menggunakan metode TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution).

🚀 Live Demo
🔗 Klik untuk melihat aplikasi live

✨ Fitur Unggulan
✅ Rekomendasi laptop berdasarkan kebutuhan (Gaming, Office, Design, Programming)
✅ Filter berdasarkan budget minimum dan maksimum
✅ Perhitungan otomatis dengan metode TOPSIS
✅ Penyesuaian bobot kriteria
✅ Ranking laptop berdasarkan skor preferensi
✅ Antarmuka responsive dan user-friendly
✅ Terintegrasi dengan Supabase untuk penyimpanan data

🛠️ Teknologi yang Digunakan
Kategori	Teknologi
Frontend	Next.js 15, React 18, TypeScript
Styling	Tailwind CSS
Database	Supabase (PostgreSQL)
Icons	Lucide React
Metode	TOPSIS

⚙️ Cara Instalasi
Clone repository

bash
Copy
Edit
git clone https://github.com/zulian026/spk-laptop-app.git
cd spk-laptop-app
Install dependencies

bash
Copy
Edit
npm install
Atur environment variables

Buat file .env.local dan isi dengan:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
Setup database

Buat project baru di Supabase

Jalankan SQL script database-setup.sql untuk membuat tabel dan data contoh

Jalankan aplikasi lokal

bash
Copy
Edit
npm run dev
Akses di browser: http://localhost:3000

🧱 Struktur Database
📁 laptops
Data spesifikasi laptop, termasuk harga, prosesor, RAM, storage, GPU, dll.

📁 criteria
Daftar kriteria dengan bobot masing-masing yang digunakan dalam perhitungan TOPSIS.

📁 recommendations
Riwayat hasil rekomendasi pengguna.

📊 Metode TOPSIS
Langkah-langkah perhitungan dalam sistem ini:

Normalisasi Matriks
Menggunakan metode vektor normalisasi.

Pembobotan Kriteria
Mengalikan matriks normalisasi dengan bobot masing-masing kriteria.

Solusi Ideal Positif & Negatif
Menentukan nilai terbaik dan terburuk untuk setiap kriteria.

Perhitungan Jarak
Menggunakan jarak Euclidean terhadap solusi ideal.

Skor Preferensi
Menghitung nilai preferensi relatif untuk setiap alternatif.

🧮 Kriteria Penilaian & Bobot
Kriteria	Tipe	Bobot	Penjelasan
Harga	Cost	20%	Semakin murah semakin baik
Processor	Benefit	15%	Semakin tinggi performanya semakin baik
RAM	Benefit	15%	Kapasitas besar lebih baik
Storage	Benefit	10%	Semakin besar semakin baik
GPU	Benefit	10%	Kinerja grafis lebih tinggi lebih baik
Layar	Benefit	8%	Ukuran sesuai kebutuhan desain/visual
Berat	Cost	7%	Semakin ringan semakin baik
Baterai	Benefit	15%	Daya tahan lebih lama lebih baik

🎯 Penyesuaian Bobot Berdasarkan Kebutuhan
Kebutuhan	Prioritas Kriteria
Gaming	GPU, Processor, RAM
Office	Baterai, Berat, Harga
Design	Layar, RAM, Processor, GPU
Programming	Processor, RAM, Storage, Baterai

🤝 Kontribusi
Ingin menyempurnakan sistem ini?
Silakan fork, buat pull request, atau ajukan issue untuk diskusi fitur dan perbaikan!

📄 Lisensi
Proyek ini dilisensikan di bawah MIT License.