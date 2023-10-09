import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addBookThunk } from "../../features/Add Book/addBookSlice";
import { getBooksThunk } from "../../features/Get Books and Delete/getBooksSlice";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchValue } = useSelector((state) => state.filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(formData));

    const successMessage = "New book was added successfully";

    navigate("/", { state: { successMessage } });
    dispatch(getBooksThunk(searchValue));
  };
  useEffect(() => {
    dispatch(getBooksThunk(searchValue));
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const { name, author, thumbnail, price, rating, featured } = formData;

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className=" w-full ">
        <label htmlFor="name">Book Name</label>
        <input
          required
          className="text-input w-full"
          type="text"
          id="input-Bookname"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2 w-full">
        <label htmlFor="category">Author</label>
        <input
          required
          className="text-input w-full"
          type="text"
          id="input-Bookauthor"
          name="author"
          value={author}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2 w-full">
        <label htmlFor="image">Image Url</label>
        <input
          required
          className="text-input w-full"
          type="text"
          id="input-Bookthumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
          onChange={handleChange}
        />
        <label htmlFor="featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>

      <button type="submit" className="submit" id="submit">
        Add Book
      </button>
    </form>
  );
};

export default Form;
