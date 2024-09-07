import TopicItem from '../../components/topicItem/TopicItem';
import {blogData} from '../../constant/blog';
import {tags} from '../../constant/blog';
import Card from '../card/Cards';
import SideCard from '../sideCard/SideCard';
import {cardContent} from '../../constant/blog';
export default function Blogsection() {
    return (
        <div className="main">

        <div className="container">
  
          <div className="blog">
  
            <h2 className="h2">Latest Blog Post</h2>
  
            <div className="blog-card-group">
  
             {blogData?.map((item,index)=>{
                return <Card key={index} data={item} />
             })}
            
  
            </div>
  
            <button className="btn load-more">Load More</button>
  
          </div>
  
          <div className="aside">
  
            <div className="topics">
  
              <h2 className="h2">Topics</h2>
  
            <TopicItem title="Database" />
            <TopicItem title="Accessibilities"/>
            <TopicItem title="Web Performance"/>

  
            </div>
  
            <div className="tags">
  
              <h2 className="h2">Tags</h2>
  
              <div className="wrapper">

                {tags?.map((item,index)=>{
                    return (<button className="hashtag">{item}</button>)
                }
                )}
  
                
  
              </div>
  
            </div>
            {cardContent?.map((item,index)=>{
              return <SideCard key={index} data={item} />
            })}
          
          </div>
  
        </div>
  
      </div>
    );

}