import  classes from './ProjectLink.module.css';


const ProjectLink = ({linkTitle, linkURL, ...rest}) => {

    return (
        <div className={classes.linkWrap}>
            <a className={classes.link} href={linkURL} target="_blank" rel="noreferrer">{linkTitle}</a>
            <p className={classes.description}>{`${rest.children}`}</p>
        </div>
    )
}

export default ProjectLink;