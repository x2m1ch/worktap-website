import Header from '../../components/Header'
import Headings from '../../components/Headings'

import arrow from '/images/market/hero/arrow.svg'

import '../styles/market/hero.css'

const Hero = () => {
    return (
        <section className="market-hero">
            <Header />

            <section className='market-hero-body'>
                <h2 className='market-body-heading'>Ищите и находите подходящую работу среди <br /> <span style={{ color: '#1DBF73' }}>10,000+</span> проектов и покажите на что Вы способны!</h2>

                <div className='market-hero-search'>
                    <input placeholder='Что нужно сделать?' className='market-search-input' type="text" />
                    <button className='market-search-button'>Найти</button>
                </div>

                <section className='market-profesion'>
                    <section className='market-rows'>
                        <Headings body='Тексты и переводы'/>
                        <Headings body='Разработка'/>
                        <Headings body='Дизайн'/>
                        <Headings body='Аудио, видеомонтаж'/>
                    </section>

                    <section className='market-rows'>
                        <Headings body='SEO и оптимизация'/>
                        <Headings body='Бизнес и жизнь'/>
                        <Headings body='Соцсети и реклама'/>
                        <button className='get-categories'>Все категории</button>
                    </section>
                </section>

                <section className='market-hero-bottom'>
                    <p className='design-description'>Ниже все заказы по <span style={{ color: '#1DBF73' }}>дизайну</span></p>

                    <img src={ arrow } alt="" />
                </section>
            </section>
        </section>
    )
}

export default Hero