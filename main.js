const speech = new SpeechSynthesisUtterance();

let voices = [];

const voiceSelect = document.querySelector("select");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

const populateVoices = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voiceSelect.innerHTML = "";

  voices.forEach((voice, i) => {
    const option = new Option(voice.name, i);
    voiceSelect.add(option);
  });
};

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
