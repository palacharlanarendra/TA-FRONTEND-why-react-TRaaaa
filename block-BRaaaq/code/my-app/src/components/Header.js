function Header() {
  return (
    <section>
      <div className='flex container'>
        <figure className='header__logo'>
          <img src='../images/logo512.png' alt='altcampus logo' />
        </figure>
        <ul className='nav'>
          <li>
            <a href='https://fb.com'>Home</a>
          </li>
          <li>
            <a href='https://fb.com'>About Us</a>
          </li>
          <li>
            <a href='https://fb.com'>Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
