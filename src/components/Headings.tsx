import './styles/headings.css'

const Headings = (props: {body: string, bodyTwo?: string}) => {
    return (
        <button className="headings-button">
            <p>{props.body}</p>
            <img src={props.bodyTwo} alt="" />
        </button>
    )
}

export default Headings