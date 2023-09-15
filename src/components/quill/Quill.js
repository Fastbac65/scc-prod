// import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Quill(value, setValue) {
  // const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [3, 4, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      ['link'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      // [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['clean'],
    ],
  };

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
