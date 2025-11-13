/**
 * File ini berisi konstanta-konstanta yang digunakan di seluruh aplikasi.
 * Memusatkan nilai-nilai ini di satu tempat membuatnya lebih mudah untuk dikelola dan diubah.
 */

// Informasi Kontak
export const WHATSAPP_NUMBER = '6287865238843';
export const WHATSAPP_BASE_URL = 'https://wa.me/';

// Tautan Media Sosial
export const INSTAGRAM_URL = 'https://www.instagram.com/jokiline.id/'; // Contoh URL
export const TIKTOK_URL = 'https://tiktok.com/@jokiline'; // Contoh URL

/**
 * Membuat tautan WhatsApp dengan pesan yang sudah diisi sebelumnya.
 * @param {string} message - Pesan awal yang akan dikirim.
 * @returns {string} - URL lengkap untuk tautan WhatsApp.
 */
export const createWhatsAppLink = (message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    return `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Pesan default untuk berbagai CTA (Call to Action)
export const DEFAULT_CONTACT_MESSAGE = "Halo Joki Line, saya tertarik dengan jasa joki tugasnya.";
export const FREE_CONSULTATION_MESSAGE = "Halo Joki Line, saya mau tanya-tanya dulu untuk konsultasi gratis.";

/**
 * Membuat tautan WhatsApp spesifik untuk pemesanan paket.
 * @param {string} packageName - Nama paket yang diminati.
 * @returns {string} - URL lengkap untuk tautan WhatsApp pemesanan.
 */
export const createPackageOrderLink = (packageName: string): string => {
    const message = `Halo Joki Line, saya tertarik dengan paket *${packageName}*! Bisa tolong jelaskan lebih lanjut?`;
    return createWhatsAppLink(message);
};

/**
 * Membuat tautan WhatsApp spesifik untuk pemesanan item layanan.
 * @param {string} categoryName - Nama kategori layanan (e.g., 'Tugas Menulis').
 * @param {string} serviceTitle - Judul spesifik layanan (e.g., 'Menulis (Tanpa Materi)').
 * @returns {string} - URL lengkap untuk tautan WhatsApp pemesanan.
 */
export const createServiceItemOrderLink = (categoryName: string, serviceTitle: string): string => {
    const message = `Halo Joki Line, saya tertarik dengan layanan *${categoryName}* untuk *${serviceTitle}*. Bisa tolong info lebih lanjut?`;
    return createWhatsAppLink(message);
};