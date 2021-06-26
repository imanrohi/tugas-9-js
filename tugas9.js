function nama_karyawan() {
  var karyawan = {
    nama : "Agung",
    umur : 30,
    Jabatan : "Manager",
    Bagian : "Teknik Informatika",
  }
  for(var x in karyawan){
    console.log(karyawan[x]);
  }
}

nama_karyawan()
