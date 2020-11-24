import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { SimpleFileUpload } from 'formik-material-ui';
import Container from 'react-bootstrap/Container';
import { withFirebase } from '../Components/Firebase';


const { Dragger } = Upload;

/*
const uploadProps = {
    action: '/upload.do',
    multiple: false,
    data: { a: 1, b: 2 },
    headers: {
      Authorization: '$prefix $token',
    },
    onStart(file) {
      console.log('onStart', file, file.name);
    },
    onSuccess(ret, file) {
      console.log('onSuccess', ret, file.name);
    },
    onError(err) {
      console.log('onError', err);
    },
    onProgress({ percent }, file) {
      console.log('onProgress', `${percent}%`, file.name);
    },
    customRequest({
      action,
      data,
      file,
      filename,
      headers,
      onError,
      onProgress,
      onSuccess,
      withCredentials,
    }) {
      // EXAMPLE: post form-data with 'axios'
      // eslint-disable-next-line no-undef
      const formData = new FormData();
      if (data) {
        Object.keys(data).forEach(key => {
          formData.append(key, data[key]);
        });
      }
      formData.append(filename, file);
  
      axios
        .post(action, formData, {
          withCredentials,
          headers,
          onUploadProgress: ({ total, loaded }) => {
            onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
          },
        })
        .then(({ data: response }) => {
          onSuccess(response, file);
        })
        .catch(onError);
  
      return {
        abort() {
          console.log('upload progress is aborted.');
        },
      };
    },
  };
*/
  function uploadAction(props){
    const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        }
        if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        }
    },
    };
    return(uploadProps);
  };

const INITIAL_STATE = {
    user: '',
    bucket: '',
}

class FileUploader extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            pub: React.useState(true),
        };
    }

    componentDidMount() {
        this.setState({pub: this.props.firebase.user != null});
        this.storage = this.props.firebase.storageU('videos/');
    };

    render() {
        return(
            <Container id="fileuploadContainer">
                <div>
                <Dragger {...this.props}>
                    <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                    </p>
                </Dragger>
            </div>
        </Container>
        );
    }
}



const About = () => {
  return(
    <>

    </>
  )
}  

export default About;