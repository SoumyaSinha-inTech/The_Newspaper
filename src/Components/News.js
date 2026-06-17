import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spin from './Spin';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {
    const [articles,setArticles]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPage,setTotalPage]=useState(0);
    const [loading,setLoading]=useState(false);
    const [totalResults,setTotalResults]=useState(0);

      const UpdateNews = async()=> {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.noOfNews}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let collectedData = await data.json();
        setArticles(collectedData.articles);
        setTotalResults(collectedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(()=>{
         UpdateNews();
    },[])
    
    const fetchMoreData = async()=>{
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.noOfNews}`;
        setPage(page+1)
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let collectedData = await data.json();
        setArticles(articles.concat(collectedData.articles));
        setTotalResults(collectedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
 

    return (
            <div>
                <div className="container my-5 bg-dark">
                    <h1 style={{marginTop:'100px',paddingTop:'30px',paddingLeft:'20px'}}>Top Headlines</h1>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length!==totalResults}
                        loader={<Spin/>}
                        endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
                    >
                        <div className="row my-6">
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-4 my-5" key={element.url}>
                                        <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 50) + ".." : " "} imgUrl={element.urlToImage ? element.urlToImage : "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"} newsUrl={element.url} timeUpdated={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </InfiniteScroll>
    
                </div>
            </div>
        )
}


  

