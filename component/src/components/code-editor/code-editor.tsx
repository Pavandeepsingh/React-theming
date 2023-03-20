import React, { useEffect, useRef, useState } from "react";
import "./code-editor.css";
import CopySvg from "../../assets/svg/copy-solid.svg";
import Editor, {
  useMonaco,
  loader,
  Monaco,
  EditorProps,
} from "@monaco-editor/react";

loader
  .init()
  .then((monaco) => console.log("here is the monaco instance:", monaco));

const DisplayCode = (props) => {
  const editorRef = useRef(null);

  const options: EditorProps["options"] = {
    bracketPairColorization: {
      enabled: true,
      independentColorPoolPerBracketType: true,
    },
    wordWrap:'on',
    // formatOnPaste: true,
    // formatOnType: true,
    fontWeight: "900",
    fontSize: 20,
    // scrollbar: {
    //   verticalScrollbarSize: 8,
    //   horizontalScrollbarSize: 8,
    //   verticalSliderSize: 8,
    //   horizontalSliderSize: 8,
    // },
    // lineDecorationsWidth: 0,
    // readOnly: true,
    // matchBrackets: "always",
    // autoIndent: "full",
    // fontFamily: "monospace",
    // automaticLayout: true,
    // selectOnLineNumbers: true,
    minimap: { enabled: false },
    showUnused: false,
    folding: false,
    lineNumbersMinChars: 2,
    scrollBeyondLastLine: false,
    automaticLayout:true
  };

  function handleEditorDidMount(editor, monaco) {
    console.dir(editor, monaco);
    editorRef.current = editor;
  }

  function handleEditorChange(value, event) {}

  function handleEditorWillMount(monaco) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function copyValue() {
    editorRef.current.focus();
    navigator.clipboard.writeText(editorRef.current.getValue()).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  }

  return (
    <>
      <div className="editor-container">
        <img
          src={CopySvg}
          className="copy-icon"
          alt="Copy"
          width="25px"
          height="25px"
          onClick={copyValue}
        ></img>
        <Editor
          height="250px"
          width="60vw"
          theme="light"
          //   defaultLanguage="javascript"
          //   defaultValue=""
          //   value=""
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
          beforeMount={handleEditorWillMount}
          options={options}
          className="editor-css"
          language="javascript"
        />
      </div>
    </>
  );
};

export default DisplayCode;
