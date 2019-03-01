import React, {Component} from 'react';
import FlagChoices from './FlagChoices';
import FlagAnswer from './FlagAnswer';
import Header from './Header';
import './FlagQuestion.css';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  EmailIcon,
} from 'react-share';
const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};

const Nav = () => {
  return(
    <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

    <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
    </label>

    <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
        Rules are simple, try to guess the flag and you'll get to know more about the state.<br></br>If you like the game, feel free to share. 
Enjoy!
        </ul>
    </nav>
    </div>
  )
}

class FlagQuestion extends Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      userChoice: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({userChoice: Number(e.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onGuess(this.state.userChoice);
  }

  render() {
    const {
      capital, 
      lang,
      region, 
      subregion, 
      population,
      flag,
      questionState,
      options,
      answerText,
      onNext, 
      correctOption,
      nativeName
    } = this.props;

    let text = `${answerText} is ${region} and ${subregion} that ${nativeName} and ${population} and ${capital}`
    if(answerText === nativeName) {
      text = `${answerText} is ${region} and ${subregion} that no native name and ${population} and ${capital}`
    }
    console.log(text)
    let show = questionState === QuestionStates.QUESTION;
    const {userChoice} = this.state;
    let opts = options.map(opt => ({
      ...opt,
      checked: userChoice === opt.id
    }));
    let output = questionState === QuestionStates.QUESTION ?
      (<FlagChoices handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   options={opts} />) :
      (<FlagAnswer
        correctOption={correctOption}
        options={options}
        questionState={questionState}
        correct={questionState === QuestionStates.ANSWER_CORRECT}
        onNext={onNext}
        answer={answerText}
        capital={capital}
        region={region}
        subregion={subregion}
        population={population}
        flag={flag}
        nativeName={nativeName}  
        />);
    
    let flagPic = (<div></div>);
    if(questionState === QuestionStates.QUESTION ) {
      flagPic = (
        <div className="flag-div">
          <img
          className="flag-img"
          src={flag}
          alt="Guess the flag"
        />
        </div>
        
       )
    }
  
    return (
      <div className="questionWrapper">
        <Nav />
        <Header show={show}/>
        {output}
        {flagPic}
       </div>
    );
  }
}

export default FlagQuestion;
export { QuestionStates };