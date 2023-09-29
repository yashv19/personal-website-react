import './App.css';
import profile_photo from './assets/images/me-staring-at-burger-square.png'
import Card from './components/Card/Card';
import LinksContainer from './components/LinksContainer/LinksContainer';

function App() {
  return (
    <div className="page-wrapper">
      <Card className="contactCard">
        <div className='flex justify-center align-center p1'>
          <img class="portrait" src={profile_photo}
            alt="Yash staring at a burger"></img>
        </div>
        <div className="contactCardInfo">
          <div>
            <h1 className='bold'>Yash Vedanaparti</h1>
            <p>
              I'm Yash, a Technical Consultant at Slack.
              I have experience building things in Node.js, React, and Python.
              Outside of work, I like hiking, chess, and puzzles. I occassionally also take
              pictures.
            </p>
          </div>
          <LinksContainer />
        </div>
      </Card>
    </div>
  );
}

export default App;
