import * as React from 'react';
import { getPosts } from '@/actions/postServerActions';
import DeletePost from './DeletePost';
import EditPost from './EditPost';

interface IListPostsProps {

};

const ListPosts: React.FC<IListPostsProps> = async () => {
    const posts = await getPosts();

    if (posts.success) {
        return (
            <div className='flex flex-col max-w-[500px] m-auto'>
                {posts.success.map((post) => {
                    return (
                        <div key={post.id} className='my-2 flex items-center gap-3 justify-between w-full p-2 border-b'>
                            <span>{post.title}</span>
                            <div className='flex gap-2 items-center'>
                                <EditPost post={post} />
                                <DeletePost post={post} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default ListPosts;