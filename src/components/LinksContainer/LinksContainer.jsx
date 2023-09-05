import classes from './LinksContainer.module.css';
import githubIcon from '../../assets/linkbuttonicons/github.svg';
import linkedinIcon from '../../assets/linkbuttonicons/linkedin-icon.svg';
import cameraIcon from '../../assets/linkbuttonicons/camera-icon.svg';
import chessIcon from '../../assets/linkbuttonicons/chess-icon.svg';

const linklist = [
    {
        id: 1,
        name: 'github',
        href: 'https://github.com/yashv19',
        src: githubIcon,
        class: classes.github,
    },
    {
        id: 2,
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/yashvinvedanaparti',
        src: linkedinIcon,
        class: classes.linkedin,
    },
    {
        id: 3,
        name: 'unsplash',
        href: 'https://unsplash.com/@vinyash',
        src: cameraIcon,
        class: classes.unsplash,
    },
    {
        id: 4,
        name: 'chess',
        href: 'https://www.chess.com/stats/puzzles/kendrick_kumar',
        src: chessIcon,
        class: classes.chess,
    }
]

const LinkButton = props => {
    return (
        <a
            class={`${classes.linkButton} ${props.className}`} 
            target="_blank" 
            href={props.href}
        >
            <img  
                src={props.src}
                alt={props.name}
                className={classes.fluidImage}
            />
        </a>
    )
}

const LinksContainer = props => {
    return (
        <div className={`flex row justify-center p2 ${classes.linksContainer}`}>
            {linklist.map(link => {
                return <LinkButton 
                            key={link.id} 
                            href={link.href}
                            src={link.src}
                            name={link.name}
                            className={link.class}
                        />
            })}
        </div>
    )
}

export default LinksContainer;