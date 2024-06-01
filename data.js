const nama ="rehan";
let usia = "30";

let kontol = document.getElementById(`kontol`)

function pelernaga() {

    let produktivitas

    if (usia >= 18 && usia <64) {
         produktivitas = `produktif`
    }
    else if (usia >=6 && usia <18) {
        produktivitas = `wajib belajar`
    } 
    else if ( usia >= 1 && usia <=5) {
        produktivitas = `balita`
    }
    else if (usia >=64)
        produktivitas = `pensiun`
    else {
       produktivitas = `alien njir`
    }

   return kontol.innerHTML = produktivitas
    
}

console.log(nama)
console.log(usia)

pelernaga()