import logo from '../assets/header/logo.svg'

import './styles/header.css'

const Header = () => {
    return (
        <header className="header">
            <img src={ logo } alt="" />

            <nav>
                <ul className='nav'>
                    <li>Биржа</li>
                    <li>Ворки</li>
                    <li>Конкурсы</li>
                    <li>Создать ворк</li>
                    <li>Создать заказ</li>
                </ul>
            </nav>

            <section className='auth'>
                <button className='log-button'>Регистрация</button>
                <button className='reg-button'>Войти</button>
            </section>
        </header>
    )
}

export default Header