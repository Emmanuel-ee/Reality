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
    'https://media.tenor.com/1c6vQvQw1g8AAAAC/love-you.gif', // love you
    'https://media.tenor.com/2uyENRmiUt0AAAAC/love.gif', // love
    'https://media.tenor.com/6Fz1bQKj5n8AAAAC/kiss-love.gif', // kiss
    'https://media.tenor.com/8QF6Qn6Qb1wAAAAC/hug-couple.gif', // hug couple
    'https://media.tenor.com/2Z4b6QwQK9wAAAAC/heart-cute.gif', // heart cute
    'https://media.tenor.com/9QF6Qn6Qb1wAAAAC/couple-cuddle.gif', // cuddle
    'https://media.tenor.com/3QF6Qn6Qb1wAAAAC/romantic-couple.gif', // romantic couple
    'https://media.tenor.com/4QF6Qn6Qb1wAAAAC/romantic-love.gif', // romantic love
    'https://media.tenor.com/5QF6Qn6Qb1wAAAAC/romantic-kiss.gif', // romantic kiss
    'https://media.tenor.com/7QF6Qn6Qb1wAAAAC/romantic-hug.gif' // romantic hug
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
