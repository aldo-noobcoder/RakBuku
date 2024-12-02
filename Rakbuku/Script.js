const judul = document.getElementById("judul");
const penulis = document.getElementById("penulis");
const tahun = document.getElementById("tahun");
const selesai = document.getElementById("check");
const unfinished = document.getElementById("unfinished");
const finished = document.getElementById("finished");
const submit = document.getElementById("submit");
const nama = document.getElementById("nama");
const cari = document.getElementById("cari");






submit.addEventListener("click", ValidSubmit)

function ValidSubmit(e){
    e.preventDefault();
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    if(judul.value === "" || penulis.value === "" || tahun.value < 1)
        return;

    div.classList.add("buku");
    h1.innerHTML = judul.value;
    p.innerHTML = `Penulis: ${penulis.value} | Pada:${tahun.value}`;
    div.appendChild(h1);
    div.appendChild(p);

    selesai.checked ? finished.appendChild(div) : unfinished.appendChild(div);
}

cari.addEventListener("click", Search)

function Search()
{
    const bukus = document.querySelectorAll(".buku")

    if(nama.value === "" || nama.value == null)
    {
        bukus.forEach(buk => {buk.style.display = "block";});
    }
    else {
        bukus.forEach(buk => {
            if (buk.querySelector("h1").innerHTML === nama.value)
                buk.style.display = "block";
            else
                buk.style.display = "none";
        })
    }
}
