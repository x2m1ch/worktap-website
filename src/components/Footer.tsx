import facebook from '/images/main/footer/facebook.svg'
import instagram from '/images/main/footer/instagram.svg'
import twitter from '/images/main/footer/twitter.svg'
import linkedIn from '/images/main/footer/linked-in.svg'

import './styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section className='footer-body'>
                    <section className='footer-columns'>
                    <h2 className='footer-headings'>Топ категории</h2>

                    <section className='footer-columns-body'>
                        <p>Тексты и переводы</p>
                        <p>Разработка</p>
                        <p>Дизайн</p>
                        <p>Аудио, видеомонтаж</p>
                        <p>Соцсети и реклама</p>
                        <p>Бизнес и жизнь</p>
                        <p>SEO и оптимизация</p>
                    </section>
                </section>

                <section className='footer-columns'>
                    <h2 className='footer-headings'>О Проекте</h2>

                    <section className='footer-columns-body'>
                        <p>О нас</p>
                        <p>Как Это работает</p>
                        <p>Политика Приватности</p>
                        <p>Правила Пользования</p>
                        <p>Пресса о нас</p>
                    </section>
                </section>

                <section className='footer-columns'>
                    <h2 className='footer-headings'>Поддержка</h2>

                    <section className='footer-columns-body'>
                        <p>Контанты</p>
                        <p>Политика Безопасности</p>
                        <p>FAQ</p>
                    </section>
                </section>

                <section className='footer-columns'>
                    <h2 className='footer-heading'>Follow</h2>

                    <section className="follow-body">
                        <img className='follow-images' src={ facebook } alt="" />
                        <img className='follow-images' src={ twitter } alt="" />
                        <img className='follow-images' src={ instagram } alt="" />
                        <img className='follow-images' src={ linkedIn } alt="" />
                    </section>
                </section>
            </section>

            <p className='right'>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
        </footer>
    )
}

export default Footer