import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider, Typography, Button } from '@mui/material'
import { MyTypography1, MyPaper1, MyTypography2, MyPaper, darkTheme,MyTypography3 } from './styles';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../actions/action';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';




const Home = () => {
    const [fileData, setFileData] = useState("");
    const [path, setPath] = useState("");
    const [copied, setCopied] = useState(false);

    const uploadRef = useRef();
    const dispatch = useDispatch();

    const data = useSelector(state => { if (state) return state });



    const handleUpload = () => {
        uploadRef.current.click();
    }
    const handleLink = () => {

        setPath(data);
    }

    useEffect(() => {
        if (fileData) {
            let formdata = new FormData();
            formdata.append("name", fileData.name);
            formdata.append("file", fileData);
            setPath("");
            setCopied(false);
            dispatch(uploadFile(formdata));
        }
    }, [fileData,dispatch]);

    return (
        <div className='container'>
            <div className='box'>
                <ThemeProvider theme={darkTheme}>
                    <MyPaper elevation={3}>
                        <MyTypography1 variant="h4" gutterBottom>
                            <ShareIcon style={{ fontSize: "4rem" }} />
                            File Sharing
                        </MyTypography1>
                        <Typography variant="subtitle1" gutterBottom>
                            upload and share the download link
                        </Typography>

                        <Button variant="contained" onClick={handleUpload} startIcon={<FileUploadIcon />} sx={{
                            bgcolor: "#3267C0",
                            color: "white",
                            width: "150px",
                            ":hover": {
                                bgcolor: "#AF5",
                                color: "black"
                            }
                        }}>upload file</Button>
                        <input type='file' ref={uploadRef} style={{ display: "none" }} onChange={(e) => setFileData(e.target.files[0])} />

                        <Typography variant='body2' gutterBottom>{fileData.name ? fileData.name : null}</Typography>
                        <Button variant="contained" onClick={handleLink} startIcon={<FileUploadIcon />} sx={{
                            bgcolor: "#3267C0",
                            color: "white",
                            width: "180px",
                            ":hover": {
                                bgcolor: "#AF5",
                                color: "black"
                            }
                        }}>Generate link</Button>
                        <MyPaper1 elevation={2}>
                            <MyTypography3 variant='body1' gutterBottom>{path}</MyTypography3>
                            {
                                path ? (<CopyToClipboard text={path} onCopy={() => setCopied(true)} >
                                    <ContentCopyIcon style={{ cursor: "pointer" }} />
                                </CopyToClipboard>) : null
                            }
                            {
                                copied ? <MyTypography2 variant='subtitle2'>copied!</MyTypography2> : null
                            }

                        </MyPaper1>
                    </MyPaper>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Home
