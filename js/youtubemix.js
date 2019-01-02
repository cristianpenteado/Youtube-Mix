let filaVideos = new Queue();
let titulo_da_lista = document.getElementById('titulo_da_lista');
let listaReproducao = document.getElementById('lista_videos');

let getVideoId = url =>  url.substring(url.indexOf("=") + 1, url.length);

let addLista = videoId => {

    let link_video = document.getElementById('link_video');

    if (link_video.value != '') {

        titulo_da_lista.innerHTML = '';
        titulo_da_lista.innerHTML = '(Lista de Reprodução)';

        let thumbnail_do_video = document.createElement('iframe');
        thumbnail_do_video.setAttribute('src', 'http://img.youtube.com/vi/' + videoId + '/1.jpg');
        thumbnail_do_video.setAttribute('style', `width:120px; height:90px;
                                    margin: 5px 30px 0 30px;
                                    box-shadow:0px 2px 7px #000;`);
        thumbnail_do_video.setAttribute('id', videoId);
        thumbnail_do_video.setAttribute('frameborder', 0);
        thumbnail_do_video.title = videoId;
        filaVideos.enqueue(thumbnail_do_video.title);
        listaReproducao.appendChild(thumbnail_do_video);

    } else {
        window.alert('O campo deve ser preenchido!');
    }
    link_video.value = '';
}

let getLista = () => {

    let link_do_video = document.getElementById('link_video').value;
    let videoId = getVideoId(link_do_video);
    addLista(videoId);
}

let playInArea = videoId => {

    let video_reproduzindo = document.getElementById('videoAtual');
    video_reproduzindo.setAttribute('type', 'text/html');
    video_reproduzindo.setAttribute('width', 640);
    video_reproduzindo.setAttribute('height', 360);
    video_reproduzindo.setAttribute('src',
        'http://www.youtube.com/embed/' +
        videoId +
        "?autoplay=1");
        video_reproduzindo.setAttribute('frameborder', 0);

}

let getLink = () => {

    if (filaVideos.size() == 0) {
        alert('Lista vazia! Nenhum vídeo pode ser reproduzido.');
    } else {
        let proximo_video;
        proximo_video = filaVideos.front();
        filaVideos.dequeue();
        playInArea(proximo_video);

        let primeiro_da_fila = document.getElementById(proximo_video);
        primeiro_da_fila.remove();

        var botao = document.getElementById('btn');
        botao.innerHTML = 'Avançar >>';
        botao.setAttribute('style', `margin-left:35%; 
                                     border-radius:5px; 
                                     padding: 10px;`);
        
        if (filaVideos.size() == 0) {
            titulo_da_lista.innerHTML = '(Lista Vazia)';
        }
    }
}