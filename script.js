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
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFqdzN5MXZocndvN3BsYTA4YTR2eXhreDliOGl5bmFqdmp0bmVodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4N1wOi78ZGzSB6H7vK/giphy.gif', // love you
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZzRoeWF1MnVrYnBid3J4b2ZraWd6anZubmU1eHA5cTI0bjIwODAyeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bWsZamNpZbKYE/giphy.gif', // love
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YTd5dThoZ3ZkOHJjN2UyeWhwaHl4ZmhraG15MHVvYzk0N3VuMmdzNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9tZebYjE6ZhyfVpEac/giphy.gif', // kiss
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dnlhMWl4OWx6MXY0OGxpMTNmNnZ1YzZobGhhdm5obDY3NnNiNzJxdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4kw3Cebu7r37XJYJ4I/giphy.gif', // The rock
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3pueGRzdXNocjYwZG03OHRibnhlZWRpeHZ1NGVuaW45ZDV2Zzk3YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KjSr4GMmt4EuI/giphy.gif', // Good Night
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aHY4NXMzM3FqdW96YW1hNzk4MHc3eGp1eXc5c2Q4aDE3NGZ5MWY5ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2R0aKwejYr8ycKAg/giphy.gif', // Minions
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aHY4NXMzM3FqdW96YW1hNzk4MHc3eGp1eXc5c2Q4aDE3NGZ5MWY5ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NyxJ4J2ZWWdaLpplTI/giphy.gif', // romantic couple
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M3h5aGc2a2Q2cTA4djhxa3AwMXM0OWt5NWNkMG84MndoaXZqMTZueCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9RNTa0Hf5cTJmiyjGS/giphy.gif', // romantic love
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDJiaXJheDQzMWxhdng1MnE5N3d0N3dtb205bnpqdmFmMTc3MGoycSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oxRmq2QcuORRdlKXS/giphy.gif', // romantic kiss
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cGRsbzJoZjdrYWhsazF5YXBuMXR5NWR0dXlobGRqZGFkNXZzYWtpeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xYGnFm4mVcMxYIVq3v/giphy.gif' // Trevor Noah
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
