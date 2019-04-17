// var Header = require('./header.js');
// var Sidebar = require('./sidebar.js');
// var Content = require('./content.js');
import avatar from './superviseFeedback.jpg';
import createAvatar from './createAvatar';
import style from './index.scss';

createAvatar();

const root = document.getElementById('root');
const image = new Image();
image.src = avatar;
image.classList.add(style.avatar);

root.appendChild(image);
// new Header();
// new Sidebar();
// new Content();
