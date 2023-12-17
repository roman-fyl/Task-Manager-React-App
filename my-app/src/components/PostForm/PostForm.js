import React from 'react';
import { useForm } from 'react-hook-form';

import './PostForm.css'

const PostForm = ({ onAddPost }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const newPost = await response.json();
                console.log('New Post:', newPost);
                onAddPost(newPost);
                reset()
            } else {
                console.error('error')
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Title
                <input {...register("title", { required: true })} required />
            </label>
            <br />
            <label>
                Body
                <textarea className='textarea__body' {...register("body", { required: true })} required />
            </label>
            <br />
            <div className="buttons">
                <button type="reset">Clear</button>
                <button type="submit">Add Post</button>
            </div>
        </form>
    )

}
export default PostForm;