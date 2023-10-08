import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSingleBookThunk } from "../../features/Get Single Book/getSingleBookSlice";
import { editBookThunk } from "../../features/Edit Book/editBookSlice";
import Error from "../ui/Error";

const Form = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleBookThunk(id));
  }, [dispatch, id]);

  const { book, isLoading, isError, error } = useSelector(
    (state) => state.getSingleBook
  );
  useEffect(() => {
    localStorage.setItem(
      `bookInfo`,
      JSON.stringify({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
      })
    );
  }, [book.name]);

  useEffect(() => {
    if (book) {
      setFormData({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
      });
    }
  }, [book]);

  const {
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
  } = book;

  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem(`bookInfo`);
    if (storedFormData) {
      return JSON.parse(storedFormData);
    }
    // return {
    //   name: initialName,
    //   author: initialAuthor,
    //   thumbnail: initialThumbnail,
    //   price: initialPrice,
    //   rating: initialRating,
    //   featured: initialFeatured,
    // };
  });
  const { name, author, thumbnail, price, rating, featured } = formData || {};

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target || {};
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editBookThunk({
        id,
        data: {
          name: formData.name,
          author: formData.author,
          thumbnail: formData.thumbnail,
          price: formData.price,
          rating: formData.rating,
          featured: formData.featured,
        },
      })
    );
    localStorage.clear();
    const editedMessage = "Book edited successfully";
    navigate("/", { state: { editedMessage } });
  };

  //decide what to render
  let content = null;
  if (isLoading) {
    content = <h2>Loading Book Information.....</h2>;
  } else if (!isLoading && isError) {
    content = (
      <Error message="Some error occures while loading" error={error} />
    );
  } else if (!isLoading && !isError && book) {
    content = (
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={author}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={price}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            value={featured}
            onChange={handleInputChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          Update Book
        </button>
      </form>
    );
  }

  return <>{content}</>;
};

export default Form;
