import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import UseFetch from '../customHook/UseFetch'
import SearchBar from './SearchBar'

function Posts() {
  const {data, isLoading, error} = UseFetch('https://jsonplaceholder.typicode.com/posts/')
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(data.length / usersPerPage)

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
    return (
      <div className='posts' key={user.id}>
        <h3>{user.title}</h3>
        <p>{user.id}</p>
      </div>
    )
  })

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
 
  return (
    <div className='postContainer'>
      <SearchBar placeholder={'search...'} data={data}/>

      {isLoading && <h1>Loading...</h1>}
      {error && <h1>error...</h1>}
      {data && displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default Posts