import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

type CssProps = {
  [key: string]: string | boolean | number;
};

export const shouldForwardProp = <T extends Record<string, unknown>>(
  props: Array<keyof T>,
  prop: PropertyKey,
): boolean => !props.includes(prop as string);

const MuiLabel = styled(Typography, {
  shouldForwardProp: (props) => props !== 'highlight',
})<CssProps>((props: any) => ({
  height: '26px',
  width: '100%',
  marginTop: '5px',
  fontSize: '0.9em',
  padding: '3px 7px',
  borderRadius: '5px',
  backgroundColor: props.highlight ? '#c4e6ff' : '#fff',
  border: props.highlight ? '1px solid #1976d2' : '1px solid #fff',
}));

const FileItem = styled('li')({
  height: '26px',
  width: '100%',
  marginTop: '5px',
  fontSize: '0.9em',
  padding: '7px 7px',
  borderRadius: '5px',
  backgroundColor: '#c4e6ff',
  border: '1px solid #1976d2',
});

const UploadTypes = {
  onErr: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
export type UploadComponentPropTypes = PropTypes.InferProps<typeof UploadTypes>;

export default function UploadComponent(props: UploadComponentPropTypes) {
  const { onErr, onChange, label } = props;
  const [dragOn, setDragOn] = useState(false);

  const onDragEnter = useCallback((ev: any) => {
    console.log('onDragEnter', ev);
    setDragOn(true);
  }, []);

  const onDragLeave = useCallback((ev: any) => {
    console.log('onDragLeave', ev);
    setDragOn(false);
  }, []);

  const onDropAccepted = useCallback((files: any) => {
    setDragOn(false);
    onChange(files);
  }, []);

  const onDropRejected = useCallback((ev: any) => {
    setDragOn(false);
    onErr(ev[0].errors);
  }, []);

  const { isDragReject, isDragAccept, acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      onDragLeave,
      onDragEnter,
      onDropAccepted,
      onDropRejected,
      multiple: false,
      maxSize: 250000,
      maxFiles: 1,
    });

  console.log(isDragReject, isDragAccept);

  acceptedFiles.map((file: any) => console.log(file.path));

  const files = acceptedFiles.map((file: any) => (
    <FileItem key={file.name}>
      <div
        style={{
          display: 'inline-block',
          width: '92%',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {file.name}
      </div>
      <button
        style={{
          display: 'inline-block',
          width: '20px',
          position: 'relative',
          top: '-5px',
          padding: '0px 1px 0px 0px',
          borderRadius: '10px',
          border: 'none',
          height: '19px',
        }}
        type="button"
      >
        x
      </button>
    </FileItem>
  ));

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {acceptedFiles && acceptedFiles.length === 0 ? (
        <MuiLabel highlight={dragOn}>
          {label || 'Drag and drop some files here, or click to select files'}
        </MuiLabel>
      ) : (
        <ul>{files}</ul>
      )}
    </div>
  );
}
