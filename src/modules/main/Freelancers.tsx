import AddFreelancer from '../../components/main/AddFreelancer'

import '../styles/main/freelancers.css'

const Freelancers = () => {
    return (
        <section className="freelancers">
            <h2 className='freelancers-heading'>Топ фрилансеров</h2>

            <section className='freelancers-cards'>
                <AddFreelancer src='/images/main/freelancer/image.png' name='Мария Королёвская' work='Разработчик PHP' projects='1111' />
                <AddFreelancer src='/images/main/freelancer/image.png' name='Мария Новгородская' work='Разработчик PHP' projects='1111' />
                <AddFreelancer src='/images/main/freelancer/image.png' name='Мария Новгородская' work='Разработчик PHP' projects='1111' />
                <AddFreelancer src='/images/main/freelancer/image.png' name='Мария Новгородская' work='Разработчик PHP' projects='1111' />
                <AddFreelancer src='/images/main/freelancer/image.png' name='Мария Новгородская' work='Разработчик PHP' projects='1111' />

                <button className='get-all-freelancers'>Посмотреть всех ТОП фрилансеров</button>
            </section>
        </section>
    )
}

export default Freelancers