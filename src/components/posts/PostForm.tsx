'use client'

import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostSchema, PostSchemaType } from '@/schemas/PostSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from '../form/InputField';
import Button from '../form/Button';
import { BiArrowFromLeft } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import Header from '../common/Header';
import { createPost } from '@/actions/postServerActions';

interface IPostFormProps {
    
};

const PostForm: React.FC<IPostFormProps> = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [success, setSuccess] = React.useState<string | undefined>();
    const [error, setError] = React.useState<string | undefined>();

    const {register, handleSubmit, reset, formState: {errors}} = useForm<PostSchemaType>({
        resolver: zodResolver(PostSchema)
    });

    React.useEffect(() => {
        if (success) {
            reset();
            
            const timer = setTimeout(() => {
                setSuccess(undefined);
            }, 2000)

            return () => clearTimeout(timer);
        }
    }, [success])

    const onSubmit: SubmitHandler<PostSchemaType> = (data) => {
        setLoading(true);
        createPost(data).then(data => {
            setError(data.error);
            setSuccess(data.success);
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className={cn('flex flex-col max-w-[500px] m-auto')}
        >
            <Header 
                title={'Create Post'}
                large
            />
            <InputField
                id='title'
                register={register}
                errors={errors}
                placeholder='Title'
                disabled={loading}
            />
            {error && <div className="text-sm text-rose-400">{error}</div>}
            {success && <div className="text-sm text-green-400">{success}</div>}
            <Button 
                label={loading ? 'Submitting' : 'Submit'} 
                icon={loading ? undefined : BiArrowFromLeft}
                disabled={loading}
            />
        </form>
    )
};

export default PostForm;