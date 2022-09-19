import React from 'react'
import { useParams } from 'react-router-dom';
import UseFetch from '../customHook/UseFetch';

function PostDetails() {
  let { id } = useParams();
  const { data, isLoading, error } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>error...</h1>}
      {data && (
        <div key={data.id}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <p>{data.id}</p>
        </div>
      )}
    </div>
  )
}

export default PostDetails