import React from "react";
import styled from "styled-components";
import { colors } from "../../config/colors";

const NewLabels = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-weight: bold;
`;

const MainContainer = styled.form`
  border: 2px solid #956342;
  margin: auto;
  padding: 10px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #956342;
  margin: auto;
  padding: 5px;
`;

const ImgHolder = styled.div`
  width: 80px;
  height: 80px;
`;

class ImageUploader extends React.Component {
  state = {
    files: [],
  };

  fileSelectedHandler = (e) => {
    this.setState({ files: [...this.state.files, ...e.target.files] });
  };

  render() {
    return (
      <MainContainer>
        <div>
          <NewLabels>Uploaded Images ({this.state.files.length})</NewLabels>
        </div>
        <ImagesContainer>
          {this.state.files.map((file) => (
            <ImgHolder>
              <img
                alt="not fount"
                width={"100%"}
                height={"100%"}
                src={URL.createObjectURL(file)}
              />
              <br />
              {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
            </ImgHolder>
          ))}
        </ImagesContainer>
        <input type="file" multiple onChange={this.fileSelectedHandler} />
      </MainContainer>
    );
  }
}

export default ImageUploader;
