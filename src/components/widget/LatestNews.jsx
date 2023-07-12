import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
    // fot Blog Data

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetchBlogData();
    }, []);

    async function fetchBlogData() {
        try {
            const response = await axios.get('https://adventura-server.vercel.app/blog');
            setBlogData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="widget-wrap">
            <h3 className="widget-title">Latest Article</h3>
            <div className="widget-body">
                {
                    blogData.slice(0, 6).map(data => (
                        <div className="blog-category-wrap" key={data.id}>
                            <div>
                                <img className="rounded-3" width={80} src={data.image} alt="" />
                            </div>
                            <div>
                                <small>{data.postDate}</small>
                                <Link to={`/blog-details/${data.id}`}><h3>{data.title}</h3></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestNews;