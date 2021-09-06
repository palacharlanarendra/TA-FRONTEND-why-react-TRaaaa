function Header() {
  return (
    <section>
      <div className='flex container'>
        <figure className='header__logo'>
          <img src='../images/logo512.png' alt='altcampus logo' />
        </figure>
        <ul className='nav'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
