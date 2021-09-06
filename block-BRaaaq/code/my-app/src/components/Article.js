import data from './data.json';
import PropTypes from 'prop-types';
function Article(props = data) {
  return (
    <>
      <article className='article'>
        <div>
          <figure className='image'>
            <img src={props.urlToImage} alt={props.title} />
          </figure>
          <section className='text'>
            <h3>{props.title.toUpperCase()}</h3>
            <p>{props.author}</p>
            <p>{props.content}</p>
          </section>
        </div>
      </article>
    </>
  );
}
Article.propTypes = {
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Article;
