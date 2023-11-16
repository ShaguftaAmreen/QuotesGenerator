var quotes = [
    "If you fail, never give up because FAIL means First Attempt In Learning, -Abdul Kalam",
    "Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world, ― Swami Vivekananda",
 "To succeed in your mission, you must have single-minded devotion to your goal, -Abdul Kalam",
    "Argue with idiots, and you become an idiot, -Paul Graham",
    "Be yourself; everyone else is already taken, -Oscar Wilde",
    "Simplicity is the ultimate sophistication, -Leonardo Da Vinci",
    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action, -Abdul Kalam",
    "Truth can be stated in a thousand different ways, yet each one can be true, ― Swami Vivekananda",
    "In a conflict between the heart and the brain, follow your heart, ― Swami Vivekananda",
    "You rent your title, you own your character, – Thasunda Brown Duckett"
 ];

 function newQuote(){
    var random=Math.floor(Math.random()*(quotes.length));
    document.getElementById("display").innerHTML=`<h3>${quotes[random]}<h3>`;
 }