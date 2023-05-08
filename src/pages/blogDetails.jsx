import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";


const BlogDetails = () => {

  const params = useParams()

  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

  if (loading) return <p>loading data...</p>
  if (error) return <p>error...</p>


  return (
    <>
      <h1>{data.id} - {data.title}</h1>
      <p>{data.body}</p>
      <h4>{data.userId}</h4>
      <Link to='/blog' className="btn btn-secondary">Volver</Link>
    </>
  )
}
export default BlogDetails