import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Blog = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')


  const handleChange = (e) => {
    let filter = e.target.value
    filter ? setSearchParams({ filter }) : setSearchParams({})
  }

  if (loading) return <p>loading data...</p>
  if (error) return <p>error...</p>

  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        value={searchParams.get('filter') || ''}
        className="form-control my-4" />
      <ul className="list-group">

        {data
          .filter((item) => {
            let filter = searchParams.get('filter')
            if (!filter) return true
            let name = item.title.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((item) => {
            return (
              <Link to={`/blog/${item.id}`} key={item.id}
                className="list-group-item">
                {item.id} - {item.title}
              </Link>
            )
          })}
      </ul>
    </>
  )
}

export default Blog