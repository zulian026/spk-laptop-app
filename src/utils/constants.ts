export const KEBUTUHAN_OPTIONS = [
  { value: 'office', label: 'Perkantoran & Bisnis', description: 'Untuk pekerjaan sehari-hari, dokumen, email, dan presentasi' },
  { value: 'gaming', label: 'Gaming & Entertainment', description: 'Untuk bermain game dan hiburan multimedia' },
  { value: 'design', label: 'Design & Multimedia', description: 'Untuk desain grafis, editing video, dan kreativitas' },
  { value: 'programming', label: 'Programming & Development', description: 'Untuk pengembangan software dan coding' }
] as const

export const BUDGET_PRESETS = [
  { min: 3000000, max: 7000000, label: 'Budget Terbatas (3-7 Juta)' },
  { min: 7000000, max: 12000000, label: 'Budget Menengah (7-12 Juta)' },
  { min: 12000000, max: 20000000, label: 'Budget Premium (12-20 Juta)' },
  { min: 20000000, max: 50000000, label: 'Budget High-end (20+ Juta)' }
] as const

export const CRITERIA_DESCRIPTIONS = {
  harga: 'Harga laptop dalam rupiah - semakin murah semakin baik',
  processor: 'Performa CPU untuk komputasi - semakin cepat semakin baik',
  ram: 'Kapasitas memori untuk multitasking - semakin besar semakin baik',
  storage: 'Kapasitas penyimpanan data - semakin besar semakin baik',
  gpu: 'Performa grafis untuk gaming dan design - semakin baik semakin tinggi nilai',
  layar: 'Ukuran layar dalam inch - disesuaikan dengan kebutuhan',
  berat: 'Berat laptop dalam kilogram - semakin ringan semakin portabel',
  battery: 'Daya tahan baterai dalam jam - semakin lama semakin baik'
} as const