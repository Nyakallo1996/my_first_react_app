// src/components/BlogPostForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const CrimePostForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    const file = data.image[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      onSubmit({
        description: data.description,
        image: reader.result,
      });
      reset();
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" {...register('description', { required: true })} />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" {...register('image', { required: true })} />
      </div>
      <button type="submit">Post</button>
    </form>
  );
};

export default CrimePostForm;
