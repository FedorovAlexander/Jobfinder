import React, {Component} from 'react';
import './Board.css';
import HeaderBoardPage from '../Header/HeaderBoardPage';
import Footer from '../Footer/Footer';
import Board from 'react-trello';
import {data} from '../../data/trelloData'

export class KanbanBoard extends Component {
  render() {
    return (<div>
      <HeaderBoardPage/>
      <section className="board">
        <div className="board__wrapper">
          <div className="board__container">
            <Board editable draggable data={data}/>
          </div>
        </div>
      </section>
      <Footer/>
    </div>);
  }
}

export default KanbanBoard;
