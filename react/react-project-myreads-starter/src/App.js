import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks.js'
import Search from './Search.js'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchs: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({
        books: books
      })
    })
    BooksAPI.search('Art', 2).then((searchs)=>{
      this.setState({
        searchs: searchs
      })
    })
  }
  updateShelf = (book, shelf)=>{
    BooksAPI.update(book, shelf).then((res)=>{
      this.componentDidMount();
    })
  }
  render() {
    const { books, searchs } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks books={books} onUpdateShelf={this.updateShelf}/>
          )} />
        <Route exact path="/search" render={()=>(
          <Search books={searchs} onUpdateShelf={this.updateShelf}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
