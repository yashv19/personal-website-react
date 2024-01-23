import classes from './Card.module.css'

const Card = ({children, className, ...rest}) => {
    return <div className={`${classes.card} ${className}`} {...rest}>
        {children}
    </div>
}

export default Card;