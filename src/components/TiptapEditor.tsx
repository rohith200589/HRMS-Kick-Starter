// src/components/TiptapEditor.tsx
// A rich text editor component using Tiptap with basic formatting options. https://tiptap.dev/
'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import Placeholder from "@tiptap/extension-placeholder";
import {
  IconBold, IconItalic, IconH1, IconH2, IconH3,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { useMemo, useEffect } from 'react';

// Define the component's props
interface TiptapEditorProps {
  content: string;
  onContentChange: (newContent: string) => void;
  placeholder?: string;
}

const TiptapEditor = ({ content, onContentChange, placeholder }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit, Bold.configure(), Italic.configure(), Heading.configure({ levels: [1, 2, 3] }),
      Placeholder.configure({ placeholder: placeholder || "Start typing..." }),
    ],
    content: content,
    onUpdate: ({ editor }) => onContentChange(editor.getHTML()),
    editorProps: {
      attributes: { class: 'min-h-[150px] p-4 bg-background border border-input rounded-md focus-visible:ring-ring focus-visible:ring-[3px] focus:outline-none prose max-w-none' },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      // CHANGE: The second argument is now an object, which fixes the TypeScript error.
      editor.commands.setContent(content, { emitUpdate: false });
    }
  }, [content, editor]);

  const getHeaderVariant = (level: number) => editor?.isActive('heading', { level }) ? 'default' : 'outline';
  const isBoldActive = useMemo(() => editor?.isActive('bold'), [editor]);
  const isItalicActive = useMemo(() => editor?.isActive('italic'), [editor]);

  return (
    <div className='flex flex-col gap-2'>
      <EditorContent editor={editor} />
      <style>{`.ProseMirror p.is-empty::before { content: attr(data-placeholder); float: left; color: var(--muted-foreground); pointer-events: none; height: 0; }`}</style>
      <div className='flex gap-1 pb-2'>
        <Button onClick={() => editor?.chain().focus().toggleBold().run()} variant={isBoldActive ? 'default' : 'outline'} size='sm'><IconBold className='h-4 w-4' /></Button>
        <Button onClick={() => editor?.chain().focus().toggleItalic().run()} variant={isItalicActive ? 'default' : 'outline'} size='sm'><IconItalic className='h-4 w-4' /></Button>
        <Button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} variant={getHeaderVariant(1)} size='sm'><IconH1 className='h-4 w-4' /></Button>
        <Button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} variant={getHeaderVariant(2)} size='sm'><IconH2 className='h-4 w-4' /></Button>
        <Button onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} variant={getHeaderVariant(3)} size='sm'><IconH3 className='h-4 w-4' /></Button>
      </div>
    </div>
  );
};

export default TiptapEditor;