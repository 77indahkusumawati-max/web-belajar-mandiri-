# Verifikasi Fitur

Registrasi uji berhasil: akun baru dibuat, toast sukses muncul, dashboard terbuka, sapaan berubah menjadi nama pengguna, avatar memakai inisial pengguna, dan email/profil tersimpan di browser. Dashboard juga menampilkan navigasi baru untuk Kuis, Leaderboard, dan Sertifikat.

`pnpm check` dan `pnpm build` berhasil tanpa error TypeScript. Vite hanya menampilkan warning ukuran bundle yang tidak memblokir build.
Mode gelap berhasil aktif dari tombol header dan tetap mempertahankan keterbacaan pada sidebar, header, kartu statistik, dan kartu materi. Dialog Profil pengguna berhasil dibuka; nama tampilan, email, tombol simpan, dan tombol keluar tersedia.
Navigasi ke halaman Kuis berhasil. Halaman menjelaskan bahwa kuis berasal dari materi SPLDV dan menyediakan pembahasan untuk jawaban salah, bersama rute 4 soal: bentuk umum, substitusi, grafik, dan metode penyelesaian.
Pada kuis, jawaban salah dapat dipilih dan tombol `Periksa jawaban` aktif. Tampilan pilihan salah diberi highlight, sementara jawaban benar akan diberi indikator hijau setelah submit; tahap berikutnya menampilkan panel pembahasan sumber materi.
