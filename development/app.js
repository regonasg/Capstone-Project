const sideBar = () => {
  const bars = document.querySelector('.sidebar-btn');
  const menu = document.querySelector('.sidebar');

  bars.addEventListener('click', () => {
    menu.classList.toggle('nav-active');
  });

}

sideBar();
