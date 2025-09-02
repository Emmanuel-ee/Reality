const loveBtn = document.getElementById('love-btn');
const loveMsg = document.getElementById('love-message');
const funnyGif = document.getElementById('funny-gif');
const moreBtn = document.getElementById('more-btn');

const loveMessages = [
    "My Queen! 👑, My final bus stop 😂",
    "My favorite ambitious person. I am loving every thing!❤️😂 (Apparently, I am in this world to satisfy my cravings, love and support my family in the best way possible and of course serve God.)",
    "How you seem cold and distant, yet your warmth is felt. Literally sometimes its like you are here and you can hear me (You should do a pregnancy test. Haha (Jokingly seriously !!)) 🥶❤️",
    "I’d buy you a planner made of gold—because you deserve the best for all your dreams! ✨📔😂",
    "I love how you keep it real! 🍬😂",
    "If patience was a superpower, you’d be the superhero of my world! 🦸🏾‍♀️😂",
    "My favorite person to plan a future with! 🪨💑😂",
    "Some surprises are best unwrapped slowly... and I promise, you’ll love every layer. 🎁💋😂",
    "If loving you is a crime, then I’m guilty of wanting you in every way. 🔥😂",
    "You make my heart race—and that’s not the only thing you make race. 😈😂",
    "I am also surprised. I did not know this side of me existed. 😂 (Quite interesting)",
    "I hope you have a lovely week Babe! ❤️. Keep cashing out ! 😂✌️🕊️ peace and love. ❤️✌️🕊️",
    "Happy New Month! 🎉"
];

const funnyGifs = [
    // Romantic, funny, and affectionate GIFs
    'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif', // blowing kiss
    'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif', // cute dance
    'https://media.giphy.com/media/1BcfiGlOGXzQk/giphy.gif', // hearts
    'https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif', // hug
    'https://media.giphy.com/media/3oKIPwoeGErMmaI43C/giphy.gif', // couple snuggle
    'https://media.giphy.com/media/3o6Zt8zb1PpQb6vHHa/giphy.gif', // smile
    'https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif', // wink
    'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', // happy dance
    'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif', // funny
    'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif', // African woman
    'https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif', // heart eyes
    'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif', // dancing
    'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif', // couple holding hands
    'https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif', // Ankara
    'https://media.giphy.com/media/3oKIPwoeGErMmaI43C/giphy.gif' // couple snuggle
];

let msgIndex = 0;

loveBtn.addEventListener('click', () => {
    loveBtn.classList.add('hidden');
    showLove();
    moreBtn.classList.remove('hidden');
});

moreBtn.addEventListener('click', () => {
    showLove();
});

function showLove() {
    loveMsg.classList.remove('hidden');
    funnyGif.classList.remove('hidden');
    loveMsg.textContent = loveMessages[msgIndex];
    const gifUrl = funnyGifs[Math.floor(Math.random() * funnyGifs.length)];
    funnyGif.innerHTML = `<img src="${gifUrl}" alt="Funny Love Gif">`;
    msgIndex = (msgIndex + 1) % loveMessages.length;
}
