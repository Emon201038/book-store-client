import React, { useState } from "react";
import { createBooks } from "../../features/book/bookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    price: "",
    rating: "",
    thumbnail: "",
    featured: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmitBook = (e) => {
    e.preventDefault();
    dispatch(createBooks(formData));

    navigate("/");
  };

  const handleAddBook = () => {};

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmitBook}>
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
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
              checked={formData.featured}
              onChange={handleChange}
            />
            <label for="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>{" "}
          <button
            type="submit"
            className="submit"
            id="submit"
            onClick={handleAddBook}
          >
            add book
          </button>{" "}
          {/* {editMode && (
            <button
              className="w-full rounded-[0.375rem] px-[1rem] py-[0.5rem] text-white bg-red-500"
              id="submit"
              onClick={handleCancelEdit}
            >
              {editMode && "Cancel edit"}
            </button>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default AddForm;
