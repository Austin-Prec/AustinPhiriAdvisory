import { useRef, useState, useCallback, useEffect } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Loader2,
} from 'lucide-react';
import { uploadBlogImage } from '../../data/blogHelpers';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

// A toolbar button that runs a document.execCommand action.
// This is the same primitive WordPress's classic and block editors both
// build on for basic formatting — it works directly against the
// contentEditable region with no markup for the writer to see or touch.
function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()} // keep focus/selection in the editor
      onClick={onClick}
      className={`p-2 rounded transition-colors ${
        active
          ? 'bg-navy-500 text-white'
          : 'text-gray-500 hover:bg-gray-100 hover:text-navy-500'
      }`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const lastExternalValue = useRef(value);

  // Only push `value` into the DOM when it changes from OUTSIDE this
  // component (e.g. loading a different post to edit). Otherwise every
  // keystroke would fight the cursor position.
  useEffect(() => {
    if (
      editorRef.current &&
      value !== lastExternalValue.current &&
      value !== editorRef.current.innerHTML
    ) {
      editorRef.current.innerHTML = value;
      lastExternalValue.current = value;
    }
  }, [value]);

  const emitChange = useCallback(() => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      lastExternalValue.current = html;
      onChange(html);
    }
  }, [onChange]);

  const exec = useCallback(
    (command: string, arg?: string) => {
      editorRef.current?.focus();
      document.execCommand(command, false, arg);
      emitChange();
    },
    [emitChange]
  );

  const insertImageAtCursor = useCallback(
    (url: string, altText: string) => {
      editorRef.current?.focus();
      const img = `<img src="${url}" alt="${altText.replace(
        /"/g,
        '&quot;'
      )}" style="max-width:100%;height:auto;border-radius:8px;margin:1.5rem 0;" />`;
      document.execCommand('insertHTML', false, img);
      emitChange();
    },
    [emitChange]
  );

  const handleImageFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith('image/')) return;
      setUploadError(null);
      setIsUploadingImage(true);
      const { url, error } = await uploadBlogImage(file);
      setIsUploadingImage(false);
      if (error || !url) {
        setUploadError(error || 'Image upload failed. Please try again.');
        return;
      }
      insertImageAtCursor(url, file.name.replace(/\.[^.]+$/, ''));
    },
    [insertImageAtCursor]
  );

  // Paste: handle pasted images (e.g. copied from a screenshot tool, Word,
  // or another webpage) as well as pasted rich text. Plain-text fallback
  // avoids dragging in messy external styles.
  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLDivElement>) => {
      const items = e.clipboardData?.items;
      if (items) {
        for (const item of Array.from(items)) {
          if (item.type.startsWith('image/')) {
            e.preventDefault();
            const file = item.getAsFile();
            if (file) handleImageFile(file);
            return;
          }
        }
      }
      // Let rich text (bold, links, headings from Word/Docs/another site)
      // paste through natively, since that's exactly the "paste content
      // right inside" experience being asked for. The browser's default
      // paste handling already does this correctly for contentEditable.
    },
    [handleImageFile]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const files = Array.from(e.dataTransfer.files || []);
      const imageFile = files.find((f) => f.type.startsWith('image/'));
      if (imageFile) {
        handleImageFile(imageFile);
      }
    },
    [handleImageFile]
  );

  const handleLinkClick = useCallback(() => {
    const url = window.prompt('Paste the link URL:');
    if (url) exec('createLink', url);
  }, [exec]);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 px-2 py-1.5">
        <ToolbarButton title="Bold" onClick={() => exec('bold')}>
          <Bold size={17} />
        </ToolbarButton>
        <ToolbarButton title="Italic" onClick={() => exec('italic')}>
          <Italic size={17} />
        </ToolbarButton>
        <ToolbarButton title="Underline" onClick={() => exec('underline')}>
          <Underline size={17} />
        </ToolbarButton>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton
          title="Heading"
          onClick={() => exec('formatBlock', '<h2>')}
        >
          <Heading2 size={17} />
        </ToolbarButton>
        <ToolbarButton
          title="Subheading"
          onClick={() => exec('formatBlock', '<h3>')}
        >
          <Heading3 size={17} />
        </ToolbarButton>
        <ToolbarButton
          title="Quote"
          onClick={() => exec('formatBlock', '<blockquote>')}
        >
          <Quote size={17} />
        </ToolbarButton>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton
          title="Bullet list"
          onClick={() => exec('insertUnorderedList')}
        >
          <List size={17} />
        </ToolbarButton>
        <ToolbarButton
          title="Numbered list"
          onClick={() => exec('insertOrderedList')}
        >
          <ListOrdered size={17} />
        </ToolbarButton>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton title="Add link" onClick={handleLinkClick}>
          <LinkIcon size={17} />
        </ToolbarButton>
        <ToolbarButton
          title="Insert image"
          onClick={() => fileInputRef.current?.click()}
        >
          {isUploadingImage ? (
            <Loader2 size={17} className="animate-spin" />
          ) : (
            <ImageIcon size={17} />
          )}
        </ToolbarButton>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <ToolbarButton title="Undo" onClick={() => exec('undo')}>
          <Undo size={17} />
        </ToolbarButton>
        <ToolbarButton title="Redo" onClick={() => exec('redo')}>
          <Redo size={17} />
        </ToolbarButton>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageFile(file);
          e.target.value = '';
        }}
      />

      {uploadError && (
        <div className="px-4 py-2 bg-crimson-50 text-crimson-500 text-sm border-b border-crimson-100">
          {uploadError}
        </div>
      )}

      {/* Editable area */}
      <div className="relative">
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={emitChange}
          onPaste={handlePaste}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          data-placeholder={placeholder}
          className="editor-content prose prose-lg max-w-none font-arial text-gray-700 leading-relaxed px-6 py-5 min-h-[420px] focus:outline-none"
        />
        {isDragging && (
          <div className="absolute inset-0 bg-navy-500/5 border-2 border-dashed border-navy-400 rounded pointer-events-none flex items-center justify-center">
            <span className="bg-navy-500 text-white text-sm font-semibold px-4 py-2 rounded-lg">
              Drop image to insert
            </span>
          </div>
        )}
      </div>

      <style>{`
        .editor-content:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
        .editor-content h2 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1F3864;
          margin: 1.5rem 0 0.75rem;
        }
        .editor-content h3 {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1F3864;
          margin: 1.25rem 0 0.5rem;
        }
        .editor-content p {
          margin: 0.75rem 0;
        }
        .editor-content ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }
        .editor-content ol {
          list-style: decimal;
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }
        .editor-content blockquote {
          border-left: 3px solid #8B1A1A;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #4b5563;
          font-style: italic;
        }
        .editor-content a {
          color: #8B1A1A;
          text-decoration: underline;
        }
        .editor-content img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
