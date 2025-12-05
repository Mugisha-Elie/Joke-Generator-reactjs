import '../index.css'

const Button = (props) => {
    return (
        <button className="bg-[#64C04F] text-white px-3 py-1 rounded cursor-pointer" onClick={props.callAPI}>Click to generate a joke</button>
    )
}

export default Button;