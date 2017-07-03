const video = document.getElementById('video');
const transcriptContainer = document.getElementById('transcript');
const transcriptSpan = document.querySelectorAll('p span');

// corresponding sentences in the video transcript are highlighted
video.addEventListener('timeupdate', () => {
	for (let i = 0; i < transcriptSpan.length; i++) {
		let currentTime = video.currentTime;
		let startTime = transcriptSpan[i].getAttribute('data-start');
		let endTime = transcriptSpan[i].getAttribute('data-end');
		if (currentTime >= startTime && currentTime < endTime) {
			transcriptSpan[i].style.color = "#f47742";
		} else {
			transcriptSpan[i].style.color = "#000";
		}
	}
});

// clicking anywhere in the transcript takes you to the appropriate time in the video
transcriptContainer.addEventListener('click', (e) => {
	if (e.target.tagName === 'SPAN') {
		let dataTime = e.target.getAttribute('data-start');
		video.currentTime = dataTime;
	}
});
