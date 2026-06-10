// Tangkap event submit form
document.getElementById("feedbackForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // cegah reload halaman

  // Ambil data dari form
  const q1 = document.querySelector('input[name="q1"]:checked')?.value || "";
  const kritikSaran = document.querySelector('textarea[name="kritikSaran"]').value;

  // Buat objek data
  const feedback = {
    q1: q1,
    kritikSaran: kritikSaran,
    timestamp: new Date().toISOString()
  };

  // --- Tahap awal: simpan ke localStorage ---
  let allFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];
  allFeedback.push(feedback);
  localStorage.setItem("feedbackData", JSON.stringify(allFeedback));

  // --- Nanti bisa diganti dengan Supabase / Firebase ---
  // Contoh Supabase:
  /*
  const { error } = await supabase
    .from('kritik_saran_gmk')
    .insert([feedback]);
  if (error) {
    alert("Gagal menyimpan data: " + error.message);
  } else {
    alert("Data berhasil disimpan!");
  }
  */

  alert("Terima kasih, kritik & saranmu sudah terkirim secara anonim!");
  document.getElementById("feedbackForm").reset();
});
