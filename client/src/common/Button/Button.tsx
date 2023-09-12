import styles from './Button.module.css'

type ButtonPropsType = {
    title: string,
}

function Button({ title }: ButtonPropsType) {

    return (
        <>
            <button>
                <span>{title}</span>
            </button>
        </>

    )
}

export default Button