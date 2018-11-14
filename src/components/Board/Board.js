import React, {Component} from 'react';
import './Board.css';
import HeaderBoardPage from '../Header/HeaderBoardPage';
import Footer from '../Footer/Footer';
import Board from 'react-trello';
import {data} from '../../data/trelloData';
import { Link } from 'react-router-dom';

const userName = sessionStorage.getItem('login');


export class KanbanBoard extends Component {
  render() {
    return (<div>
      <HeaderBoardPage/>
      <section className="board">
        <div className="board__wrapper">
          <div className="board__container">
            {
              !userName ? <div className="login-page login-page--board"><Link to="/login">Log In</Link> to See Your Job Board</div> :
              <Board editable draggable data={data}/>
            }

          </div>
        </div>
      </section>
      <Footer/>
    </div>);
  }
}

export default KanbanBoard;
