import './styles/main/headings.css'

const Headings = (props: {body: string}) => {
    return (
        <button className="headings-button">
            <p>{props.body}</p>
        </button>
    )
}

export default Headings