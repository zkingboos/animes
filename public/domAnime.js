const ANIME_CLASS_NAME = "anime"
const VARIABLES = [watched_animes, watching_animes, notInterest_animes, next_animes]

//watched
//watching
//notinterest
//next

function massiveUpdate(nameContext, context) {
    const current = VARIABLES[context]

    var listElements = []

    for(index in current) {
        const element = createRowAnime(current[index])
        listElements.push(element)
    }

    $(nameContext).append(listElements)
}
    

function createRowAnime(name) {
    let animeDiv = document.createElement("div")
    animeDiv.classList.add(ANIME_CLASS_NAME)
    animeDiv.innerHTML = name
    return animeDiv
}

function fire() {
    $(document).ready(function() {
        massiveUpdate('#watched', 0)
        massiveUpdate('#watching', 1)
        massiveUpdate('#notinterest', 2)
        massiveUpdate('#next', 3)
    })
}

fire()