import React, { useState } from 'react';
import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { AiOutlineLoading } from 'react-icons/ai';
import AakashImg from '/aakash.jpg';
import PwImg from '/pw.jpg';
import UnacademyImg from '/unacademy.jpg';
import VedantuImg from '/vedantu.jpg';
import NarayanaImg from '/narayana.jpg';
import InfinitylearnImg from '/infinitylearn.jpg';
import MathonGoImg from '/mathongo.jpg';
import PDFEdit from './PDFEdit';  // Adjust the import path as necessary

const PdfCard = ({ pdf, onEdit, onDelete, onClose, isLoading }) => {
  const [isEditing, setIsEditing] = useState(false);

  const institutionImages = {
    "Aakash": AakashImg,
    "Physics Wallah": PwImg,
    "Unacademy": UnacademyImg,
    "Vedantu": VedantuImg,
    "Narayana": NarayanaImg,
    "Infinity Learn": InfinitylearnImg,
    "MathonGo": MathonGoImg,
  };

  const institutionImage = institutionImages[pdf.fileInstitution];

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="relative">
      <div className="border rounded-lg">
        <div className="bg-white w-full h-[10em] flex items-center justify-center">
          {isLoading ? (
            <AiOutlineLoading className='text-4xl animate-spin' />
          ) : (
            institutionImage ? (
              <img src={institutionImage} alt={pdf.fileInstitution} className='w-60' />
            ) : (
              <div className="flex items-center justify-center">
                <img src="/pdf.png" alt="pdf" className='w-24' />
              </div>
            )
          )}
        </div>
        <div className="border-t p-2 h-12 flex items-center">
          <img src="/pdf.png" className='w-6 mr-3' alt="logo" />
          <span className="text-xs font-semibold w-60 line-clamp-1">{pdf.fileName}</span>
          <div className="absolute right-4">
            <button
              className="transition-all hover:bg-gray-100 p-1 text-xl rounded-full text-gray-400"
              onClick={handleEditToggle}
            >
              <IoMdCreate />
            </button>
            <button
              className="transition-all hover:bg-gray-100 p-1 text-xl rounded-full text-gray-400"
              onClick={() => onDelete(pdf.id)}
            >
              <IoMdTrash />
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed h-[100vh] inset-0 p-12 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
          <PDFEdit pdf={pdf} onClose={handleEditToggle} />
        </div>
      )}
    </div>
  );
};

export default PdfCard;
