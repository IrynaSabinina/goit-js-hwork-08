import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  player.setCurrentTime(saveTime);
}
console.log(saveTime);

// if (saveTime) можна не перевіряти на налл бо воно дасть тру якщо воно є в принципі.
