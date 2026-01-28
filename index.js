import 'dotenv/config';
import express from 'express'; 
import multer from 'multer'; 
import fs from 'fs/promises';
import {GoogleGenAI} from "@google/genai";

const app = express();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 },
});

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

// Correct option name
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// **Set your default Gemini model here:**
const GEMINI_MODEL = "gemini-2.5-flash-lite";

app.post('/generate-text', async (req, res) => {
    const prompt = req.body?.prompt;
    if (!prompt) {
        return res.status(400).json({ error: 'Missing "prompt" in request body. Send JSON with Content-Type: application/json.' });
    }
    try {
        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt
        });
        const text = typeof response.text === 'function' ? response.text() : response.text;
        res.status(200).json({ result: text });
    } catch (error) {
        console.error("Error generating text:", error);
        res.status(500).json({ error: "Failed to generate text" });
    }
});

app.post('/generate-from-image', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: "No file uploaded. Use multipart/form-data with field name 'image'.",
            });
        }

        const prompt = req.body?.prompt || req.body?.text || '';
        if (!prompt) {
            return res.status(400).json({ error: "Missing 'prompt' in form-data." });
        }

        const base64Image = req.file.buffer.toString('base64');

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                { type: 'text', text: prompt },
                { inlineData: { data: base64Image, mimeType: req.file.mimetype } },
            ],
        });

        const text = typeof response.text === 'function' ? response.text() : response.text;
        return res.status(200).json({ result: text });
    } catch (error) {
        console.error("Error generating from image:", error);
        return res.status(500).json({ error: "Failed to generate from image" });
    }
});

app.post('/generate-from-document', upload.single('document'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: "No file uploaded. Use multipart/form-data with field name 'document'.",
            });
        }

        const prompt = req.body?.prompt || req.body?.text || '';
        if (!prompt) {
            return res.status(400).json({ error: "Missing 'prompt' in form-data." });
        }

        const base64Document = req.file.buffer.toString('base64');

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                { type: 'text', text: prompt ?? "tolong buat ringkasan dari dokumen berikut" },
                { inlineData: { data: base64Document, mimeType: req.file.mimetype } },
            ],
        });

        const text = typeof response.text === 'function' ? response.text() : response.text;
        return res.status(200).json({ result: text });
    } catch (error) {
        console.error("Error generating from document:", error);
        return res.status(500).json({ error: "Failed to generate from document" });
    }
});

app.post('/generate-from-audio', upload.single('audio'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: "No file uploaded. Use multipart/form-data with field name 'audio'.",
            });
        }

        const prompt = req.body?.prompt || req.body?.text || '';
        if (!prompt) {
            return res.status(400).json({ error: "Missing 'prompt' in form-data." });
        }

        const base64Audio = req.file.buffer.toString('base64');

        const response = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents: [
                { type: 'text', text: prompt ?? "tolong buat transkripsi dari audio berikut" },
                { inlineData: { data: base64Audio, mimeType: req.file.mimetype } },
            ],
        });

        const text = typeof response.text === 'function' ? response.text() : response.text;
        return res.status(200).json({ result: text });
    } catch (error) {
        console.error("Error generating from audio:", error);
        return res.status(500).json({ error: "Failed to generate from audio" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});