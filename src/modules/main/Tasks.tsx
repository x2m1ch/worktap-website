import women from '/images/main/tasks/women.svg'
import paper from '/images/main/tasks/paper.svg'
import money from '/images/main/tasks/money.svg'

import '../styles/tasks.css'

const Tasks = () => {
    return (
        <section className="tasks">
            <h2 className='tasks-heading'>Как решать задачи на WorkTap?</h2>
            <p className='tasks-description'>Идеально подходит для бизнеса и частных лиц</p>

            <section className='tasks-stages'>
                <article className='tasks-stages-items'>
                    <img src={ women } alt="" />
                    <h3 className='tasks-stages-heading'>Выберите услугу</h3>
                    <p className='tasks-stages-description'>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
                </article>

                <article className='tasks-stages-items'>
                    <img src={ money } alt="" />
                    <h3 className='tasks-stages-heading'>Оплатите</h3>
                    <p className='tasks-stages-description'>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите.</p>
                </article>

                <article className='tasks-stages-items'>
                    <img src={ paper } alt="" />
                    <h3 className='tasks-stages-heading'>Получите результат</h3>
                    <p className='tasks-stages-description'>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
                </article>
            </section>
        </section>
    )
}

export default Tasks