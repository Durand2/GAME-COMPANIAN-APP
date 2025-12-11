function Generate_Quest(){
    const quests = [
      "Go eat a sandwich",
      "Find monster energy",
      "Go for a drive", // Fixed "aa" to "a"
      "Code the next MMO triple a quality in 2 days"
    ]

    // FIX: Changed Math,floor to Math.floor
    const randomQuest = quests[Math.floor(Math.random() * quests.length)];
    
    // FIX: Changed randomeQuest to randomQuest
    document.getElementById("quest-output").innerText = randomQuest;
}

async function generateAIQuest() {
    
    document.getElementById("ai-output").innerText = "Generating quest..."

    // FIX: Corrected the API URL to a working endpoint (official-joke-api)
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    
    if (!response.ok) {
        document.getElementById("ai-output").innerText = "Error fetching quest.";
        return;
    }
    
    const data = await response.json();

    // Simulating AI quest by combining the joke setup and punchline
    // Use safeText to clean up the output just in case
    const aiQuest = safeText(data.setup) + " - " + safeText(data.punchline);
    
    // FIX: Changed aiQuest variable to the defined variable
    document.getElementById("ai-output").innerText = aiQuest;
}

function safeText(input){
    // This is generally good practice to prevent XSS
    return input.replace(/[<>]/g,"");
}