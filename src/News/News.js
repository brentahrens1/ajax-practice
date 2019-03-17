import React from 'react'
import './News.css'

const NewsList = (props) => {

    const newsList = props.news.map((n, i) => {
        return (
        <div key={i}>
            <h2>{n.author}</h2>
            <h3>{n.title}</h3>
            <h4>{n.description}</h4><br></br>
        </div>
        )
    })
    return(

        <div>
            <h1 className="title">News</h1>
            <ul className="newsProps">
                { newsList }
            </ul>

        </div>
    )
}


    export default NewsList 