import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';

const QuillNoSSR = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>...</p>,
});

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
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return <QuillNoSSR theme="bubble" value={value} onChange={setValue} modules={modules} placeholder="Write something epic... select text to format!" />;
}
