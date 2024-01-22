import './App.css';
import profile_photo from './assets/images/me-staring-at-burger-square.png'
import CardSection from './components/CardSection/CardSection';
import LinksContainer from './components/LinksContainer/LinksContainer';
import ProjectLink from './components/ProjectLink/ProjectLink';

function App() {
  return (
    <div className="page-wrapper">
      <CardSection className="contactCard">
        <div className='flex justify-center align-center p1'>
          <img class="portrait" src={profile_photo}
            alt="Yash staring at a burger"></img>
        </div>
        <div className="contactCardInfo">
          <div>
            <h1 className='bold'>Yash Vedanaparti</h1>
            <p>
              Hi, I'm Yash. I'm a Technical Architect at Slack, with expertise building in NodeJS, React, and Python.
              As a Certified AWS Solutions Architect, I enjoy crafting cloud solutions.
              Beyond tech, I like exploring National Parks, playing chess, playing puzzle games like Squaredle, and taking [very] amateur photography.
              Scroll down below to see some of my hobby projects I am most proud of.
            </p>
          </div>
          <LinksContainer />
        </div>
      </CardSection>

      <CardSection className="workCard">
        <h1 className="px1">Some of my Hobby Projects</h1>
        <ProjectLink
          linkTitle="Bulletin"
          linkURL="https://bulletin.work"
        >
          My ambitious side project to build a dashboard for all your web apps. 
          Building on an Electron, React, and Firebase stack.
        </ProjectLink>

        <ProjectLink
          linkTitle="Checkmate"
          linkURL="https://checkmate.yashvedanaparti.com"
        >
          A lightweight todo list app designed to have every operation be a single click. Built with React, Redux, and MUI. CI pipeline and hosting via Netlify.
        </ProjectLink>

        <ProjectLink
          linkTitle="This website"
          linkURL="https://github.com/yashv19/personal-website-react"
        >
          I built this current landing page with React as well and am hosting it through Netlify.
        </ProjectLink>
      </CardSection>
    </div>
  );
}

export default App;
