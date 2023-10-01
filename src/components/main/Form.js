import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBooks,
  editBookPage,
  editingInActive,
  homePage,
  updateBook,
} from "../../features/book/bookSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { editting } = useSelector((state) => state.books);
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    price: "",
    rating: "",
    thumbnail: "",
    featured: false,
  });

  const isMode = localStorage.getItem("isModeNow");
  const bookInfo = JSON.parse(localStorage.getItem("bookInfo"));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleUpdateBook = (e) => {
    if (isMode === "editBook") {
      e.preventDefault();
      dispatch(
        updateBook({
          id: editting?.id,
          data: {
            name: editting?.name,
            author: editting?.author,
            price: editting?.price,
            rating: editting?.rating,
            thumbnail: editting?.thumbnail,
            featured: editting?.featured,
          },
        })
      );

      dispatch(homePage());
      setFormData({
        name: "",
        author: "",
        price: "",
        rating: "",
        thumbnail: "",
        featured: false,
      });

      dispatch(editingInActive());
      navigate("/");
      localStorage.setItem("isModeNow", "home");
    } else {
      e.preventDefault();
      dispatch(createBooks(formData));
      setFormData({
        name: "",
        author: "",
        price: "",
        rating: "",
        thumbnail: "",
        featured: false,
      });
      navigate("/");
    }
  };

  useEffect(() => {
    const { id, name, author, price, rating, thumbnail, featured } =
      bookInfo || {};
    if (id) {
      dispatch(editBookPage());
      setFormData({
        name,
        author,
        price,
        rating,
        thumbnail,
        featured,
      });
    } else {
      dispatch(homePage());
      setFormData({
        name: "",
        author: "",
        price: "",
        rating: "",
        thumbnail: "",
        featured: false,
      });
    }
  }, [editting, dispatch, bookInfo]);

  const handleCancelEdit = (e) => {
    localStorage.setItem("isModeNow", "home");
    dispatch(homePage());
    setFormData({
      name: "",
      author: "",
      price: "",
      rating: "",
      thumbnail: "",
      featured: false,
    });
    dispatch(editingInActive());
    navigate("/");
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Update Book</h4>
        <form className="book-form" onSubmit={handleUpdateBook}>
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
          <button type="submit" className="submit" id="submit">
            update book
          </button>{" "}
          <button
            className="w-full rounded-[0.375rem] px-[1rem] py-[0.5rem] text-white bg-red-500"
            id="submit"
            onClick={handleCancelEdit}
          >
            Cancel edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
