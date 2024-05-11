const sections = document.querySelectorAll('.section');
const progressBar = document.querySelector('.progress');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentSectionIndex = 0;

function updateProgressBar() {
    const progress = (currentSectionIndex / (sections.length - 1)) * 100;
    progressBar.style.width = progress + '%';
}

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex = index;
    updateProgressBar();
}

prevButton.addEventListener('click', () => {
    if (currentSectionIndex > 0) {
        scrollToSection(currentSectionIndex - 1);
    }

    nextButton.innerHTML = "Next"
});

nextButton.addEventListener('click', () => {
    if (currentSectionIndex >= 5)
        window.location.href = "card.html"    

    if (currentSectionIndex < sections.length - 1) {
        scrollToSection(currentSectionIndex + 1);
    }

    if (currentSectionIndex == 5) {
        nextButton.innerHTML = "Go"
    }

    else {
        nextButton.innerHTML = "Next"
    }
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionIndex = index;
            updateProgressBar();
        }
    });
});

function popUp(index) {
    htmls = [
        `<p>Yeh dekh kabhi dekhi hai itna Sundar bacha 😅ghoda par.Jab chote the tab sochte the kab bade honge aur aaj ho gye toh sochte hai kab marenge🥹.zindagi jhand ho gya hai.Abhi bhi kabhi kabhi thoda tension aa jata hai and u know what 🙎u are the reason for it😂,just joking yaar 😁 tum hi sirf thodi yeh masoom sa bacha ko Sara tension di Hui hai😊.Tumhara sirf 95% contribution hai😂.</p>`,
        `<p>Khair dekh lo ye hi hai woh ladki photo me jiska baat ho raha hai 🥲.School me mile hue ab toh 2 saal shayad hone wala hoga.Blue saree me jyada achi lagti hai 😅,Red ya black mein jyada achi lagti 😅.Ek acha photo lene mein kitna mehnat lagta hai par pta hai kya photo toh wahi acha hota hai jo chup kar Bina btaye click Kiya Jaye woh ekdum natural aur beautiful hota hai like tumhara Jo hum ek din liye the tumko Bina btaye 😁.woh abhi bhi tumhara best photo hai mera gallery mein aur mera one of the favourite bhi hai 😊.Dekhna hai toh Next click kar🙂</p>`, 
        `<p>Yeh dekh bahut cute hai na😅.Sorry yarr Terese Bina puche click kar liye🙇Par Kuch bhi bol Photo bahut acha hai na😅.Dekhte Dekhte 2 saal nikalne wala hai ya nikal gya Terese sath time ka pta hi nhi chalta 😊sirf tension ka pta chalta hai 😂,Just joking😅.Yeh photo rakhe rahenge apne pass tera bacho ko dikhayenge😂aur padhayenge human evolution 😅.Central public se kuch khas memories hai nhi mere pas.Ha par sara kharab nhi hai kuch acha bhi hai.One of the good memories is definitely you.Ek aur memory mereko yaad aa raha hai.Aage dekho</p>`, 
        `<p>Yes u guessed it right.Apna signature day.January 3 ko ye din tha Abhi tak yaad hai.us din hi hum tumko tumhara birthday gift bhi diye the woh panda🐼 pta nhi terepas hai bhi ya nhi.Birthday se yaad aya tera KitKat🍫bahut acha tha waise hum jyada sweet khate nhi phir bhi😅.iss baar ka abhi Tak nhi mila🥲. Signing day ka ek aur chiz hai!</p>`, 
        `<p>Yes tumhara message jisme tum mereko kam overthinking karna ka salah di thi.maa kasam tab bilkul nhi karte the😅uske baad se bahut bahut karne Lage hai🤣.yeh shirt par tum mereko best of luck for future bhi like hi 🥲.mereko luck ka khair chodo details par nhi jate hai 😅.Us din bhi bahut enjoy kiye the and fairwell par bhi kya pta tha uske baad life hi change ho jayega😮‍💨</p>`, 
        `<p>Yeh kuch saal me bahut kuch badal gya na.🙂2 saal hone aaya hai.Ab pta nhi kitna saal aur dosti chalega.waise mera harkat se toh lagta hai jyada din nhi chalega jaldi yamraj ka letter ayega narak mein placement ke liye🤣.Par ek minute 😳Tera bhi papa toh Kam nhi hai 😂 matlab humlog ka dosti lifelong chalega congratulations 🤛💐.Bahut kuch badal gya hai.Par hum abhi tak single hai.🥹.pta nhi koi dua mang Raha hai ya gali de Rahi hai 😅.Last year April 1 ko 10:44 night ko propose kiye toh aur agle din 11 ya 11:30 ko tum mera jindagi ka pehla heartbreak di thi😂.Hum toh abhi bhi bol rahe hai mereko hi haa bol de😂 aur booking kar le.khush rakhenge😊pura 150 rupee hai mere pas🙂pura 15 din aaram se kurkure kha sakte hai 😂.well 2 saal mein ek aur chiz bilkul nhi badla 🙂tera height😂abhi bhi baby panda hai 🤣.Ab kuch din mein dono ka result bhi aa jayega 🥹pta nhi kya hoga acha Bura par Jo bhi hoga tera tum kar legi,I believe in you🤛.Mera toh bura hi hoga🥹.Last year yeh hi time date bhi yaad hai 12 may ko jindagi barbad ho gya tha par bhi bura time phase kar liye .I believe aage toh life shambal hi lenge.🙂.Ab jo bhi hoga I believe sahi hi hoga"Best of 🤞 Luck"</p>`
    ]

    Swal.fire({
        html: htmls[index],
    });
}


Swal.fire({
    html: `<p>Sorry yaar kuch din se tabiyat bahut kharab ho gya hai isliye online nhi aa rahe the🙇Par itna din free the aur kuch karne ko tha nhi isliye hum ek project par kam kar rahe the.yeh idea bahut time se Mera dimag mein tha and I have implemented it
Hope u will like it.Aur ha har image par click karna toh ek secret message hai behind the photos 😊
    </p>`
})
