document.addEventListener("DOMContentLoaded", () => {
    const wizmon = document.getElementById("wizmon");
    const status = document.getElementById("status");

    if (!wizmon || !status) return;

    const messages = [
        "Status: Building webpage",
        "Status: Doom scrolling",
        "Status: Wizardmon is definitely sober",
        "Status: Finding new safety tips",
        "Status: Debugging reality itself",
        "Status: Crying over said bugs"
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
            "You have angered him.",
            "Please let him work.",
            "Stop clicking him.",
            "Do you want this page finished?",
            "Clicks are distracting.",
            "Don't make me click you back.",
            "I didn't die for this shit."
        ];

        const randomPhrase =
            possible_phrases[Math.floor(Math.random() * possible_phrases.length)];

        status.textContent = "Status: " + randomPhrase;

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
        </footer>
    `;
  }
}

customElements.define('page-footer', PageFooter);

