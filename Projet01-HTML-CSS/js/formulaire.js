(function () {
     const société = document.getElementById('société');
     const syndic = document.getElementById('syndic');
     const particulier = document.getElementById('particulier');
     const mod = document.getElementById('mod')

     // fonction Société
     function writeSociété () {
        mod.innerHTML = `<form action="">
        <label for="">Raison sociale<br><input type="text"></label><br>
        <label for="">Nom du responsable<br><input type="text"></label><br>
        <label for="">Prénom du responsable<br><input type="text"></label><br>
        <label for="">Qualité<br><input type="text"></label><br>
        <label for="">adresse mail<br><input type="email"></label><br>
        <label for="">n° de téléphone<br><input type="text"></label><br>
        <label for="">Description du projet<br><input type="textarea"></label><br>
        <label for="">Pièce jointe (pdf)<br><input type="file" accept=".pdf"></label><br>
        <br><input type="submit">
    </form>`
     }
     société.onclick = writeSociété;
     
     // fonction Syndic
     function writeSyndic () {
        mod.innerHTML = `<form action="">
        <label for="">Nom du Syndic<br><input type="text"></label><br>
        <label for="">Nom du responsable<br><input type="text"></label><br>
        <label for="">Prénom du responsable<br><input type="text"></label><br>
        <label for="">adresse mail<br><input type="email"></label><br>
        <label for="">n° de téléphone<br><input type="text"></label><br>
        <label for="">Description du projet<br><input type="textarea"></label><br>
        <label for="">Pièce jointe (pdf)<br><input type="file" accept=".pdf"></label><br>
        <br><input type="submit">
    </form>`
     }
     syndic.onclick = writeSyndic;

     // fonction Particulier
     function writeParticulier () {
        mod.innerHTML = `<form action="">
        <label for="">Nom<br><input type="text"></label><br>
        <label for="">Prénom<br><input type="text"></label><br>
        <label for="">adresse mail<br><input type="email"></label><br>
        <label for="">n° de téléphone<br><input type="text"></label><br>
        <label for="">Description du projet<br><input type="textarea"></label><br>
        <label for="">Pièce jointe (pdf)<br><input type="file" accept=".pdf"></label><br>
        <br><input type="submit">
    </form>`
     }
     particulier.onclick = writeParticulier;

})();