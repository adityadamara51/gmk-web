// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Hubungkan ke Supabase pakai environment variables
const supabase = createClient(
  process.env.SUPABASE_URL,   // dari Vercel Environment Variables
  process.env.SUPABASE_KEY    // dari Vercel Environment Variables
);

// Fungsi utama API
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { q1, kritikSaran } = req.body;

    // Simpan ke tabel kritik_saran_gmk
    const { error } = await supabase
      .from('kritik_saran_gmk')
      .insert([{ q1, kritik_saran: kritikSaran, timestamp: new Date().toISOString() }]);

    if (error) {
      res.status(500).json({ message: "Gagal menyimpan data", error });
    } else {
      res.status(200).json({ message: "Data berhasil disimpan!" });
    }
  } else {
    res.status(405).json({ message: "Method tidak diizinkan" });
  }
}
