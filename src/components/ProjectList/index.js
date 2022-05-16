import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Space RPG',
      category: 'projects',
      description:
        'Based on the internet sensation “Farm RPG” - SPACE-RPG allows you to go on the text based adventure of a lifetime.. The user will be able to add expenses and deposits to their budget with or without a internet connection.',
      website: 'https://stormy-hollows-10377.herokuapp.com/'
    },
    {
      name: 'Bucket List',
      category: 'projects',
      description:
        'The Bucket List app allows the user to make a list of all the things they dream to accomplish, acquire, or experience.',
      website: 'https://bucket-list-rutgers.herokuapp.com'
    },
    {
      name: 'TimeZone',
      category: 'projects',
      description:
        'The application allows the user to view their local time and the time in other locations of the world as well as sunrise time.',
      website: 'https://toddbreid.github.io/Timezone-Project'
    }

  ]);


  const currentPhotos = photos.filter(photo => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }



  return (
    <div>
      {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
