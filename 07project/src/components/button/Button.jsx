import styles from './button.module.css'

const Button = ({text,icon,isOutline,...rest}) => {
  /*
  destructuring
  const {isOutline, text, icon } = props

  now no need to write props.var
  */ 
  return (
    <button {...rest}  className={isOutline ? styles.next_btn :styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button