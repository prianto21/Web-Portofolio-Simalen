import { MEDIA_ASSETS } from '../config/brand';

export interface ProductSpec {
  label: string;
  value: string;
  isPlaceholder?: boolean;
}

export const PRODUCT_SPECS: ProductSpec[] = [
  { label: 'Berat Bersih', value: '10 gram' },
  { label: 'Komposisi', value: '100% Andaliman' },
  { label: 'Bentuk', value: 'Bubuk Kering' },
  { label: 'Asal Bahan', value: 'Dolok Sanggul, Humbang Hasundutan, Sumatera Utara' },
  { label: 'Bahan Tambahan', value: 'Tanpa pengawet tambahan (sesuai keterangan kemasan)' },
  {
    label: 'Harga',
    value: 'Hubungi WhatsApp resmi untuk informasi harga',
    isPlaceholder: true,
  },
];

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'leaf' | 'wind' | 'mountain' | 'utensils';
}

export const WHY_CHOOSE_FEATURES: FeatureItem[] = [
  {
    id: 'pure',
    title: '100% Andaliman Asli',
    description:
      'Menggunakan Andaliman sebagai komposisi utama tanpa campuran rempah lainnya.',
    iconName: 'leaf',
  },
  {
    id: 'aroma',
    title: 'Aroma Citrus Khas',
    description:
      'Memiliki aroma segar dan karakter rasa khas yang membuat masakan semakin istimewa.',
    iconName: 'wind',
  },
  {
    id: 'origin',
    title: 'Berasal dari Tanah Batak',
    description:
      'Mengangkat kekayaan rempah lokal dari kawasan Dolok Sanggul, Humbang Hasundutan.',
    iconName: 'mountain',
  },
  {
    id: 'practical',
    title: 'Praktis dan Mudah Digunakan',
    description:
      'Hadir dalam bentuk bubuk kering sehingga mudah dicampurkan ke berbagai hidangan.',
    iconName: 'utensils',
  },
];

export interface UsageCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const USAGE_CARDS: UsageCardItem[] = [
  {
    id: 'ikan',
    title: 'Masakan Ikan',
    description:
      'Tambahkan Andaliman ke dalam bumbu marinasi atau saat memasak ikan untuk menghadirkan karakter rasa khas Batak.',
    image: MEDIA_ASSETS.dishArsik,
    imageAlt: 'Hidangan ikan berbumbu khas Batak dengan Andaliman',
  },
  {
    id: 'sambal',
    title: 'Sambal Andaliman',
    description:
      'Campurkan ke sambal untuk memberikan aroma citrus dan sensasi khas Andaliman.',
    image: MEDIA_ASSETS.dishSambal,
    imageAlt: 'Sambal Andaliman segar di atas cobek batu tradisional',
  },
  {
    id: 'daging',
    title: 'Olahan Daging',
    description:
      'Gunakan sebagai campuran bumbu marinasi atau bumbu masakan daging.',
    image: MEDIA_ASSETS.dishDaging,
    imageAlt: 'Olahan daging berbumbu rempah Andaliman panggang',
  },
  {
    id: 'kuah',
    title: 'Sup dan Masakan Berkuah',
    description:
      'Tambahkan sedikit bubuk Andaliman untuk memperkaya aroma dan karakter kuah.',
    image: MEDIA_ASSETS.dishNaniura,
    imageAlt: 'Sajian kuliner tradisional Nusantara dengan bumbu kuning aromatik',
  },
];

export interface RecipeItem {
  id: string;
  name: string;
  category: 'Hidangan Tradisional Batak' | 'Inspirasi Kreasi Modern';
  categoryNote: string;
  shortDescription: string;
  estimatedPrepTime: string; // Editable placeholder field
  servings: string;
  simalenDosage: string;
  image: string;
  imageAlt: string;
  ingredients: string[];
  steps: string[];
  culinaryNote: string;
}

