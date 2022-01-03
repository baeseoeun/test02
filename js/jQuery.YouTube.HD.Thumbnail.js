$('iframe.yt-hd-thumbnail').youTubeHDThumbnail({
	darkenThumbnail: true
});


$('highres').on('change', function () {
    player.setPlaybackQuality($(this).val());
});