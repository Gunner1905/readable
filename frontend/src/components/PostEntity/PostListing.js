import React from 'react'
import PostEntity from './PostEntity'

const PostListing = ({ posts, filter }) => {

    let allPosts;
	
	if(filter === 'all')
	{
		allPosts = posts;
	}
	else{
		allPosts = posts.filter(post => post.category === filter)
	}
	
    const individiualPostList = allPosts.map(post => 
		<PostEntity key={post.id} post={post} />
	)

    return (
      <ul className="list-group">
        {individiualPostList}
      </ul>
    )
}

export default PostListing