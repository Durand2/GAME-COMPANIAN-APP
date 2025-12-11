function Generate_Quest(){
    const quests = (
      "Go eat a sandwich",
      "Find monster energy",
      "Go for aa drive",
      "Code the next MMO triple a quality in 2 days"
    )

    const randomeQuest = quests[Math,floor(Math.random() * quests.length)];
    document.getElementById("quest-output").innerText = randomeQuest;

}