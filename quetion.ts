abstract class Question {
    _qText : string;

    get qText() {
        return this._qText;
    }
    set qText(x) {
       this._qText= x;
    }

    constructor(_qText: string) {
        this._qText= _qText;
    }

    public abstract getCorrectAnswer();
    public abstract addCorrectAnswer(answer);
}

class ShortAnswerQuestion extends Question {
        answer: string;
    constructor(_qText: string, answer: string) {
        super(_qText);
        this.answer= answer;
    }
    getCorrectAnswer(){
        return this.answer;
    }
    addCorrectAnswer(answer){
        this.answer= answer;
    }
}

class MultipleChoiceQuestion extends Question {
    _answer: string[];
    
    constructor(_qText: string, answer: string) {
        super(_qText);
        this.answer= answer[0];
    }
     
    getCorrectAnswer(){
        return this.answer;
    }
    addCorrectAnswer(answer){
        this.answer= answer;
    }
}
