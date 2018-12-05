import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
registerPlugin(FilePondPluginImagePreview);

const Form = props => (
  <div>
    <FilePond
      onprocessfile={(error, file) => {
        if (error == null) props.clicked();
      }}
    />
  </div>
);

export default Form;
