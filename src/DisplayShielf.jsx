import React, { useEffect, useState } from "react";
import axios from "axios";


const DisplayShielf = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
       "https://6880ebc1f1dcae717b63f960.mockapi.io/blog"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (blogs.length === 0) {
    return <p>No blogs found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="p-4 border rounded shadow hover:shadow-md transition"
          >
            <h2>{blog.date}</h2>
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">
              {blog.blogVal?.slice(0, 100)}
            </p>
            <button>Edit</button>
            <button>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayShielf;
