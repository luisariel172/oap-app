import './Button.css' 

const Button = ( {label, background, action } ) => {
    return <button
//la primera llave escapa al JSX y la segunda declara el objeto de js             
                className='Button'
                style={{
                        backgroundColor: background,
                        color: 'yellow'
                }}
                onClick={action}
                >
                {label}
           </button>
}

export default Button