import './App.css';
import profile_photo from './assets/images/me-staring-at-burger-square.png'
import CardSection from './components/CardSection/CardSection';
import LinksContainer from './components/LinksContainer/LinksContainer';
import ProjectLink from './components/ProjectLink/ProjectLink';
import bulletin from './assets/images/bulletin-landing-page-screenshot.png';
import checkmate from './assets/images/checkmate-screenshot.png';
import thisSite from './assets/images/this-website-screenshot.png';


function App() {

  return (
    <div className="page-wrapper">
      <CardSection className="contactCard">
        <div className='flex justify-center align-center p1'>
          <img className="portrait" src={profile_photo}
            alt="Yash staring at a burger"></img>
        </div>
        <div className="contactCardInfo">
          <div>
            <h1 className='bold'>Yash Vedanaparti</h1>
            <p>
              👋 Hi, I'm Yash. I'm a Technical Architect at Slack, with expertise building things in NodeJS, React, and Python.
              I'm also an AWS Certified Solutions Architect and enjoy developing cloud solutions.
            </p>
            <p>
              Beyond tech, I like exploring National Parks, playing chess and puzzle games like Squaredle, riding my bike, and dabbling in [very] amateur photography.
              Scroll down below to see some of my hobby projects 🤓.
            </p>
          </div>
          <LinksContainer />
        </div>
      </CardSection>

      <CardSection className="workCard">
        <h1 className="px1">My Hobby Projects</h1>
        <ProjectLink
          linkTitle="Bulletin"
          linkURL="https://bulletin.work"
          imgSource={bulletin}
        >
          My ambitious side project to build a dashboard for all your web apps. 
          Building on an Electron, React, and Firebase stack.
        </ProjectLink>

        <ProjectLink
          linkTitle="Checkmate"
          linkURL="https://checkmate.yashvedanaparti.com"
          imgSource={checkmate}
        >
          A lightweight todo list app designed to have every operation be a single click. Built with React, Redux, and MUI. CI pipeline and hosting via Netlify.
        </ProjectLink>

        <ProjectLink
          linkTitle="This website"
          linkURL="https://github.com/yashv19/personal-website-react"
          imgSource={thisSite}
        >
          I built this current landing page with React as well and am hosting it through Netlify.
        </ProjectLink>
      </CardSection>
    </div>
  );
}

export default App;
