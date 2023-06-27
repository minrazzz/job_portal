import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

const modules = {
   toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
         { list: "ordered" },
         { list: "bullet" },
         { indent: "-1" },
         { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
   ],
};

const formats = [
   "header",
   "bold",
   "italic",
   "underline",
   "strike",
   "blockquote",
   "list",
   "bullet",
   "indent",
   "link",
   "image",
];

const EditUser = () => {
   const { id } = useParams();
   return (
      <>
         <div className="bg-white shadow-lg max-w-screen-md mx-auto pt-2 pb-4 h-screen"></div>
      </>
   );
};

export default EditUser;
