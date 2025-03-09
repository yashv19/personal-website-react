import classes from './Section.module.css';

const Section = ({className, children, ...rest}) => {
    return (
        <div className={`${className} ${classes.main}`} {...rest}>
            {children}
        </div>
    )
}

export default Section;