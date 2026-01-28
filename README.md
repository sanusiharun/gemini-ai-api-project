# Gemini AI API Project

**Belajar AI bareng Hacktiv8** 🚀

Project ini adalah implementasi sederhana untuk belajar menggunakan Google Gemini AI API dengan Node.js. Project ini dibuat untuk membantu developer pemula memahami cara berinteraksi dengan AI menggunakan API.

## Fitur

- ✅ Text generation menggunakan Gemini AI
- ✅ Interactive chat dengan Gemini AI
- ✅ Contoh-contoh penggunaan yang mudah dipahami
- ✅ Kode yang clean dan well-documented

## Prerequisites

- Node.js (versi 14 atau lebih tinggi)
- Google Gemini API Key (dapatkan di [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. Clone repository ini:
```bash
git clone https://github.com/sanusiharun/gemini-ai-api-project.git
cd gemini-ai-api-project
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env
```

4. Edit file `.env` dan masukkan API key Anda:
```
GEMINI_API_KEY=your_actual_api_key_here
```

## Cara Menggunakan

### 1. Text Generation

Jalankan contoh text generation:
```bash
npm run text
```

Script ini akan mendemonstrasikan berbagai kemampuan Gemini AI dalam menghasilkan teks.

### 2. Interactive Chat

Jalankan interactive chat:
```bash
npm run chat
```

Anda bisa chat langsung dengan Gemini AI. Ketik "exit" untuk keluar.

### 3. Menggunakan sebagai Module

Anda juga bisa menggunakan fungsi-fungsi yang ada dalam project Anda sendiri:

```javascript
import { generateText, startChat, sendMessage } from './index.js';

// Generate text
const response = await generateText('Jelaskan apa itu machine learning');
console.log(response);

// Start chat
const chat = startChat();
const chatResponse = await sendMessage(chat, 'Halo, apa kabar?');
console.log(chatResponse);
```

## Struktur Project

```
gemini-ai-api-project/
├── index.js              # Main module dengan fungsi-fungsi utama
├── examples/
│   ├── text-generation.js  # Contoh text generation
│   └── chat.js            # Contoh interactive chat
├── .env.example          # Template environment variables
├── .gitignore           # Git ignore file
├── package.json         # Dependencies dan scripts
└── README.md           # Dokumentasi
```

## API Reference

### `generateText(prompt, modelName = 'gemini-pro')`

Generate text berdasarkan prompt yang diberikan.

**Parameters:**
- `prompt` (string): Pertanyaan atau instruksi untuk AI
- `modelName` (string, optional): Model yang digunakan (default: 'gemini-pro')

**Returns:** Promise<string> - Teks yang dihasilkan oleh AI

### `startChat(modelName = 'gemini-pro')`

Memulai sesi chat dengan Gemini AI.

**Parameters:**
- `modelName` (string, optional): Model yang digunakan (default: 'gemini-pro')

**Returns:** Chat session object

### `sendMessage(chat, message)`

Mengirim pesan dalam sesi chat.

**Parameters:**
- `chat` (object): Chat session object dari `startChat()`
- `message` (string): Pesan yang ingin dikirim

**Returns:** Promise<string> - Response dari AI

## Tips Belajar

1. **Mulai dari yang sederhana**: Coba jalankan contoh-contoh yang ada terlebih dahulu
2. **Eksperimen dengan prompts**: Coba berbagai jenis pertanyaan dan instruksi
3. **Baca dokumentasi**: Pelajari lebih lanjut di [Google AI Documentation](https://ai.google.dev/docs)
4. **Practice makes perfect**: Terus berlatih dan eksplorasi fitur-fitur lain

## Troubleshooting

### Error: API key not valid
- Pastikan API key Anda benar di file `.env`
- Pastikan API key sudah aktif di Google AI Studio

### Error: Module not found
- Jalankan `npm install` untuk menginstall dependencies

## Contributing

Contributions are welcome! Silakan buat pull request atau issue jika menemukan bug atau punya ide untuk improvement.

## License

MIT License - Silakan gunakan untuk belajar dan eksperimen!

## Resources

- [Google Gemini AI Documentation](https://ai.google.dev/docs)
- [Hacktiv8 Website](https://hacktiv8.com)
- [Node.js Documentation](https://nodejs.org/docs)

---

**Happy Learning! 🎉**

Dibuat dengan ❤️ untuk belajar AI bersama Hacktiv8