import  classes from './ProjectLink.module.css';
import { useState } from 'react';

const ProjectLink = ({linkTitle, linkURL, ...rest}) => {

    const [showHoverCard, setShowHoverCard] = useState(false);
    const [position, setPostion] = useState({x: 0, y: 0});

    const mouseEnterHandler = event => {
        setShowHoverCard(true);
    }

    const mouseLeaveHandler = () => {
        setShowHoverCard(false);
    }

    const mouseMoveHandler = (e) => {
        setPostion({x: e.clientX, y: e.clientY})
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
                onMouseMove={mouseMoveHandler}
            >
                {linkTitle}
            </a>
            {showHoverCard && 
                <div 
                    className={classes.imageHoverCard}
                    style={{
                        top: position.y,
                        left: position.x
                    }}
                >
                    <img 
                        src={rest.imgSource}
                        alt='hover card for the link'
                        className={classes.hoverImage} 
                    />
                </div>
            }
            <p className={classes.description}>{rest.children}</p>
        </div>
    )
}

export default ProjectLink;