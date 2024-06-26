import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { preview } from 'vite';

const StandardMessageForm = () => {
  const [MessageChannel,setMessage] = useState("");
  const [attachment, setAttachment ] = useState("");
  const [preview , setPreview ] = useState("");

  const handleChange = (e) =>setMessage(e.target.value)

 return  (
 <div className="message-form-container">
    {preview && (
      <div className="message-form-preview"> 
        <img alt="message-form-preview" 
        className="message-form-preview-image" 
        src={preview} 
        onLoad={() => URL.revokeObjectURL(preview)} 
        />

        <XMarkIcon
          className="message-from-icon-x"
          onClick={()=> {
            setPreview("");
            setAttachment("");
          }}
        />
        </div>
    )}
      <div className="message-form">
        <div className="messag-form-input-container">
          <input  
            className="message-from-input"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Send a message..."
            />
        </div>
        <div className="message-form-icons">
          <Dropzone 
          acceptedFiles=".jpg.jpeg,.png"
          multiple={false}
          noClick={true}
          onDrop={(acceptedFiles) =>{
            setAttachment(acceptedFiles[0]);
            setPreview(URL.createObjectURL(acceptedFiles[0]));
          } }
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon 
                 className="message-form-icon-clip"
                 onClick={open} />
              </div>
            )}
            </Dropzone>

            <hr className="vertical-line"/>
            <PaperAirplaneIcon
              className="message-form-icon-airplane"
              onClick={()=>{
                setPreview("");
                //handleSubmit();
              }} 
              />
        </div>
      </div>
    </div>
    );
  };
  

export default StandardMessageForm;
