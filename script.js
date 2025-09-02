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
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bzM1dWpxemRsenVkeXZ1czk5cWN3b2V4cmRoMWwxOTc5emZleTB0NSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/3CCXHZWV6F6O9VQ7FL/giphy.gif', // love you
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJtZ2lvcmFlajFvY21vYWRyN2V4eHU2dzR4MHFuc2ppMGN0OGhoZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26BRwk0JhSrHiUAb6/giphy.gif', // love
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzJybWMxcnFjZWZhdWdjeGZ1OXBlN3pmMmdhc3ZkbW8xem5jdjF4MCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/RSk4bOw2ptIkAcVxK2/giphy.gif', // kiss
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzJybWMxcnFjZWZhdWdjeGZ1OXBlN3pmMmdhc3ZkbW8xem5jdjF4MCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/12noFudALzfIynHuUp/giphy.gif', // The rock
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bDZtY3lkMmhhemxuem1zZXZtNWFmc3p5MXlsbjNjdTllZnl0dDd3YiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/hSehTEaPbOzZL2ibPq/giphy.gif', // Good Night
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXdzcHF2a3NzMXB3aTFvOXd1azZxM2lpa3UwM2pwZzh3eW1jZTZ2ZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/l2Jhok92mZ2PZHjDG/giphy.gif', // Minions
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXdzcHF2a3NzMXB3aTFvOXd1azZxM2lpa3UwM2pwZzh3eW1jZTZ2ZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/VbnUQpnihPSIgIXuZv/giphy.gif', // romantic couple
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bWpranBndXJqaHlzdGpxcmw3ZjFlcHUyam9pNDFjZXdjYmZ1dmcyeSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/g99MDPavNBLC8/giphy.gif', // romantic love
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aTNiNm9lZGMyYTQzM3l6Z3RpcDNodzAxZWI3NXhyZXJpeWJjNG9wMiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/T1GGaGC2oB9VMKURwU/giphy.gif', // romantic kiss
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MzBtaGgyOWw3MW9kenQxd2k1NWpmbG05bzF5YXg4YXk4Z2hxcmNhNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/xYGnFm4mVcMxYIVq3v/giphy.gif' // Trevor Noah
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
