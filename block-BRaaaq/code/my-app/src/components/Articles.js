import data from './data.json';
import Article from './Article';
import { v1 as uuidv1 } from 'uuid';
function Articles() {
  return (
    <>
      <section>
        <div className='container articles__flex'>
          {data.map((elem) => (
            <Article key={uuidv1()} {...elem} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Articles;
