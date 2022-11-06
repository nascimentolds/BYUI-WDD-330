async function getPeople(url) {
    console.log('url', url)
    const baseUrl = 'https://swapi.dev/api/people';
    // let finalUrl;
    // if (url) {
    //     finalUrl= url;
    // } else{
    //     finalUrl = baseUrl
    // }
    const finalUrl = url ? url : baseUrl;
    const data = await fetch(finalUrl);
    const dataJson = await data.json();
    console.log(dataJson);
    return { results: dataJson.results, next: dataJson.next, previous: dataJson.previous, count: dataJson.count }
}

async function renderPeople(url) {
    let { results, next, previous, count } = await getPeople(url);
    let html = '';
    results.forEach(result => {
        //eyeColor = result.eye_color.charAt(0).toUpperCase() + result.eye_color.slice(1)
        let htmlSegment = `<div class="user">
                            <h2><a href="#" class="btn" onclick="Mudarestado('${result.name}')">${result.name}</a></h2>
                            <div class="person" id="${result.name}">
                                <div class="birth">Birth Year: ${result.birth_year}</div>
                                <div class="birth">Skin Color: ${result.skin_color}</div>
                                <div class="birth">Hair Color: ${result.hair_color}</div>
                                <div class="eyeColor">Eye Color: ${result.eye_color}</div>
                                <div class="birth">Height: ${result.height}</div>
                                <div class="eyeColor">Mass: ${result.mass}</div>
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    if (previous) {
        html += `<button onclick="renderPeople('${previous}')">previous</button>`
    }

    for (let i = 0; i < count / 10; i++) {
        html += `<button onclick="renderPeople('https://swapi.dev/api/people/?page=${i + 1}')">${i + 1}</button>`
    }

    if (next) {
        html += `<button onclick="renderPeople('${next}')">Next</button>`
    }

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}

renderPeople();

