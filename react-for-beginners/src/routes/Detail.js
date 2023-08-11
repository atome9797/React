import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function Detail () {
    const { id } = useParams() //파라미터 사용
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie)
        setLoading(false)
        console.log(json)
    }
    
    useEffect(() => {
        getMovie()
    }, [])
    
    return (
        <div>
            <h1>Detail</h1>
            {loading ? <strong>loading...</strong> : (
                <div>
                    <p>{movie.id}</p>
                    <p>{movie.language}</p>
                    <p>{movie.like_count}</p>
                    <p>{movie.title}</p>
                </div>
            )}
        </div>
    )
}

export default Detail