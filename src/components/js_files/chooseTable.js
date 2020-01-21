import React,{Component} from 'react'
import choosetable from '../css_files/chooseTable.css'
import {Link,withRouter} from 'react-router-dom'
import Game from './game'
import TicTacToe from './ticTacToe';
class chooseTable extends Component{
    constructor(props){
        super(props);
        this.state={
            row:'',
            gaming:false,
        }
    }
    handleSubmit = () => {
        this.setState({ gaming: !this.state.gaming });
      };

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    render(){
        const whichPage=!this.state.gaming?

   ( <div className="mainPage" >
    <form >
        <p>How many column?</p>
      <div className="formContainers"> <label>
            <input className="height"
               type='text'
               name='row'
               value={this.state.row}
               onChange={this.handleChange}
            />
            
        </label>
        <div>
        <button  type="submit" value="Start"  onClick={this.handleSubmit} >Start!</button>
        </div>
        </div>
       
    </form>
</div>)
:
(<Game
  row={this.state.row}
/>)
        return(<div>
           {whichPage}</div>
        );
    }
}
export default chooseTable