import React from 'react'
import { ImageGallery } from "react-image-grid-gallery";
import allData from '../data/allData.json';
const imagesArray = allData.images;

const ImageGallery1 = () => {
  return (
    <div className='w-fit'>
      <ImageGallery
      className="w-[800px]"
        imagesInfoArray={imagesArray}
        columnCount={"auto"}
        columnWidth={230}
        gapSize={24}
      />
    </div>
  )
}

export default ImageGallery1