# Task Tracker

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

## Task Tracker CLI

Task Tracker CLI adalahPelacak tugas adalah proyek yang digunakan untuk melacak dan mengelola tugas Anda. Dalam tugas ini, Anda akan membangun antarmuka baris perintah (CLI) sederhana untuk melacak apa yang perlu Anda lakukan, apa yang telah Anda lakukan, dan apa yang sedang Anda kerjakan. Proyek ini akan membantu Anda melatih keterampilan pemrograman, termasuk bekerja dengan sistem berkas, menangani masukan pengguna, dan membangun aplikasi CLI sederhana.

### Persyaratan

Aplikasi harus dijalankan dari baris perintah, menerima tindakan dan masukan pengguna sebagai argumen, dan menyimpan tugas dalam file JSON. Pengguna harus dapat:

- Tambahkan, Perbarui, dan Hapus tugas
- Tandai tugas sebagai sedang berlangsung atau selesai
- Daftar semua tugas
- Daftar semua tugas yang sudah dilakukan
- Daftar semua tugas yang belum selesai
- Daftar semua tugas yang sedang berlangsung

Berikut ini adalah beberapa kendala untuk memandu implementasinya:

- Anda dapat menggunakan bahasa pemrograman apa pun untuk membangun proyek ini.
- Gunakan argumen posisi pada baris perintah untuk menerima masukan pengguna.
- Gunakan file JSON untuk menyimpan tugas di direktori saat ini.
- File JSON harus dibuat jika belum ada.
- Gunakan modul sistem berkas asli bahasa pemrograman Anda untuk berinteraksi dengan berkas JSON.
- Jangan gunakan pustaka atau kerangka kerja eksternal apa pun untuk membangun proyek ini.
- Pastikan untuk menangani kesalahan dan kasus khusus dengan baik.

### Contoh

Daftar perintah dan penggunaannya diberikan di bawah ini:

```bash
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

### Properti tugas

Setiap tugas harus memiliki properti berikut:

- `id`: Pengidentifikasi unik untuk tugas
- `description`: Deskripsi singkat tugas
- `status`: Status tugas ( todo, in-progress, done)
- `createdAt`: Tanggal dan waktu saat tugas dibuat
- `updateAt`: Tanggal dan waktu saat tugas terakhir diperbarui

Pastikan untuk menambahkan properti ini ke file JSON saat menambahkan tugas baru dan memperbaruinya saat memperbarui tugas.

<hr/>

## Memulai

Berikut adalah beberapa langkah untuk membantu Anda memulai proyek Task Tracker CLI:

### Siapkan Lingkungan Pengembangan anda:

- Pilih bahasa pemrograman yang Anda kuasai (misalnya, Python, JavaScript, dll.).
- Pastikan Anda memiliki editor kode atau IDE yang terpasang (misalnya, VSCode, PyCharm).

### Inisialisasi Proyek

- Buat direktori proyek baru untuk Task Tracker CLI Anda.
- Inisialisasi sistem kontrol versi (misalnya, Git) untuk mengelola proyek Anda.

### Menerapkan Fitur

- Mulailah dengan membuat struktur CLI dasar untuk menangani masukan pengguna.
- Terapkan setiap fitur satu demi satu, pastikan untuk menguji secara menyeluruh sebelum berpindah ke fitur berikutnya, misalnya terapkan penambahan fungsi tugas terlebih dahulu, kemudian daftarkan, lalu perbarui, tandai sebagai sedang berlangsung, dst.

### Pengujian dan Debugging

- Uji setiap fitur secara individual untuk memastikannya berfungsi sebagaimana mestinya. Lihat berkas JSON untuk memverifikasi bahwa tugas disimpan dengan benar.
- Debug masalah apa pun yang muncul selama pengembangan.

### Menyelesaikan Proyek

- Pastikan semua fitur diimplementasikan dan diuji.
- Bersihkan kode Anda dan tambahkan komentar bila perlu.
- Tulis berkas readme yang baik tentang cara menggunakan Task Tracker CLI Anda.

### Cara Menggunakan

### Instalasi

1. **Pastikan Anda memiliki Node.js terinstal di sistem Anda.**

   - Anda dapat mengunduh dan menginstal Node.js dari [nodejs.org](https://nodejs.org/).

2. **Clone repositori ini ke dalam direktori lokal Anda.**

   ```bash
   git clone https://github.com/username/task-tracker-cli.git
   cd task-tracker-cli
   ```

3. **Menjalankan Aplikasi**

   ```bash
   node src/index.js
   ```
