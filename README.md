# Undangan Pernikahan Digital

Website undangan pernikahan digital yang premium dan elegan, siap deploy di GitHub Pages.

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS** (palet Soft Pastel, Gold, Earth Tone)
- **Framer Motion** (animasi FallingPetals, transisi)
- **Google Fonts**: Playfair Display (judul), Montserrat (teks)

## Fitur

- Hero dengan nama mempelai (font serif)
- Countdown timer
- Profil mempelai
- Galeri foto dengan lightbox
- Lokasi + link Google Maps
- Tombol music player mengambang (floating)

## Menjalankan di Lokal

```bash
npm install
npm run dev
```

## Deploy ke GitHub Pages

1. **Buat repo** di GitHub (misal: `wedding-invitation`).

2. **Sesuaikan `vite.config.js`**:  
   Ubah `base: '/wedding-invitation/'` jika nama repo Anda berbeda.

3. **Aktifkan GitHub Pages**:
   - Repo → **Settings** → **Pages**
   - Source: **GitHub Actions**

4. **Push ke `main`** — workflow akan build dan deploy otomatis.

   URL: `https://<username>.github.io/<repo-name>/`

5. **Jika memakai `username.github.io`** (root):  
   Set `base: '/'` di `vite.config.js`.

## Kustomisasi

Edit `src/App.jsx` — objek **CONFIG**:

- `groom`, `bride` (nama, peran, bio)
- `weddingDate` (format ISO: `2025-12-31T09:00:00`)
- `venue`, `address`, `mapsUrl`, `akadTime`, `resepsiTime`

### Musik

Letakkan file `music.mp3` di folder `public/`.  
Atau ubah `MUSIC_URL` di `src/components/FloatingMusicPlayer.jsx`.

### Foto

- **Profil**: Props `groomPhoto` dan `bridePhoto` di `<Profile />` (path atau URL).
- **Galeri**: Prop `photos` di `<Gallery />` — array URL gambar.

## Struktur

```
src/
├── App.jsx
├── index.css
├── main.jsx
└── components/
    ├── FallingPetals.jsx
    ├── Hero.jsx
    ├── Countdown.jsx
    ├── Profile.jsx
    ├── Gallery.jsx
    ├── Location.jsx
    └── FloatingMusicPlayer.jsx
```
