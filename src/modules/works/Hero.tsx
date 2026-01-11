import Header from "../../components/Header"
import Headings from "../../components/Headings"

import '../styles/works/hero.css'

const Hero = () => {
    return (
        <>
            <Header />

            <section className="works-hero-categories">
                <div className='works-hero-search'>
                    <input placeholder='Что нужно сделать?' className='works-search-input' type="text" />
                    <button className='works-search-button'>Найти</button>
                </div>

                <section className="works-hero-headings">
                    <Headings body='Дизайн'/>
                    <Headings body='Разработка'/>
                    <Headings body='Аудио, видеомонтаж'/>
                    <Headings body='Тексты и переводы'/>
                    <Headings body='SEO и оптимизация'/>
                    <Headings body='Соцсети и реклама'/>
                    <Headings body='Бизнес и жизнь'/>
                    <button className='get-categories'>Все категории</button>
                </section>
            </section>
        </>
    )
}

export default Hero