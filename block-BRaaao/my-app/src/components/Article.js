import data from './data.json';
function Article(props = data) {
  return (
    <>
      <article className='article'>
        <div>
          <figure className='image'>
            <img src={props.urlToImage} alt={props.title} />
          </figure>
          <section className='text'>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.content}</p>
          </section>
        </div>
      </article>
    </>
  );
}
export default Article;
