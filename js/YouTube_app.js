// Create GLOBAL variable (player) for the YouTubeVideo API
var player;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
onYouTubeIframeAPIReady();


function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: '600',
		videoId: '3tqSeu47iIc', 
		playerVars: {
			controls: 0,
			autoplay: 1,
		},
		events: {
			'onStateChange': PlayerControlsManager.onPlayerStateChange
		}
	});
	PlayerControlsManager.setSongTitle();
}  
