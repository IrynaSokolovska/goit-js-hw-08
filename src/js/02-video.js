import Player from '@vimeo/player';
import throttle  from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate',throttle(onPlay, 1000) )
     function onPlay (e) {
        localStorage.setItem("videoplayer-current-time", e.seconds) 
        
     }
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

 
{/* <iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
   ></iframe >
      
      
<iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
</script>

       */}