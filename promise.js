/*
A promise az aszinkron folyamatokhoz kialakított objektum!!!!!

Ezzel tudjuk az aszinkrinítást kezelni
Aszinkron folyamat!!!!!!
->
Az egyes kódrészleteket egymás mellett futtatja!!!!!!
Erre egy jó példa a setInterval()
A setInterval az lefutatja a callback functiont, amit paraméterként megadunk, annyi idő közönként, amit megadunk neki a 
második paraméterében (milliszekundumban adjuk meg)

setInterval(()=> {
    console.log("első");
}, 1000);

console.log("második");

A setInterval 1 másodpercenként fogja lefutattni, amit beleírtunk a callback function-jébe, elején egy másodpercet vár 
->
Ezért, amit késöbb írtunk console.log az elöbb fog lefutni
így jelenik meg a konzolon  
második (rögtön lefut)
első (1 másodperc után jelenik meg)
első (még egy másodperc)
első (még egy másodperc, mert most nincs, ami azt leállítaná)

megcsináljuk, hogy leálljon a setInterval
-> 
const intervalID = setInterval(()=> {
    console.log("első");
    clearInterval(intervalID);
});
console.log("második");
második
első

Azért a második futott le elöbb, mert nem várjuk meg a setInterval-os folyamatot, hanem inditott neki egy új szálat 
a rendszer, a böngésző, ezért lefut a második elöször és utána valamikor meg az első
********************************************************************************************************************************************
Hyper Text Transfer Protocol 
Hálozati kommunikációs protokoll!!!!!
Még azt szokták rá mondani, hogy hypermédiás környezetben 
Hipermédiás az naggyából annyit tesz, hogy nem plain text alapú , tehát nem egyszerű szöveges alapon, hanem 
pl. tudunk fájlokat küldeni rajta, tudunk képeket megjeleníteni, HTML-t, JSON-t, ezért hypermédiás 

Általában web-en használjuk!!!!!
Két szereplője van 
    1. user agent (általában véve egy böngésző)
    2. webszerver 
AJAX -> Asynchronous JavaScript and XML 
    - Aszinkron kéréseket küld és válaszokat fogad HTTP protokoll segítségével!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

És ez az AJAX tehető felelőssé azért, hogy annyiszor használjuk azt a fetch API nevű dolgot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

GET -> erőforrás lekérdezése
POST -> új erőforrás létrehozása 
PUT -> teljes felülírás 
PATCH -> részleges felülírás 
DELETE -> törlés

És mondjuk egy GET kéréssel élünk a szerver felé, akkor azonnal megkapom-e a választ vagy várni kell rá?
->
Várni kell rá és ezt a pár milliszekundumot próbálja megoldani ez az AJAX, hogy megvárja mondjuk egy promise segítségével 
a választ, ami a webszervertől érkezik 

És ezért alkalmazunk promise-okat, mert ezekhez az aszinkron folyamatokhoz ez kell!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



*/