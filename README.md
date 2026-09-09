# Belajar Mandiri

Website pendamping belajar dengan materi bertingkat, peta bab, video pembelajaran, buku digital, kuis, flashcard, AI Belajar, riwayat AI, progres, dan upload materi.

Project ini masih **dalam tahap pengembangan**. Perubahan berikutnya dapat dilakukan langsung di VS Code lalu dikirim ke GitHub.

## Persyaratan Windows

Install aplikasi berikut terlebih dahulu:

1. **Node.js LTS** dari <https://nodejs.org/>.
2. **Git** dari <https://git-scm.com/download/win>.
3. **Visual Studio Code** dari <https://code.visualstudio.com/>.

Setelah instalasi selesai, tutup lalu buka kembali PowerShell agar perintah `node`, `npm`, dan `git` terbaca.

## Membuka project di VS Code

1. Download project dari GitHub melalui tombol **Code → Download ZIP**, lalu ekstrak ZIP.
2. Pastikan folder yang dibuka adalah folder yang berisi `package.json`, `client`, `server`, dan `vite.config.ts`.
3. Di VS Code pilih **File → Open Folder**, lalu pilih folder `belajar-mandiri-indah`.
4. Buka terminal VS Code melalui **Terminal → New Terminal**.
5. Pastikan terminal berada di folder project. Jalankan:

```powershell
Get-ChildItem package.json
```

Jika `package.json` muncul, berarti folder sudah benar. Jangan menjalankan `cd .\belajar-mandiri-indah` lagi jika prompt terminal sudah berakhir dengan `...\belajar-mandiri-indah>`.

## Instalasi dependency

Di terminal PowerShell VS Code jalankan satu kali:

```powershell
corepack enable
corepack prepare pnpm@10.4.1 --activate
pnpm install
```

Jika `corepack` tidak tersedia, gunakan alternatif:

```powershell
npm install --global pnpm
pnpm install
```

## Menjalankan website secara lokal

Untuk mode pengembangan dengan perubahan otomatis:

```powershell
pnpm dev
```

Buka alamat yang tampil di terminal, biasanya:

```text
http://localhost:5173
```

Biarkan terminal tetap terbuka. Untuk menghentikan server tekan `Ctrl + C`.

## Memeriksa sebelum presentasi

```powershell
pnpm check
pnpm build
```

`pnpm check` memeriksa TypeScript. `pnpm build` memastikan website dapat dibuat untuk produksi.

Untuk melihat hasil build produksi:

```powershell
pnpm start
```

Kemudian buka `http://localhost:3000`.

## Alur pengembangan sehari-hari

1. Buka folder project di VS Code.
2. Jalankan `pnpm dev`.
3. Ubah file frontend, terutama `client/src/pages/Home.tsx` dan `client/src/index.css`.
4. Simpan file dan lihat perubahan di browser.
5. Jalankan `pnpm check`.
6. Jalankan `pnpm build` sebelum mengirim perubahan.
7. Lihat perubahan dengan:

```powershell
git status
git diff
```

## Mengirim perubahan ke GitHub

Jika repository sudah tersambung, gunakan:

```powershell
git add .
git commit -m "update fitur belajar mandiri"
git push
```

Setiap kali ada pengembangan baru, ulangi tiga perintah tersebut. Tidak perlu membuat repository baru.

Jika baru pertama kali mengatur identitas Git di komputer Windows:

```powershell
git config --global user.name "Nama Kamu"
git config --global user.email "emailkamu@example.com"
```

## Struktur folder utama

```text
belajar-mandiri-indah/
├── client/
│   ├── public/          # manifest, service worker, aset publik kecil
│   └── src/
│       ├── components/  # komponen UI
│       ├── contexts/    # theme dan konteks aplikasi
│       ├── pages/       # halaman utama, termasuk Home.tsx
│       ├── hooks/       # custom hooks
│       ├── lib/         # helper
│       ├── App.tsx      # root aplikasi
│       └── index.css    # style global
├── server/              # server produksi bawaan project
├── shared/              # konstanta bersama
├── package.json         # script dan dependency
├── pnpm-lock.yaml       # versi dependency yang dikunci
├── vite.config.ts       # konfigurasi Vite
└── README.md            # panduan ini
```

## Catatan penting

- Jangan menghapus `pnpm-lock.yaml`; file ini membantu memastikan hasil instalasi konsisten.
- Jangan mengunggah `node_modules`, `dist`, atau file `.env` ke GitHub. Folder dan file tersebut sudah masuk `.gitignore`.
- Untuk perubahan website, fokus pada folder `client/`.
- Data progres, profil, riwayat AI, dan materi upload pada versi frontend ini tersimpan di browser melalui `localStorage`. Jika browser atau storage dibersihkan, data lokal dapat hilang.
- Tautan video YouTube dan buku SIBI memerlukan koneksi internet.
- Untuk mengubah fitur di kemudian hari, cukup ubah source di VS Code, jalankan `pnpm check`, `pnpm build`, lalu `git add .`, `git commit`, dan `git push`.

## Troubleshooting singkat

### `pnpm is not recognized`

Tutup dan buka kembali VS Code. Jika masih muncul, jalankan `npm install --global pnpm`, lalu buka terminal baru.

### `package.json cannot be found`

Terminal sedang berada di folder yang salah. Gunakan **File → Open Folder** dan pilih folder project yang langsung berisi `package.json`.

### Port sedang dipakai

Jalankan:

```powershell
pnpm dev -- --port 5174
```

Lalu buka `http://localhost:5174`.

### Gambar atau aset tidak muncul

Pastikan menjalankan website dari root project dan jangan memindahkan isi folder `client/public` secara terpisah dari source project.

### Perubahan belum terlihat

Refresh browser dengan `Ctrl + Shift + R`, pastikan `pnpm dev` masih berjalan, lalu periksa tab **Problems** di VS Code.

## Repository

Repository utama project ini adalah repository GitHub yang diberikan untuk project. Gunakan branch `main` untuk versi yang sedang dikembangkan, atau buat branch baru untuk eksperimen besar:

```powershell
git checkout -b fitur-baru
```

Setelah fitur stabil, commit dan push branch tersebut ke GitHub.
