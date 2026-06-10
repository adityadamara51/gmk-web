import { createClient } from '@supabase/supabase-js';

// Inisialisasi Supabase client
const supabase = createClient(
  'https://ounztkqtulkvomktcfaq.supabase.co',   // isi dengan URL proyekmu
  'sb_publishable_PFqrp8TcWATIUYtomZYTAQ_IU5Zd9Db'    // isi dengan anon public key
);

document.getElementById("feedbackForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const q1 = document.querySelector('input[name="q1"]:checked')?.value || "";
  const kritikSaran = document.querySelector('textarea[name="kritikSaran"]').value;

  const { error } = await supabase
    .from('kritik_saran_gmk')
    .insert([{ q1, kritik_saran: kritikSaran, timestamp: new Date().toISOString() }]);

  if (error) {
    alert("Gagal menyimpan data: " + error.message);
  } else {
    alert("Terima kasih, kritik & saranmu sudah terkirim!");
    document.getElementById("feedbackForm").reset();
  }
});
