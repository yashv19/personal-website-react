import Card from "../Card/Card";
import classes from './CardSection.module.css';

const CardSection = props => {
    return (
        <Card className={`${props.className} ${classes.main}`}>
            {props.children}
        </Card>
    )
}

export default CardSection;