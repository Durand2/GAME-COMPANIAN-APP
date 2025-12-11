function Generate_Quest(){
    const quests = [
      "Go eat a sandwich",
      "Find monster energy",
      "Go for aa drive",
      "Code the next MMO triple a quality in 2 days"
    ]

    const randomQuest = quests[Math,floor(Math.random() * quests.length)];
    document.getElementById("quest-output").innerText = randomeQuest;

}

async function generateAIQuest() {
    
    document.getElementById("ai-output").innerText = "Generate quest..."

    //using a public API as a stand-in for AI test
    const response = await fetch("https://api.cucknorris.io/jokes/random");
    const data = await response.json();

    //simlating AI quest test
    document.getElementById("ai-output").innerText = aiQuest;

}

function safeText(input){
    return input.replace(/[<>]/g,"");
}
