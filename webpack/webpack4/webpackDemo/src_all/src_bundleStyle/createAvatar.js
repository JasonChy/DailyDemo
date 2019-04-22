
import avatar from './superviseFeedback.jpg';
import style2 from './index.scss';

function createAvatar() {
  const root = document.getElementById('root');
  const image = new Image();
  image.src = avatar;
  image.classList.add(style2.avatar);
  root.appendChild(image);
}

export default createAvatar;
