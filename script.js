async function getAllSurat() {
  let containerSurat = document.getElementById('containerSurat');
  const response = await fetch('surat.json', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await response.json();

  const listsurat = data.data;

  listsurat.map(
    (item, index) =>
      (containerSurat.innerHTML += `<a
    href=""
    class="w-full p-2 rounded-lg bg-slate-900 border-2 border-slate-900 hover:border-2 hover:border-pink-500 flex gap-5 items-center"
  >
    <div
      class="w-[40px] h-[40px] rounded-full border-2 border-pink-500 flex items-center justify-center text-pink-500"
    >
      ${item.nomor}
    </div>
    <div class="flex-1 space-y-2">
      <h1 class="font-bold text-lg text-pink-500">${item.namaLatin}</h1>
      <p class="font-semibold text-gray-400">${item.arti} - ${item.jumlahAyat} Ayat</p>
    </div>
  </a>`)
  );
}

getAllSurat();
