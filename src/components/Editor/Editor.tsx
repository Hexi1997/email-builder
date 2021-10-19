import cn from 'classnames';
import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';

import styles from './Editor.module.less';

interface EditorProps {
  className?: string;
}

export function Editor(props: EditorProps) {
  const { className } = props;
  const emailEditorRef = useRef<EmailEditor | null>(null);

  const exportHtml = () => {
    if (emailEditorRef && emailEditorRef.current) {
      const editor = emailEditorRef.current;
      editor.exportHtml((data) => {
        const { design, html } = data;
        console.log('exportHtml', html);
        console.log('design', design);
      });
    }
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef?.current?.loadDesign(templateJson);
  };

  return (
    <div className={cn(styles.Editor, className)}>
      <EmailEditor
        style={{ height: '100vh' }}
        ref={emailEditorRef}
        onLoad={onLoad}
      />
    </div>
  );
}
