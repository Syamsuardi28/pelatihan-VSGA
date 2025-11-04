// ===================================
// FUNGSI WAKTU REAL-TIME
// ===================================
function updateTime() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const timeString = now.toLocaleTimeString("id-ID", options);
  document.getElementById(
    "waktu"
  ).textContent = `⏰ Waktu sekarang: ${timeString}`;
}

// Update waktu setiap detik
setInterval(updateTime, 1000);
updateTime(); // Panggil sekali saat load

// ===================================
// EVENT TOMBOL MULAI PELATIHAN
// ===================================
document.getElementById("mulaiBtn").addEventListener("click", () => {
  const konfirmasi = confirm(
    "Apakah Anda siap mengikuti pelatihan VSGA dan mengembangkan karier digital Anda?"
  );

  if (konfirmasi) {
    alert(
      "🎉 Bagus! Semangat belajar! Mari kita mulai perjalanan menuju kesuksesan! 💪"
    );
  } else {
    alert(
      "😊 Tidak masalah! Anda bisa memulai kapan saja. Kami siap mendukung Anda!"
    );
  }
});

// ===================================
// DAFTAR PROGRAM PELATIHAN
// ===================================
const daftarProgram = [
  "Junior Web Developer",
  "Network Technician",
  "Graphic Designer",
  "Data Analyst",
  "Digital Marketing",
];

// Menampilkan daftar program ke halaman
const listContainer = document.getElementById("listProgram");
daftarProgram.forEach((program) => {
  const li = document.createElement("li");
  li.textContent = program;
  listContainer.appendChild(li);
});

// ===================================
// EVENT SUBMIT FORM PENDAFTARAN
// ===================================
document.getElementById("formDaftar").addEventListener("submit", (e) => {
  e.preventDefault();

  // Ambil nilai input
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const program = document.getElementById("programSelect").value;

  // Validasi nama
  if (nama.length < 3) {
    alert("⚠️ Nama harus minimal 3 karakter!");
    return;
  }

  // Validasi email dengan regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("⚠️ Format email tidak valid!");
    return;
  }

  // Buat pesan hasil pendaftaran
  const hasil = `✅ Halo ${nama.toUpperCase()}!<br><br>
    Selamat! Anda telah berhasil mendaftar program <strong>${program}</strong>.<br>
    Kami akan mengirimkan konfirmasi dan detail pelatihan ke email: <strong>${email}</strong><br><br>
    Terima kasih telah bergabung dengan VSGA 2025! 🎓`;

  // Tampilkan hasil
  const hasilElement = document.getElementById("hasil");
  hasilElement.innerHTML = hasil;
  hasilElement.style.display = "block";

  // Reset form setelah submit
  document.getElementById("formDaftar").reset();

  // Smooth scroll ke hasil
  hasilElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// ===================================
// DATA PESERTA CONTOH (Console Log)
// ===================================
const pesertaContoh = {
  nama: "Syam",
  program: "Junior Web Developer",
  status: "Aktif",
  tanggalDaftar: new Date().toLocaleDateString("id-ID"),
};

console.log("📊 Data Peserta Contoh:", pesertaContoh);

// ===================================
// EVENT SCROLL UNTUK HEADER
// ===================================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===================================
// SMOOTH SCROLL UNTUK NAVIGATION
// ===================================
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
