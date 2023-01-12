import React from 'react'

import LeftSidebar from '../../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:2,
        tagName: "python",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:3,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:4,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:5,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:6,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:7,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:8,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:9,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    },{
        id:10,
        tagName: "javascript",
        tagDesc: "for questions regarding programming in  different to have some yhing is yeild betwwen something so "
    }]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a Keyword or label that categorized your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it eaiser for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag}  key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Tags
