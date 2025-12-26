import AddWork from '../../components/main/AddWork'

import '../styles/main/workers.css'

const Workers = () => {
    return (
        <section className="workers">
            <h2 className='workers-heading'>Актуальные ворки</h2>

            <section className='work-cards'>
                <AddWork src='/images/main/workers/image.png' headingBody='Срочно ' cardBody='Больно мне, когда увеличиваюсь других случайно бью нужна помощь' />
                <AddWork src='/images/main/workers/image.png' headingBody='Сделать сайт' cardBody='Я вертолет, рум рум рум рум' />
                <AddWork src='/images/main/workers/image.png' headingBody='Сделать сайт' cardBody='Я понял, что мой пес мужик. Продам быстро' />
                <AddWork src='/images/main/workers/image.png' headingBody='Сделать сайт' cardBody='Я годжу' />
                <AddWork src='/images/main/workers/image.png' headingBody='Сделать сайт' cardBody='Бе бе бе бе бе' />
                <button className='get-all-workers'>Смотреть все ворки</button>
            </section>
        </section>
    )
}

export default Workers