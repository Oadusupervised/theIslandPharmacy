// Componenetes de funcion
// Componentes de Class 


//props

function Button(props){
    const {text,color,disabled,size} = props
    console.log(props)
    return <button size={size} disabled={disabled} className={`btn-${color}`}>{text}</button>
}

export default Button;