const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function playTrack(trackId) {
    const template = `<iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
    width="100%" 
    height="152" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>`
    document.querySelector("#artist").innerHTML = template;
}

async function getTracks(term) {
    const url = `${baseURL}?type=track&q=${term}`;
    const request = await fetch(url);
    const trackData = await request.json();
    document.querySelector("#tracks").innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const track = trackData[i];
        const template = `
            <section class="track-item preview" onclick="playTrack('${track.id}')">
                <img src="${track.album.image_url}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${track.name}</h2>
                    <p>${track.artist.name}</p>
                </div>
            </section>
        `;
        document.querySelector("#tracks").innerHTML += template;
    }
}



async function getAlbums(term) {
    const url = `${baseURL}?q=${term}&type=album&limit=1`;
    const request = await fetch(url);
    const albumData = await request.json();
    document.querySelector("#albums").innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const albums = albumData[i];
        const template = `
        <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
        <div>
            <img src="${albums.images_url}">
            <h2>${albums.name}</h2>
            <div class="footer">
                <a href="${albums.uri}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
        `;
        document.querySelector("#albums").innerHTML += template;
    }
}

async function getArtist(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();

    const snippet = `<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img src="${data[0].image_url}">
        <h2>"${data[0].name}"</h2>
        <div class="footer">
            <a href="${data[0].spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`;

    const container = document.querySelector('#artist');
    container.innerHTML = snippet;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}