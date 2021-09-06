function Footer() {
  return (
    <section className='footer__section'>
      <div className='flex container'>
        <p>2019 All rights reserved</p>
        <nav>
          <ul className='flex footer__logos'>
            <li>
              <i className='fab fa-facebook'></i>
            </li>
            <li>
              <i className='fab fa-twitter'></i>
            </li>
            <li>
              <i className='fab fa-medium-m'></i>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
