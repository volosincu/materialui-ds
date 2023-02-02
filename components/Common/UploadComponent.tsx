import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

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
  const [noClick, setNoClick] = useState(false);

  const [files, setFiles] = useState([]);

  const onDragEnter = useCallback(
    (acceptedFiles: any) => {
      setDragOn(true);
      setFiles(acceptedFiles);
    },
    [files],
  );

  const onDragLeave = useCallback(() => {
    setDragOn(false);
  }, []);

  const onDropAccepted = useCallback(
    (filesAcc: any) => {
      setDragOn(false);
      setNoClick(true);
      onChange(filesAcc);
      setFiles(filesAcc);
    },
    [files],
  );

  const onDropRejected = useCallback((ev: any) => {
    setDragOn(false);
    onErr(ev[0].errors);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDragLeave,
    onDragEnter,
    onDropAccepted,
    onDropRejected,
    multiple: false,
    maxSize: 250000,
    maxFiles: 1,
    noClick,
  });

  const fsItem = files.map((file: any) => (
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
    </FileItem>
  ));

  return (
    <Box sx={{ position: 'relative' }}>
      {noClick && (
        <button
          style={{
            position: 'absolute',
            width: '20px',
            top: '3px',
            right: '6px',
            padding: '0px 1px 0px 0px',
            borderRadius: '10px',
            border: 'none',
            height: '19px',
            zIndex: '15',
          }}
          type="button"
          onClick={() => {
            setFiles([]);
            setNoClick(false);
          }}
        >
          x
        </button>
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {files && files.length === 0 ? (
          <MuiLabel highlight={dragOn}>
            {label || 'Drag and drop some files here, or click to select files'}
          </MuiLabel>
        ) : (
          <ul>{fsItem}</ul>
        )}
      </div>
    </Box>
  );
}
