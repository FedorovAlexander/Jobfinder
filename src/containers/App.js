import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Pagination from '../components/Pagination';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Sidebar />
//         <Content />
//       </div>
//     );
//   }
// }

class App extends Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = require('../data/vacancies.json');

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                              <Header />
                              <Sidebar />
                             <Content />

                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
