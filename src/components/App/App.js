// import logo from './logo.svg';
import './App.scss';
// import items from './mocks/items';

function App() {
  return (
    <main className='container'>
      <section className='catalog'>
        <h1 className='catalog__title'>Ты сегодня покормил кота?</h1>
        <ul className='catalog__list'>
            <li className='catalog__item'>
              <article className='card' key='0'>
                <div className='card__wrapper'>
                  <p className='card__note'>Сказочное заморское яство</p>
                  <h2 className='card__title'>Нямушка</h2>
                  <span className='card__flavor'>с фуа-гра</span>
                  <span className='card__quantity'>10 порций</span>
                  <span className='card__gift'>мышь в подарок</span>
                  <span className='card__happy'></span>
                  <div className='card__weight'>
                    <span className='card__weight-number'>0,5 кг</span>
                  </div>
                </div>
                <p>Чего сидишь? Порадуй котэ, <a className='card__link' href='/'>купи</a>.</p>
                <p>Печень утки разварная с артишоками.</p>
                <p>Печалька, с фуа-гра закончился.</p>
              </article>
            </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
