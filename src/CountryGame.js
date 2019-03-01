import React, {Component} from 'react';
import OnLoad from './OnLoad';
import FlagQuestion, {QuestionStates} from './FlagQuestion.js';
import shuffle from 'shuffle-array';
import './CountryGame.css';
import { Offline, Online } from "react-detect-offline";

class CountryGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [], 
            options: [],
            animation: true,
            flags: [],
            correctOption: undefined, 
            questionState: undefined
        }
        
        this.onGuess = this.onGuess.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.endAnimation = this.endAnimation.bind(this)
        this._getFlags = this._getFlags.bind(this)
        
    }

    endAnimation() {
        setTimeout(() => {
            this.setState({
                animation: false
            })
        }, 5000);
    }
    
    apiCall() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(resp => resp.json())
        .then(countries => {
            const correctOption = Math.floor(Math.random() * countries.length);
            const options = this._getOptions(correctOption, countries);
            this._getFlags(countries);
            this.setState({
                countries, 
                correctOption, 
                options, 
                questionState: QuestionStates.QUESTION
            });
        })
        .catch(console.warn)
    }

    componentDidMount() {
        this.endAnimation();
        this.apiCall();
    }

    onGuess(answer) {
        const {correctOption} = this.state;
        let questionState = answer === correctOption ?
                            QuestionStates.ANSWER_CORRECT :
                            QuestionStates.ANSWER_WRONG;
        this.setState({questionState});
        
    }

    nextQuestion() {
        const correctOption = Math.floor(Math.random() * this.state.countries.length);
        const options = this._getOptions(correctOption, this.state.countries);
        this.setState({
            correctOption, 
            options,
            questionState: QuestionStates.QUESTION
        })
    }

    _getFlags(countries) {
        let flags = countries.map(c => c.flag)
        shuffle(flags)
        flags = flags.slice(0,15)
        this.setState({
            flags
        })
    }

    _getOptions(correctOption, countries) {
        let options = [correctOption];
        let tries = 0;
        while (options.length < 4 && tries < 15) {
            let option = Math.floor(Math.random() * countries.length);
            if (options.indexOf(option) === -1) {
                options.push(option);
            } else {
                tries++;
            }
        }
        return shuffle(options);
    }


    render() { 
        console.log(this.state.flags)
        let {
         countries, 
         correctOption, 
         options, 
         questionState
        } = this.state;
        
        let output = <div className="spinnerWrap">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        ;

        if (correctOption !== undefined) {
            
            const {flag, name, capital, region, subregion, population, nativeName } = countries[correctOption];
            const lang = countries[correctOption].languages[0].name;
            console.log(flag)
            console.log(name)
            console.log(capital)
            
            let opts = options.map(opt => {
                return {
                    id: opt, 
                    name: countries[opt].name, 
                    capital: countries[opt].capital,
                    lang: countries[opt].languages[0].name
                };
            });

            if(!this.state.animation){
                output = (
                <FlagQuestion
                correctOption={correctOption}
                answerText = {name}
                onGuess = {this.onGuess}
                onNext = {this.nextQuestion}
                options = {opts}
                questionState = {questionState}
                flag = {flag} 
                capital = {capital}
                lang = {lang}
                region={region}
                subregion={subregion}
                population={population}
                nativeName={nativeName}
                />
                )
            }
            else {
                output = <OnLoad flags={this.state.flags}/>
            }
            
        }
        return (
            <div>
            {output}
            <Offline>
                <div className="showConn">
                    <h2>There is a problem with your internet connection!</h2>
                </div>
            </Offline>
            </div>
        );
    }
}


export default CountryGame;
