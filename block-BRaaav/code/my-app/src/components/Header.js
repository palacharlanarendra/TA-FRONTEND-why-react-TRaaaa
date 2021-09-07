function Header() {
  return (
    <>
      <header class='navbar'>
        <div class='container flex'>
          <div class='flex'>
            <a class='brand' href='https://www.w3.org'>
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul class='flex nav-menu nav-menu-primary'>
                <li>
                  <a href='https://www.w3.org'>Home</a>
                </li>
                <li>
                  <a href='https://www.w3.org'>About</a>
                </li>
                <li>
                  <a href='https://www.w3.org'>Blog</a>
                </li>
                <li>
                  <a href='https://www.w3.org'>Our Work</a>
                </li>
                <li>
                  <a href='https://www.w3.org'>Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul class='flex nav-menu nav-menu-secondary'>
              <li class='social-media-item'>
                <a href='https://www.w3.org'>
                  <i class='fab fa-facebook-square'></i>
                </a>
              </li>
              <li class='social-media-item'>
                <a href='https://www.w3.org'>
                  <i class='fab fa-twitter'></i>
                </a>
              </li>
              <li class='social-media-item'>
                <a href='https://www.w3.org'>
                  <i class='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a class='btn btn-primary' href='https://www.w3.org'>
                  {' '}
                  Sign in / Join{' '}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
