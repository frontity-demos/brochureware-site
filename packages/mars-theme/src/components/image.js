import React from "react";
import { styled } from "frontity";
// import photo from "./assets/balloons.jpg"

// see: https://webpack.js.org/guides/dependency-management/
function importImages(requireContextFunction) {
  console.log(requireContextFunction)
  let images = {};
  requireContextFunction.keys().forEach((item) => { images[item.replace('./', '')] = requireContextFunction(item); });
  console.log(images)
  return images;
}
const images = importImages(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

const ImageElement = ({image}) => {
  const filename = image + '.jpg'
  return <Image src={images[filename]} />
}

export default ImageElement;

const Image = styled.img`
  height: 300px;
  border: 5px solid orange;
`;