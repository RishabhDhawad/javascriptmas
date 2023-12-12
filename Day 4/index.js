/** uncomment one of these **/
// import OpenAI from "openai" 
import { HfInference } from '@huggingface/inference'

document.getElementById('window-container').addEventListener('click', async function () {
    
    const hf = new HfInference(process.env.JOKE_READ)
    const textToGenerate = "tell me a one line joke about Christmas and santa";
    
    const resp = await hf.textGeneration({
        inputs: textToGenerate,
        model: "HuggingFaceH4/zephyr-7b-beta"
    })
/**
 * 🎄 Challenge:
 * 1. When clicked, the doors should open
 *    to reveal a festive joke.
 * 
 * 🎁 hint.md for help!
 **/
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})