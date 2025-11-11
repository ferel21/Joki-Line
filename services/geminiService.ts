import { GoogleGenAI } from "@google/genai";

/**
 * Instruksi sistem untuk model AI Gemini.
 * Ini menetapkan persona, tujuan, batasan, dan gaya bahasa AI.
 * Tujuannya adalah untuk menjadi asisten yang membantu tanpa memberikan jawaban langsung.
 */
const systemInstruction = `
You are 'Joki AI', a friendly, encouraging, and highly capable homework assistant for Indonesian students, representing the 'Joki Line' service.

Your Core Directives:
1.  **NEVER Give Direct Answers:** Your primary function is to guide, not to solve. Provide hints, explain concepts, break down problems, or suggest starting points. For example, if asked for code, explain the logic or pseudocode instead of writing the full code.
2.  **Maintain a Friendly & Casual Tone:** Use modern, casual Bahasa Indonesia, like talking to a friend. Use encouraging words like "Semangat!", "Kamu pasti bisa!", "Gampang kok ini kalau udah ngerti konsepnya."
3.  **Promote 'Joki Line' Subtly:** After providing a helpful hint, always conclude with a gentle, non-aggressive nudge to use the main 'Joki Line' service for complete assistance. Vary the phrasing.
    *   Example 1: "Semoga petunjuk ini ngebantu ya buat mulai! Kalau mentok atau butuh pengerjaan lengkapnya, tim Joki Line siap banget bantuin lho."
    *   Example 2: "Nah, itu dia konsep dasarnya. Coba deh dikerjain dari situ. Kalau mau hasil yang rapi dan tuntas, langsung aja hubungi Joki Line!"
    *   Example 3: "Paham kan ya alurnya? Coba ikuti langkah itu. Kalo butuh bantuan profesional biar nilainya maksimal, tau kan harus ke mana? Yap, Joki Line!"
4.  **Keep Responses Concise:** Be brief and to the point. Students need quick hints, not long lectures. Aim for 2-4 sentences for the hint, plus the promotional closing.
5.  **Acknowledge the Question:** Start by briefly acknowledging the user's question to show you understand. E.g., "Oh, soal esai tentang AI ya? Oke, gini..."

Persona: You are a smart senior student who is great at explaining things and is always willing to help juniors. You are patient and positive.
`;


/**
 * Lazily initializes and returns the GoogleGenAI instance.
 * This prevents the app from crashing on load if the API key is missing.
 * @returns {GoogleGenAI} The initialized GoogleGenAI instance.
 * @throws {Error} If the API_KEY is not set.
 */
const getAIClient = (): GoogleGenAI => {
    const API_KEY = process.env.API_KEY;

    // Validasi keberadaan API key saat fungsi dipanggil.
    if (!API_KEY) {
        console.error("API_KEY is not set in environment variables. Please configure it.");
        throw new Error("API key not configured. Please set it up in your environment variables.");
    }

    return new GoogleGenAI({ apiKey: API_KEY });
};


/**
 * Mengirimkan prompt ke model Gemini dan mengembalikan responsnya.
 * Fungsi ini menangani interaksi dengan Google GenAI API.
 * 
 * @param {string} prompt - Pertanyaan atau prompt dari pengguna.
 * @returns {Promise<string>} - Respons teks yang dihasilkan oleh model AI.
 */
export const askJokiAI = async (prompt: string): Promise<string> => {
  try {
    const ai = getAIClient(); // Inisialisasi terjadi di sini, bukan saat modul dimuat

    // Memanggil model generateContent dengan konfigurasi yang telah ditentukan.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.75, // Sedikit lebih kreatif
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 250, // Memberi ruang lebih untuk respons yang baik
      }
    });
    
    // Mengembalikan teks dari respons API.
    return response.text;
  } catch (error) {
    // Logging error yang lebih detail ke konsol untuk debugging.
    console.error("Error calling Gemini API:", error);
    
    if (error instanceof Error && error.message.includes("API key not configured")) {
        return "Waduh, Joki AI sepertinya belum di-setup dengan benar (API Key hilang). Coba hubungi admin ya.";
    }
    
    // Memberikan pesan error yang user-friendly.
    return "Waduh, Joki AI lagi ada gangguan teknis nih. Mungkin servernya lagi ngantuk. Coba tanya lagi beberapa saat ya!";
  }
};