export const RECIPES: RecipeItem[] = [
  {
    id: 'arsik-ikan-mas',
    name: 'Arsik Ikan Mas',
    category: 'Hidangan Tradisional Batak',
    categoryNote: 'Adaptasi praktis hidangan klasik masyarakat Batak dengan SIMALEN bubuk.',
    shortDescription:
      'Ikan mas yang dimasak perlahan bersama kunyit, kecombrang, serai, dan sentuhan aromatik Andaliman khas Tanah Batak.',
    estimatedPrepTime: '± 45 menit (dapat disesuaikan)',
    servings: '3–4 porsi',
    simalenDosage: '1/2 – 1 sendok teh SIMALEN Andaliman Bubuk Kering',
    image: MEDIA_ASSETS.dishArsik,
    imageAlt: 'Arsik Ikan Mas disajikan dengan kuah bumbu kuning dan kecombrang',
    ingredients: [
      '1 ekor ikan mas segar (bersihkan, kerat bagian badan)',
      '1/2 – 1 sdt SIMALEN Andaliman Bubuk Kering',
      '6 butir bawang merah & 4 siung bawang putih',
      '3 cm kunyit, 2 cm jahe, dan 2 cm lengkuas',
      '2 batang serai (memarkan) & 3 lembar daun jeruk',
      '1 buah bunga kecombrang (belah memanjang) & kacang panjang secukupnya',
      'Asam cikala atau perasan jeruk nipis serta garam secukupnya',
    ],
    steps: [
      'Haluskan bawang merah, bawang putih, kunyit, jahe, dan kemiri hingga menjadi pasta bumbu dasar.',
      'Tata serai dan kacang panjang di dasar wajan, letakkan ikan mas di atasnya, lalu balurkan bumbu halus secara merata.',
      'Tuangkan air secukupnya hingga ikan terendam sebagian, tambahkan kecombrang dan daun jeruk, lalu masak dengan api kecil hingga kuah menyusut.',
      'Menjelang kuah mengental, taburkan SIMALEN Andaliman Bubuk Kering secara merata agar aroma citrus segarnya terjaga. Koreksi rasa dan sajikan hangat.',
    ],
    culinaryNote:
      'Penambahan bubuk Andaliman menjelang akhir proses memasak membantu menjaga aroma volatil citrus tetap segar.',
  },
  {
    id: 'sambal-andaliman',
    name: 'Sambal Andaliman',
    category: 'Hidangan Tradisional Batak',
    categoryNote: 'Pelengkap sambal khas Sumatera Utara yang mudah disiapkan di dapur rumah.',
    shortDescription:
      'Sambal segar berpadu cabai rawit hijau, bawang, dan aroma citrus Andaliman yang menggugah selera makan.',
    estimatedPrepTime: '± 15 menit (dapat disesuaikan)',
    servings: '1 mangkuk kecil',
    simalenDosage: '1/2 sendok teh SIMALEN Andaliman Bubuk Kering',
    image: MEDIA_ASSETS.dishSambal,
    imageAlt: 'Sambal Andaliman diulek di atas cobek batu tradisional',
    ingredients: [
      '12 buah cabai rawit hijau atau cabai hijau keriting (sesuai tingkat pedas)',
      '5 butir bawang merah & 2 siung bawang putih',
      '1/2 sdt SIMALEN Andaliman Bubuk Kering',
      '2 butir kemiri sangrai (opsional untuk tekstur lembut)',
      '1 buah jeruk nipis (ambil air perasannya)',
      'Garam dan sedikit gula sesuai selera',
    ],
    steps: [
      'Kukus atau tumis sebentar cabai, bawang merah, dan bawang putih hingga layu untuk melunakkan rasa mentah.',
      'Ulek bahan di atas cobek batu hingga tekstur kasar sesuai selera, lalu bumbui dengan garam.',
      'Tambahkan SIMALEN Andaliman Bubuk Kering dan aduk rata bersama sambal yang masih hangat.',
      'Beri perasan air jeruk nipis segar tepat sebelum disajikan sebagai pendamping ikan bakar atau lauk pauk.',
    ],
    culinaryNote:
      'Mulailah dari takaran kecil SIMALEN bubuk, kemudian tambah sedikit demi sedikit sesuai tingkat sensasi getir yang disukai.',
  },
  {
    id: 'naniura',
    name: 'Naniura',
    category: 'Hidangan Tradisional Batak',
    categoryNote: 'Terinspirasi dari sajian tradisional Batak berbasis marinasi jeruk dan rempah.',
    shortDescription:
      'Irisan daging ikan tanpa dimasak api yang dimarinasi sari jeruk asam, kunyit sangrai, dan bumbu Andaliman yang harum.',
    estimatedPrepTime: '± 60 menit (termasuk waktu marinasi, dapat disesuaikan)',
    servings: '2–3 porsi',
    simalenDosage: '1/2 sendok teh SIMALEN Andaliman Bubuk Kering',
    image: MEDIA_ASSETS.dishNaniura,
    imageAlt: 'Naniura dengan balutan bumbu kuning kunyit dan irisan cabai',
    ingredients: [
      '400 gr fillet ikan air tawar sangat segar (pastikan kelayakan konsumsi mentah)',
      '4–5 buah jeruk jungga atau jeruk nipis segar (ambil airnya)',
      '1/2 sdt SIMALEN Andaliman Bubuk Kering',
      '3 cm kunyit bakar, 4 butir kemiri sangrai, 5 butir bawang merah bakar',
      '2 siung bawang putih & irisan cabai merah untuk pelengkap',
      'Garam secukupnya',
    ],
    steps: [
      'Rendam irisan fillet ikan dalam perasan air jeruk dan sedikit garam selama ± 30–45 menit hingga warna daging ikan berubah pucat dan matang oleh keasaman alami.',
      'Tiriskan cairan marinasi, lalu haluskan kunyit bakar, kemiri sangrai, bawang merah bakar, dan bawang putih.',
      'Campurkan SIMALEN Andaliman Bubuk Kering ke dalam bumbu halus yang sudah diberi sedikit garam.',
      'Balurkan bumbu ke seluruh permukaan ikan secara merata dan taburi irisan cabai serta bawang merah sebelum disajikan.',
    ],
    culinaryNote:
      'Catatan penting: Gunakan ikan yang benar-benar segar dan ditangani secara higienis karena sajian ini tidak melalui pemasakan panas.',
  },
  {
    id: 'olahan-daging-andaliman',
    name: 'Olahan Daging dengan Andaliman',
    category: 'Inspirasi Kreasi Modern',
    categoryNote: 'Kreasi masakan modern rumahan memadukan bumbu panggang/tumis dengan SIMALEN.',
    shortDescription:
      'Potongan daging sapi berbumbu kecap rempah, bawang goreng, dan bubuk Andaliman untuk sentuhan rasa aromatik modern.',
    estimatedPrepTime: '± 35 menit (dapat disesuaikan)',
    servings: '2–3 porsi',
    simalenDosage: '1/2 – 3/4 sendok teh SIMALEN Andaliman Bubuk Kering',
    image: MEDIA_ASSETS.dishDaging,
    imageAlt: 'Olahan daging sapi tumis panggang dengan glaze rempah Andaliman',
    ingredients: [
      '350 gr daging sapi has dalam (iris tipis melawan serat)',
      '1/2 – 3/4 sdt SIMALEN Andaliman Bubuk Kering',
      '3 siung bawang putih cincang & 4 butir bawang merah iris',
      '2 sdm kecap manis atau saus tiram & 1 sdm minyak wijen/minyak goreng',
      '2 lembar daun jeruk (iris sangat halus) & irisan cabai sesuai selera',
      'Garam, lada putih secukupnya, dan perasan jeruk nipis saat penyajian',
    ],
    steps: [
      'Marinasi irisan daging dengan bawang putih cincang, kecap manis, garam, dan setengah bagian SIMALEN Andaliman Bubuk Kering selama 15 menit.',
      'Panaskan wajan dengan sedikit minyak, tumis bawang merah dan irisan daun jeruk hingga harum.',
      'Masukkan daging berbumbu, masak dengan api sedang-besar hingga matang dan bumbu mengkaramelisasi.',
      'Matikan api, taburkan sisa SIMALEN Andaliman Bubuk Kering, aduk cepat, lalu sajikan dengan taburan bawang goreng dan jeruk nipis.',
    ],
    culinaryNote:
      'Inspirasi kreasi modern ini membuktikan bahwa bubuk Andaliman juga serasi untuk tumisan dan hidangan daging harian.',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'apa-itu-andaliman',
    question: 'Apa itu Andaliman?',
    answer:
      'Andaliman adalah rempah buah beri aromatik khas dari wilayah Sumatera Utara yang menjadi unsur penting dalam berbagai masakan tradisional masyarakat Batak.',
  },
  {
    id: 'beda-lada',
    question: 'Apa yang membuat Andaliman berbeda dari lada biasa?',
    answer:
      'Berbeda dengan lada hitam atau lada putih yang dominan memberi rasa hangat pedas, Andaliman memiliki aroma citrus segar menyerupai jeruk dan serai serta menghadirkan sensasi rasa unik di lidah.',
  },
  {
    id: 'karakter-rasa',
    question: 'Bagaimana karakter rasa Andaliman?',
    answer:
      'Andaliman dikenal dengan aroma citrus yang kuat dan segar, dipadukan dengan rasa sedikit getir dan sensasi kebas ringan (menggelitik) yang khas di lidah.',
  },
  {
    id: 'cara-pakai',
    question: 'Bagaimana cara menggunakan Andaliman bubuk?',
    answer:
      'Anda dapat langsung menaburkan atau mencampurkan SIMALEN Andaliman Bubuk Kering ke dalam bumbu marinasi ikan maupun daging, sambal, kuah sup, atau tumisan. Mulailah dengan sejumput kecil lalu sesuaikan dengan selera.',
  },
  {
    id: 'campuran-lain',
    question: 'Apakah SIMALEN menggunakan campuran rempah lain?',
    answer:
      'Tidak. Komposisi SIMALEN Andaliman Bubuk Kering adalah 100% Andaliman bubuk tanpa campuran rempah lain dan tanpa pengawet tambahan sesuai keterangan pada kemasan.',
  },
  {
    id: 'penyimpanan',
    question: 'Bagaimana cara menyimpan produk?',
    answer:
      'Pastikan kemasan tertutup rapat setelah digunakan dan simpan di tempat sejuk serta kering, jauh dari sinar matahari langsung.',
  },
  {
    id: 'berat-bersih',
    question: 'Berapa berat bersih produk?',
    answer: 'Setiap kemasan SIMALEN Andaliman Bubuk Kering memiliki berat bersih 10 gram.',
  },
  {
    id: 'cara-pesan',
    question: 'Bagaimana cara memesan SIMALEN?',
    answer:
      'Anda dapat memesan langsung melalui tombol "Pesan Sekarang" atau "Pesan Produk" yang terhubung ke WhatsApp resmi SIMALEN untuk mendapatkan informasi harga dan pengiriman.',
  },
];
