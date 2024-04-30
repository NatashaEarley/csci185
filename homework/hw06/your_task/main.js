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

async function getTracks(term) {
    const url = `${baseURL}?q=${term}&type=album&limit=5`;
    const request = await fetch(url);
    const data = await request.json();
    const snippet = `<section class="track-item preview">
    // <img src="${data[0].image_url}">
    // <i class="fas play-track fa-play" aria-hidden="true"></i>
    // <div class="label">
    //     <h2>Black Swan</h2>
    //     <p>
    //         BTS
    //     </p>
    // </div>
    // </section>`;
    const container = document.querySelector('#tracks');
    container.innerHTML = snippet;
}

async function getAlbums(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    const request = await fetch(url);
    const data = await request.json();

}

async function getArtist(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url);

    const snippet = `<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img src="${data[0].image_url}">
        <h2>${data[0].name}</h2>
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