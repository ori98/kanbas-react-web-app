import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariablesTypes";
import BooleanVariable from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariable/>
         <IfElse/>
         <TernaryOperator/>
         <WorkingWithFunctions/>
         <TemplateLiterals/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript