
import React, { Component } from 'react';
import Player from './chooseTable';
import {Link,withRouter} from 'react-router-dom'
class Status extends Component {
    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }
    renderStatus() {
        if (this.props.winner) {
            return (<h2>Winner is {this.props.winner}</h2>)
        }
        else {
            return this.props.player ?
                <h2> Next player is {this.props.player}</h2> :
<Link to="/"><Player player={(e) => this.handleSetPlayer(e)}/></Link>
                // <Player player={(e) => this.handleSetPlayer(e)} />
        }
    }
    render() {
        return (<span>{this.renderStatus()}</span>)
    }
}

export default Status;