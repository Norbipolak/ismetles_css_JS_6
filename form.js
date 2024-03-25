/*
Formok 
Egyszerű form 

Csináltunk egy form-ot HTML-ben a következő formában
Majd az óra második felében vesszük, hogy ezek az inputok miért jó, hogy egy form-ban vannak 

    <form>
        <h3>Név</h3>
        <input type="text" id="name">

        <h3>Email cím</h3>
        <input type="text" id="email">

        <h3>Tárgy</h3>
        <select id="subject">
            <option value="0">Válassz tárgyat</option>
            <option value="1">Tárgy 1</option>
            <option value="2">Tárgy 2</option>
            <option value="3">Tárgy 3</option>
        </select>
 
        <button id="send-form-1">Küldés</button>
    </form>

Itt az a megoldás, hogyha ezeknek az input mezőknek az adatait szeretnénk tudni 
-> 
Rendelkeznek ezek a mezők egy id-val és akkor ezeket lementjük, ez az egyik megoldás
1.
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const btn = document.querySelector("#send-form-1");

btn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();

    console.log(name, email, subject);
});

Az eventListenerben csinálunk változókat és ezeknek megadjuk a lementett input mezőknek a value-it, tehát a szöveget, amit majd 
ezekbe beleírunk, trim azért kell, hogy a whitespace-ket eltüntesse!!!!!!!

És ha most kitöltjük ezeket az input mezőket, akkor a console.log-val kiírjuk őket egymás mellé az adatokat, 
amiket beleírtunk illetve kiválasztottunk

Fontos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Miutána bevittük ezeket az adatokat és rányomunk a gombra, akkor újratölti az oldalt, mert ez az alapértelmezet beállítás 
és akkor nem írja ki a konzolra, amit ki szerettünk volna 
Ennek a megoldása (event objektumot meg kell adni paraméterben és ennek lesz egy olyan metódusa, hogy preventDefault)
-> 
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();

    console.log(name, email, subject);
});

random beírtunk dolgokat és így már tényleg kiírta őket a konzolra pl. -> 
Kis János Géza kis.janos.geza.gmail.com 1 

Ezeket meg lehet jeleníteni egy div-ben 
<div id="form-1-message">

</div>

ezt a div-et is lementjük id alapján
const form1Message = document.querySelector("#form-1-message");

itt az innerHTMl-t fogjuk erre használni, tehát ennek a div-nek az innerHTML lesz a name, email, subject, 
azok a value-k amiket már ide lementettünk ezekbe a változókba!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
->
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();

    form1Message.innerHTML = `
        <h3>Név: ${name}</h3>
        <h3>Email: ${email}</h3>
        <h3>Tárgy: ${subject}</h3>
    `
});

Itt szintaktika alt gr 7-es zárójel és ${} a változók behelyesíteinél
És akkor gombnyomásra kiírja ezeket az adatokat a form felé 

Hogy tudnánk elérni, hogy ne string-ként füzzük hozzá ezeket a dolgokat, hanem mondjuk készítsünk JavaScript segítségével 
HTML elemeket 
->
CreateElement!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Minden eggyes tag-et lemnetünk,csinálunk egy változóban, hogy majd tudjuk őket appendChild-olni a szűlőelemhez 

const nameH3 = document.createElement("h3");
const emailH3 = document.createElement("h3");
const subjectH3 = document.createElement("h3");

form1Message.appendChild(nameH3);
form1Message.appendChild(emailH3);
form1Message.appendChild(subjectH3);

Itt fontos dolgok
1. createElement minden tag-et, amit csináltunk egy változőban
2. Hozzáadjuk őket a szülőelemhez az appendChild() segítségével (tehát ezek az elemek, 
amiket itt létrehoztunk az a id="form-1-message"div-ben lesznek)

Mit csináljunk, hogyha ezt a nameH3 meg a többi h3-as tag-et, amik benne lesznek azokat pirossal szeretnénk kiírni
Style!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const nameH3 = document.createElement("h3");
nameH3.style.color = "red";
const emailH3 = document.createElement("h3");
emailH3.style.color = "green";
const subjectH3 = document.createElement("h3");
subjectH3.style.color = "blue";

és még, hogy ezekben a tag-ekben ki is legyen valami írva, ahhoz kell az innerText vagy innerHTML!!!!!!!

const nameH3 = document.createElement("h3");
nameH3.innerText = name;
nameH3.style.color = "red";

const emailH3 = document.createElement("h3");
emailH3.innerText = email;
emailH3.style.color = "green";

const subjectH3 = document.createElement("h3");
subjectH3.innerText = subject;
subjectH3.style.color = "blue";

Így néz ki az egész btn.addEventListener, ezzel a createElement-es megoldással 
->
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();

    const nameH3 = document.createElement("h3");
    nameH3.innerText = name;
    nameH3.style.color = "red";

    const emailH3 = document.createElement("h3");
    emailH3.innerText = email;
    emailH3.style.color = "green";

    const subjectH3 = document.createElement("h3");
    subjectH3.innerText = subject;
    subjectH3.style.color = "blue";

    form1Message.appendChild(nameH3);
    form1Message.appendChild(emailH3);
    form1Message.appendChild(subjectH3);
});

Tehát itt van kétféle megoldás 
Elöször is mindenképpen le kell menteni az input mezőkből az adatokat (value) egy változóba 
1.
Csinálunk egy div-et, amibe ki szeretnénk írni ezeket az értékeket 
Ezt a div-et id-alapján lementjük és innerText-vel megjelenítjük az adatokat, amik ugy már meg vannak `${name}` ilyen formában

2. 
Ugyanugy ezt a div-et le kell menteni 
CreateElement-vel csinálunk mezőket 
Ezeknek a mezőknek meg kell adni innerText-vel, az input mezők értékeit 
Hozzá kell őket appendChild-olni a szülőelemhez (form1Message-es div)
************************************************************************************************************************************
Mi van akkor ha FormData-t akarunk alkalmazni!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Formdata egy beépített adatszerkezet(van ilyen content-type is, hogy formData)

Mi az a multi form data ->
https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean
Fájlokat pl. így tudunk küldeni 
!!!!!!!!!!!!!!!!!!!!!
Ez arra jó, hogy a fájlokat elhelyezzük egy ilyan form data-ban és hogyha így küldjük el és ha a szervernek is be van állítva normálisan 
a content-type-ja, hogy ezzel a content type-val várja az inputokat, akkor tudunk fájlokat feltölteni

Nézzünk egy ilyen FormData-t 
const fd = new FormData();

FormData-ban van egy ilyen append nevű funkció és akkor hozzácsatolja a dolgokat, amiket megadunk neki pl.fájlokat 
fd.append("file1", "Ez itt egy fájl!");
fd.append("file2", "Ez itt egy fájl!");

const file1 = fd.get("file1");
A get funkció vagy metódus egy kulcs alapján "file1", ,megmutatja, hogy mit tartalmaz ez a fd
A get-vel meg tudjuk kapni, hogy mi van benne 

console.log(fd.get(file1)); -> Ez itt egy fájl!

van egy olyan érdekes funkciója (getAll)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!mint a querySelectorAll - visszakapjuk az összeset 
->
fd.append("name", "Sanyi");
fd.append("name", "Béla");
fd.append("name", "Kata");
fd.append("name", "Rebeka");

const allNames = fd.getAll("names");

Tehát ugyanazokat a kulcsokat definiáljuk, akkor a getAll (nem get)-val megkapjuk az értékeit egy tömbben!!!!!!!!!!!!!
console.log("names");
-> 
[Sanyi, Béla, Kata, Rebeka]
    0: "Sanyi"
    1: "Béla"
    2: "Kata"
    3: "Rebeka"
    length: 4 
    [[Prototype]]: Array 

Ez azért jó, hogy csinál ebből egy tömböt, mert végig lehet rajta menni 

Ki is lehet törölni a delete-vel 
fd.delete("file1");
console-log(fd.get("file1"));
Ennek null-nak kell lennie, mert most töröltük ki a delete-vel a FormData(fd) ezt a kulcsot, hogy "file1"

Van ilyenje is, hogy has, ezzel meg tudjuk nézni, hogy van-e ilyen kulcsa
-> 
const hasKey = fd.has("names");
console.log(hasKey); -> true

Megnézzük, hogy van egy olyan kulcsa, hogy "names" -> true

const doesntHave = fd.has("ages");
console.log(doesntHave); -> false, mert nincs ilyen kulcsunk ebben a FormData-ban

Ennek nyilván boolean a visszatérési értéke 

Aztán van még keys, values 
->
const keys = fd.keys();
console.log(keys) 
-> 
FormData iterator{}
Ez gyakorlatilag annyit tesz, hogy for of-val vagy forEach-vel végig tudunk rajta menni!!!!
de values is valami hasonló lesz 

cosnt values = fd.values();
console.log(values);

És ennek is van egy entries, amivel az 

const entries = fd.entries();
console.log(entries); -> ez is úgy jelent meg, hogy FormData iterator 

for(const keyValues of entries) {
    console.log(keyValue);
}
->
["file2", "Ez itt egy fájl!"]
["names", "Sanyi"]
["names", "Béla"]
["names", "Kata"]
["names", "Rebeka"] 

Kulcs-értékpárokat tartalmaz, de úgy hogy belső tömbökben, tehát kettó elemü tömbökben, aminek az első eleme a kulcs a második pedig az érték
Ezek naggyából a FormData jellemzői 
****
Ezeket honnan örökölhette, hogy keys, values meg entries
-> 
Object-ből örökli!!!
pl. ha megnézzük, hogy ez a FormData ez milyen prototype-val rendelkezik 
console.log(fd);
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
[[Prototype]]: FormData
    append: f append()      saját metódus!!
    delete: f delete()      saját metódus!!
    entries: f entries()    örökli az object-től!!
    forEach: f forEach()    örökli az object-től!!
    get: f ()               saját metódus!!
    getAll: f getAll()      saját metódus!!
    has: f has()            saját metódus!!
    keys: f keys()          örökli az object-től!!
    set: f ()               saját metódus!!
    values: f values()      örökli az object-től!!
    constructor: f FormData()
        [[Prototype]]: Object
            constructor: f Object()
            hasOwnProperty: f hasOwnProperty()
            toString: f toString()
            valueOf: f valueOf()
            stb....

Tehát így müködik ez az öröklödési láncolat a JavaScriptben, hogy a prototype is lehet egy prototype..és a végén
eljutunk oda, hogy null, amikor már a prototype-nak már nincsen prototype-ja, mert az az ős

Itt a FormData-nak vannak ezek a metódusai amiket itt felsoroltunk és még vannak, amit az object-től örökölt -
alatta!!!!!
*****
És ha mondjuk van 1500 input mezőnk, akkor nem kell egyenként lementeni ezeket, mert a FormData segíteni fog ebben!!!!!!

Csinálunk egy teljesen ugyanolyan form szerkezetet mint az elején, csak a form-nak adunk egy id-t 
és le tudjuk menteni az egész form-ot 
-> 
    <form id="form-data-form">
        <h3>Név</h3>
        <input type="text" id="name">

        <h3>Email cím</h3>
        <input type="text" id="email">

        <h3>Tárgy</h3>
        <select id="subject">
            <option value="0">Válassz tárgyat</option>
            <option value="1">Tárgy 1</option>
            <option value="2">Tárgy 2</option>
            <option value="3">Tárgy 3</option>
        </select>
 
        <button id="send-form-2">Küldés</button>
    </form>

Lementjük az egész form-ot 
const formDataForm = document.querySelector("#form-data-form");

Változtatás, hogy a button a send-form-2 lesz, amit lementünk 
-> 
btn2 = document.querySelector("#send-form-2");
Erre csinálunk egy eventListener-t és abban használjuk a FormData-t

btn2.addEventListener("click", function() {
    const fd = new FormData();
});

És ennek a new FormData-nak megadjuk a form-ot, amit lementettünk!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
btn2.addEventListener("click", function() {
    const fd = new FormData(formDataForm);
});
vagy ha ezt nem mentettük volna egy változóba, akkor azt is megadhatnánk itt a new FormData-nak, hogy document.querySelector("#form-data-form")
a formDataForm azért jobb megoldás, mert akkor nem fogunk mindig turkálni a DOM-ban!!!, 
tehát ha mi most azt csinálnánk, hogy beleraknánk ide így new FormData(document.querySelector("#form-data-form"))
Akkor minden esetben, amikor megnyomjuk a gombot, akkor megkeresi ezt a form-ot, ami azért nem jó, mert ha lementjük 
egy változóba, akkor egyszer fogja megkeresni és akkor nem pazaroljuk az erőforrásokat 

btn2.addEventListener("click", function() {
    const fd = new FormData(formDataForm);
    console.log(fd);
});
console.log-val kapunk egy FormData-t és az az érdekes, hogy ez a name-k alapján fogja!!!!!!!!!!!!!!
Tehát nekünk a HTML-ben itt nekünk nem szükségesek az id-k, csak ha nekünk külön másra nem szolgálnak, name viszont kell

De a name-k lesznek a kulcsok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <form id="form-data-form">
        <h3>Név</h3>
        <input type="text" name="name">

        <h3>Email cím</h3>
        <input type="text" name="email">

        <h3>Tárgy</h3>
        <select name="subject">
            <option value="0">Válassz tárgyat</option>
            <option value="1">Tárgy 1</option>
            <option value="2">Tárgy 2</option>
            <option value="3">Tárgy 3</option>
        </select>
 
        <button id="send-form-2">Küldés</button>
    </form>

e.preventDefault-ot nem felejtjük el itt sem!!!!!
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    const fd = new FormData(formDataForm);
    console.log(fd.get("name"));
});
console.log(fd.get("name"));
->
és ha most beírunk valamit az input mezőbe, aminek meg van adva, hogy name="name"
akkor azt írja ki a konzol 

Mi van ha én nem FormData-ban akarom elküldeni az adatokat a szerver felé, mert az egy bizonyos content-type, hogy multipart form data
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Akkor ezt át tudjuk alakítani egy sima objektummá 
Két megoldás van erre
1. Programozol egy saját akármit 
2. Object.fromEntries!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const obj = Object.fromEntries(fd.entries());

Az Object.fromEntries azt csinálja, hogy entriesből csinál nekünk automatikusan egy objektumot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Csinált nekünk egy object-et
console.log(Obj);
->
{name: 'Molnár Zoltán', email: 'molnar.zoltan@citromail.ru', subject: '2'}
    email: "molnar.zoltan@citromail.ru"
    name: "Molnár Zoltán"
    subject: "2"
    [[Prototype]]: Object

És ez azért nagyon jó nekünk, hogy egy object és nem FormData, mert az objectet át 
tudjuk alakítani JSON-ná!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

btn2.addEventListener("click", function(e) {
    e.preventDefault();

    const fd = new FormData(formDataForm);
    const obj = Object.fromEntries(fd.entries());
    console.log(obj);
});

De saját magunk is létre tudunk hozni rgy objektet, úgyhogy 
const formDataObject = {};
for (const [key, value] of fd.entries()) {
    formDataObject[key] = value;
}

Így tudunk végigiterálni a FormData-n és csinálni belöle egy sima JavaScript objectet sima for-val
1. létrehozunk egy sima üres objectet
2. Végigmegyünk az fd entries-ein és kiszedjük a key és a value-t 
3. majd ennek az üres objectet megadjuk key-nek a key-t, value-nak a value-t -> formDataObject[key] = value

de, ugyanígy végig lehet rajta menni forEach-vel 

const formDataObject = {};
fd.forEach((value, key) => {
    formDataObject[key] = value;
});

annyi a különbség, hogy itt arrow function-t használunk 

Így tudunk mi létrehozni, de minek ha van egy beépített metódus, ami ezt nekünk, megteszi, hogy a van egy ilyen beépített dolog, 
hogy Object.fromEntries() !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

csinálunk egy prototype-inheritance.js-t 
*/ 