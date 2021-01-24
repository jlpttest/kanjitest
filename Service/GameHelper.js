import Answer from "../componet/Answer";

//  Stores game data
class GameHelper {

    constructor() {}

    static quizzes = [];
  
    static setQuizzes (quizzes) {
      return this.quizzes  = quizzes;
    }
  
    static getQuizzes () {
      return this.quizzes;
    }

    static setSelectedQuizz(itemSelected){
      this.quizzes.forEach(element => {
        if(element.code == itemSelected.fkexam){
          element.options.forEach(answer=>{
            if(answer.code == itemSelected.code){
              answer.userselected = true;
            }
          });
        }
      });
    }
}
  
export default GameHelper;
  