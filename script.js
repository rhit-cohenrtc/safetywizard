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
    }, 3000);

    // Click interaction
    wizmon.addEventListener("click", () => {
        wizmon.style.transform = "scale(1.1) rotate(3deg)";

        const possible_phrases = [
            "remember stroke symptoms with FAST: Face drooping  (motor difficulties or lopsided) Arm weakness  (inability or difficulty to fully raise arm, grab, move) Speech slurred (difficulty speaking, repeating) Time to act! If the above symptoms show, get medical care immediately",
            "Please let him work.",
            "Stop clicking him.",
            "Do you want this page finished?",
            "Clicks are distracting.",
            "Don't make me click you back.",
            "I didn't die for this shit."
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

