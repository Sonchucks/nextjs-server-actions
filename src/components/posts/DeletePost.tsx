'use client'

import { deletePost } from '@/actions/postServerActions';
import { Post } from '@prisma/client';
import * as React from 'react';
import { ImSpinner } from 'react-icons/im';
import { MdDelete } from 'react-icons/md';

interface IDeletePostProps {
    post: Post
};

const DeletePost: React.FC<IDeletePostProps> = ({ post }) => {
    const [loading, setLoading] = React.useState<boolean>(false)

    const handleDelete = async (post: Post) => {
        setLoading(true);
        await deletePost(post);
        setLoading(false);
    }

    return (
        <button onClick={() => handleDelete(post)} className='text-slate-500'>
            {!loading && <MdDelete size={20} />}
            {loading && <ImSpinner size={20} className='animate-spin' />}
        </button>
    )
};

export default DeletePost;