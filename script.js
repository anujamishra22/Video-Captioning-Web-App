document.getElementById('load-video').addEventListener('click', loadVideo);
document.getElementById('add-caption').addEventListener('click', addCaption);

let captions = [];

function loadVideo() {
    const videoUrl = document.getElementById('video-url').value;
    const video = document.getElementById('video');
    video.src = videoUrl;
    video.load();
}

function addCaption() {
    const captionText = document.getElementById('caption-text').value;
    const captionTime = document.getElementById('caption-time').value;
    if (captionText && captionTime) {
        captions.push({ text: captionText, time: parseFloat(captionTime) });
        updateCaptionList();
        document.getElementById('caption-text').value = '';
        document.getElementById('caption-time').value = '';
    }
}

function updateCaptionList() {
    const captionList = document.getElementById('caption-list');
    captionList.innerHTML = '';
    captions.forEach((caption, index) => {
        const li = document.createElement('li');
        li.textContent = `(${caption.time}s) ${caption.text}`;
        captionList.appendChild(li);
    });
}

document.getElementById('video').addEventListener('timeupdate', displayCaption);

function displayCaption() {
    const video = document.getElementById('video');
    const currentTime = video.currentTime;
    const captionDisplay = document.getElementById('caption-display');
    captionDisplay.innerHTML = '';
    captions.forEach(caption => {
        if (Math.abs(currentTime - caption.time) < 0.5) {
            captionDisplay.innerHTML = caption.text;
        }
    });
}
