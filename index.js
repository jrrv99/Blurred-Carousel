const data = [
  'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1',
  'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1',
  'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1'
];

const getWindowSize = () => { 
  return {
    width: window.innerWidth, 
    height: window.innerHeight
  };
};

let gallery_view = document.querySelector(".gallery_view");
let root = document.documentElement;
let { width, height } = getWindowSize();
let imageW, imageH;
let min_viewport;

let img_style;

const setImageSize = () => {
  ({ width, height } = getWindowSize());
  min_viewport = Math.min(width, height)

  imageW = height >= width ? "70vmin" : "calc(70vmin * 1.4)";
  imageH = height >= width ? "calc(70vmin * 1.54)" : "70vmin";

  root.style.setProperty('--imageW', imageW);
  root.style.setProperty('--imageH', imageH);
};



window.addEventListener('DOMContentLoaded', () => {
  setImageSize();
  let size 
  data.forEach((data) => {
    size = parseInt(min_viewport * 1.08);
    img_uri = `${data}&resize=${width}x${height}`;
    img_style = `background-image: url(${img_uri});`;
    img_uri = `${data}&resize=${size}x${size}`;

    htmlStructure = `
      <div class="v_item">
        <div class="backdrop" style="${img_style}"></div>
        <img src="${img_uri}" alt="" class="v_img">
      </div>
    `;
    gallery_view.insertAdjacentHTML("beforeend", htmlStructure);
  });
});
window.addEventListener('resize', setImageSize);