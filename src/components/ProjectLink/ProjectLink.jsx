import  classes from './ProjectLink.module.css';
import { useState } from 'react';
import Card from '../Card/Card';

const ProjectLink = ({linkTitle, linkURL, ...rest}) => {

    const [showHoverCard, setShowHoverCard] = useState(false);

    const mouseEnterHandler = event => {
        setShowHoverCard(true);
    }

    const mouseLeaveHandler = () => {
        setShowHoverCard(false);
    }

    return (
        <div className={classes.linkWrap}>
            <a 
                className={classes.link} 
                href={linkURL} 
                target="_blank" 
                rel="noreferrer"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
            >
                {linkTitle}
            </a>
            {showHoverCard && 
                <Card className={classes.imageHoverCard}>
                    <img 
                        src={rest.imgSource}
                        alt='hover card for the link'
                        className={classes.hoverImage} 
                    />
                </Card>
            }
            <p className={classes.description}>{rest.children}</p>
        </div>
    )
}

export default ProjectLink;