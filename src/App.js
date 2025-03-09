import './App.css';
import profile_photo from './assets/images/me-staring-at-burger-square.png'
import Section from './components/Section/Section';
import LinksContainer from './components/LinksContainer/LinksContainer';
import ProjectLink from './components/ProjectLink/ProjectLink';
import bulletin from './assets/images/bulletin_landing_page.png';
import checkmate from './assets/images/checkmate_richtext_note.png';
import descriptions from './assets/aboutme';


function App() {

  return (
    <div className="page-wrapper">
      <Section className="contactCard">
        <div className='flex justify-center align-center p1'>
          <img className="portrait" src={profile_photo}
            alt="Yash staring at a burger"></img>
        </div>
        <div className="contactCardInfo">
          <div>
            <h1 className='bold'>Yash Vedanaparti</h1>
            <p>
              {descriptions.intro}
            </p>
          </div>
          <LinksContainer />
        </div>
      </Section>

      <Section className="workCard">
        <h1 className="px1">My Hobby Projects</h1>
        <ProjectLink
          linkTitle="Bulletin"
          linkURL="https://bulletin.work"
          imgSource={bulletin}
        >
          {descriptions.bulletin}
        </ProjectLink>
        <ProjectLink
          linkTitle="Checkmate"
          linkURL="https://checkmate.yashvedanaparti.com"
          imgSource={checkmate}
        >
          {descriptions.checkmate}
        </ProjectLink>
      </Section>
    </div>
  );
}

export default App;
