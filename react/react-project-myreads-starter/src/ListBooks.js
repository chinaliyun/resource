import React from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
  render() {

    const { books } = this.props;
    let showingCurrent , showingWantToRead, showingRead;

    showingCurrent = books.filter((book)=>{
      return book.shelf==='currentlyReading'
    })
    showingWantToRead = books.filter((book)=>{
      return book.shelf==='wantToRead'
    })
    showingRead = books.filter((book)=>{
      return book.shelf==='read'
    })
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        showingCurrent.map((book)=>(
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        showingWantToRead.map((book)=>(
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        showingRead.map((book)=>(
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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
              </div>
            </div>
            <div className="open-search">
             <Link to="/search" > Add a Book</Link>
            </div>
          </div>
    )
  }
}

export default ListBooks
