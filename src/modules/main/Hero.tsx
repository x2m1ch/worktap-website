import Headings from '../../components/main/Headings'

import guy from '/images/main/hero/guy.png'
import arrow from '/images/main/hero/arrow.svg'

import '../styles/main/hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <article className='hero-column-one'>
                <h2 className="hero-heading">Покупайте фриланс-услуги в два <span style={{ color: "#1DBF73" }}>клика</span></h2>
                <p className='hero-body'>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
                
                <div className='hero-search'>
                    <input placeholder='Что нужно сделать?' className='hero-search-input' type="text" />
                    <button className='hero-search-button'>Найти</button>
                </div>
                
                <section className='hero-headings'>
                    <h3 className='headings-heading'>Выберите рубрику, чтобы начать</h3>

                    <article className='headings-rows'>
                        <button className='design-button'>
                            <img src={ arrow } alt="" />
                            <p>Дизайн</p>
                        </button>

                        <Headings body='Дизайн сайтов' />
                        <Headings body='Дизайн логотипа' />
                    </article>

                    <article className='headings-rows'>
                        <Headings body='Дизайн визиток' />
                        <Headings body='Арт и иллюстрации' />
                        <Headings body='Флаера и брошюры' />
                    </article>

                    <article className='headings-rows'>
                        <Headings body='Баннеры и стенды' />
                        <Headings body='Дизайн презентации' />
                        <button className='get-subcategories'>Все подкатегории</button>
                    </article>
                </section>
            </article>

            <article className='hero-column-two'>
                <img src={ guy } alt="" />
            </article>
        </section>
    )
}

export default Hero