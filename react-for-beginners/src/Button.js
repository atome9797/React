import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({text, clickEvent}){
    //JSX 에서 class는 className이 된다.
    return <button className={styles.btn} onClick = {clickEvent} >{text}</button>
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

export default Button