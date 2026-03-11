document.addEventListener("DOMContentLoaded", () => {
    const wizmon = document.getElementById("wizmon");
    const status = document.getElementById("status");
    const hint = document.getElementById("hint");

    if (!wizmon || !status) return;

    const messages = [
        "Status: Building webpage",
        "Status: Doom scrolling",
        "Status: Wizardmon is definitely not chugging hot sauce",
        "Status: Finding new safety tips",
        "Status: Debugging reality itself",
        "Status: Crying over said bugs",
        "Status: Not dead we prommy",
        "Status: Practicing CPR",
        "Status: Looking at cat pictures"
    ];

    let messageIndex = 0;

    // Cycle status text every 3 seconds
    setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        status.textContent = messages[messageIndex];
    }, 5000);

    // Click interaction
    wizmon.addEventListener("click", () => {
        wizmon.style.transform = "scale(1.1) rotate(3deg)";

        const possible_phrases = [
            "Remember stroke symptoms with FAST: Face drooping  (motor difficulties or lopsided) Arm weakness  (inability or difficulty to fully raise arm, grab, move) Speech slurred (difficulty speaking, repeating) Time to act! If the above symptoms show, get medical care immediately",
            "Alcohol and coffee should not be used to warm up in the cold! They can make you *feel* warm, but they mess with your body's natural warming mechanisms, leaving you more vulnerable to hypothermia",
            "Take your meds",
            "A balanced diet is important! No food group is non-essential",
            "Lift with your knees",
            "If you feel like shit in a general sense, might I recommend youfeellikeshit.com? (not made by me)",
            "Stop slouching",
            "Dying is bad for you",
            "Familiarize yourself with emergency items- such as AEDs and fire extinguishers- in your building",
            "Check your first-aid supplies for expired items",
            "Take breaks",
            "Buy more medicine when you run out, not the next time you need it. You do not want to not have it then",
            "If you must go out while sick, wear a mask",
            "Your wellbeing is worth the effort",
            "Wear a mask when working with particulates that get in the air- such as sawdust, dust, or several hundred pounds of sand",
            "Keep band-aids on hand",
            "Wear proper PPE",
            "Look both ways before crossing the street",
            "Tell the paramedics everything",
            "Read all intructions on the label",
            "If you get food stuck in your esophagus (the food pipe, not the breathing pipe), sipping a carbonated beverage can help",
            "Vaccines are good",
            "Medical professionals will often repeat information and questions (especially from a form or different medic) to ensure nothing slides between the cracks. I know it can feel annoying or even patronizing, but it's really important to be safe rather than sorry!",
            "Look both waya before crossing the street",
            "Tripling in height and summoning a weapon of light solves many problems",
            "If the stairs will be in the dark, put glowtape on them",
            "Exit signs should be working. Check all exit signs",
            "In case of emergency, follow exit signs to evacuate",
            "Always stick with your buddy!",
            "Do not block walkways with snow",
            "Visit the hospital if bit by an unknown animal",
            "Stand clear of the closing doors",
            "Stand behind the yellow line",
            "Do not leave fires unattended",
            "In case of choking, you can use the palm of your hand to firmly hit the choking person on the back between the shoulder blades to help dislodge food",
            "The American Red Cross offers first aid and CPR classes, including online ones on their website"
        ];

        const randomPhrase =
            possible_phrases[Math.floor(Math.random() * possible_phrases.length)];

        hint.textContent = randomPhrase;

        setTimeout(() => {
            wizmon.style.transform = "";
        }, 700);
    });

    // Subtle screen wobble for fun
    let wobble = false;
    setInterval(() => {
        wobble = !wobble;
        document.body.style.transform = wobble
            ? "rotate(0.15deg)"
            : "rotate(-0.15deg)";
    }, 6000);
});




class PageFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="site-footer">
            <a 
                href="https://www.tumblr.com/safetyofficerwizardmon?source=share"
                target="_blank"
                rel="noopener noreferrer"
            >
                Safety Officer Wizardmon on Tumblr
            </a> 
                |
            </a>
             <a 
                href="https://notasouleatercf98a585ab.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                See my writing
            </a>
                |
            </a>
             <a 
                href="https://archiveofourown.org/works?work_search%5Bsort_column%5D=revised_at&include_work_search%5Bcharacter_ids%5D%5B%5D=125786896&work_search%5Bother_tag_names%5D=&work_search%5Bexcluded_tag_names%5D=&work_search%5Bcrossover%5D=&work_search%5Bcomplete%5D=&work_search%5Bwords_from%5D=&work_search%5Bwords_to%5D=&work_search%5Bdate_from%5D=&work_search%5Bdate_to%5D=&work_search%5Bquery%5D=&work_search%5Blanguage_id%5D=&commit=Sort+and+Filter&user_id=Notasouleater"
                target="_blank"
                rel="noopener noreferrer"
            >
                See my Wizardmon writing
            </a>
        </footer>
    `;
  }
}

customElements.define('page-footer', PageFooter);

