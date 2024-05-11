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
        `<p>Yeh dekh bahut cute hai na😅.Sorry yarr Terese Bina puche click kar liye🙇Par Kuch bhi bol Photo bahut acha hai na😅.Dekhte Dekhte 2 saal nikalne wala hai ya nikal gya Terese sath time ka pta hi chalta 😊sirf tension pta chalta hai 😂.Yeh photo rakhe rahenge apne pass tera bacho ko dikhayenge😂aur padhayenge human evolution 😅.Central public se kuch khas memories hai nhi mere pas.Ha par sara kharab nhi hai kuch acha bhi hai.One of the good memories is definitely you.Ek aur memory mereko yaad aa raha hai.Aage dekho</p>`, 
        `<p>I know, humari behes bahut baar hui hai, but utna chalta hai, thora gussa bhi zaroori hai for strong bonding ...haha ...but behesh hone ke baad bhi, I can't resist myself to talk with you, because you are much much greater than my ego and gusse mein kitna hi bolu "Bharosa nahi hai", but you only know that how much I trust you, isliye toh hasne time pr apni motu ko phone karta hoon and rone time bhi usse hi karta hoon!</p>`, 
        `<p>Ek quality jo humari bonding ko sabse mazboot banati hai, is care about each other, admire it! Chahe naraz hou ya gussa hou, I always care for you and I know you too care about me, cause we are special, close and precious for each other. Places badle hai hum nahi, we still care and share, that's our strong bonding, as you said that it will grow more strong!</p>`, 
        `<p>Haha...mera POV tum sun li, maybe you might be thinking ki isme new kya hai, yeah toh tumhe pata hai! There are some of my commitment for you</p><br><ol><li>- I will be always there for you, in any situation and will try to make better understanding, yep, i also understands you!</li><li>- I will always support you, chahe koi bhi tere against ho, This Guy is always with you</li><li>- I will protect you from any danger</li><li>- If you need lift up, I will give you my hand</li><li>- If you feel sad, I will give you my shoulder to cry</li><li>- If you feel down, I will give you hug and I'll be your motivation</li><li>- I'll never leave you alone in any situation</li><li>- If you are not feeling good, I'll be there to make you happy</li><li>- If you are alone, Tere pass aa jaunga</li><li>- If you'll be in dark, I'll show you the light with love and care</li></ol><br><p>we will face problems together, I'll be there whenver you need me! I wanna see you happy, I care for you and always will, we will acheive our goals together, jabtak mein hoon tumhare saath kuch bura hone nahi dunga tumhe sad nahi hone dunga tumhe humesha khush rakhuga! Not now, but let's travel together, when we will became capable then I'll be like Minato and you'll be like Kushina, I wish tum happy raho, nothing else matters!</p>`
    ]

    Swal.fire({
        html: htmls[index],
    });
}


Swal.fire({
    html: `<p>UmmHmm...tumhe kya laga, aise hi saste mein nipta dunga, tu special hai na mere liye, toh itna karna toh banta hai meri partner and supporter ke liye</p>
    <br><p>
    NOTE: click the photos to read the messages hidden inside them
    </p>`
})
