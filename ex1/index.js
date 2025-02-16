function rand(max) {
    return Math.floor(Math.random() * max) + 1;
}

function play() {
    const levels = {
        0: { max: 10, tentatives: 5 },
        1: { max: 50, tentatives: 7 },
        2: { max: 100, tentatives: 10 },
    };

    let level = prompt(
        "Choisissez un niveau : Facile (0), Intermédiaire (1), Difficile (2)"
    );
    if (!levels[level]) return alert("Niveau invalide.");

    let { max, tentatives } = levels[level];
    let hidden = rand(max);
    console.log(hidden);
    let remaining = tentatives;

    while (remaining > 0) {
        let guess = parseInt(
            prompt(
                `Devinez un nombre entre 1 et ${max} (${remaining} tentatives restantes)`
            )
        );
        if (guess === hidden) {
            alert("Bravo ! Vous avez trouvé le bon nombre ! :D");
            break;
        } else {
            alert(guess > hidden ? "Trop grand !" : "Trop petit !");
        }
        remaining--;
    }

    if (remaining === 0) alert(`Dommage ! Le nombre était ${hidden}`);

    if (confirm("Voulez-vous rejouer ?")) play();
}
