import React from 'react'
import EscapeRegexp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom'

class Search extends React.Component {
  state = {
    query: "",
  }
  changeQuery = (query)=>{
    this.setState({
      query: query
    })
  }

  render() {
    const { query } = this.state;
    const { books } = this.props;
    let showingBooks = query
      ? books.filter((book)=>{
          const match = new RegExp(EscapeRegexp(query), 'i');
          let matchAuthor = false;
            book.authors.map((author)=>{
              matchAuthor = match.test(author)
              return true;
            })
          return match.test(book.title) || matchAuthor;
        })
      : books;
    showingBooks = showingBooks.sort((book)=>{
      return sortBy(book.title)
    })

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" onChange={(e)=>{this.changeQuery(e.target.value.trim())}} placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                showingBooks.map((book)=>(
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        {<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>}
                        {/*<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.canonicalVolumeLink}')` }}></div>*/}
                        <div className="book-shelf-changer">
                          <select 
                            onChange={(e)=>{
                              this.props.onUpdateShelf(book, e.target.value)
                            }}
                            value={book.shelf}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      {
                        book.authors.map((author, index)=>(
                            <div key={index} className="book-authors">{author}</div>
                          ))
                      }
                      
                    </div>
                  </li>
                  ))
              }
            </ol>
          </div>
        </div>
    )
  }
}

export default Search
