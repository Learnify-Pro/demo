import React, { useState, useEffect } from 'react';
import { IoIosDocument, IoIosLink } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { db } from '../../../firebase';  // Adjust the import path as necessary
import { doc, updateDoc } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import AakashImg from '/aakash.jpg';
import PwImg from '/pw.jpg';
import UnacademyImg from '/unacademy.jpg';
import VedantuImg from '/vedantu.jpg';
import NarayanaImg from '/narayana.jpg';
import InfinitylearnImg from '/infinitylearn.jpg';
import MathonGoImg from '/mathongo.jpg';

const PDFEdit = ({ pdf, onClose }) => {
  const [tags, setTags] = useState(pdf.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(pdf.fileCategory || "IIT-JEE");
  const [selectedSubject, setSelectedSubject] = useState(pdf.fileSubject || "");
  const [selectedInstitution, setSelectedInstitution] = useState(pdf.fileInstitution || "");
  const [errors, setErrors] = useState({});
  const [fileData, setFileData] = useState({
    fileName: pdf.fileName,
    fileURL: pdf.fileURL
  });
  const [institutionImage, setInstitutionImage] = useState('');

  const institutionImages = {
    "Aakash": AakashImg,
    "Physics Wallah": PwImg,
    "Unacademy": UnacademyImg,
    "Vedantu": VedantuImg,
    "Narayana": NarayanaImg,
    "Infinity Learn": InfinitylearnImg,
    "MathonGo": MathonGoImg,
  };

  useEffect(() => {
    setInstitutionImage(institutionImages[selectedInstitution]);
  }, [selectedInstitution]);

  const handleTagInputChange = (e) => setTagInput(e.target.value);

  const handleTagInputKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubject(""); // Reset subject when category changes
  };

  const handleInstitutionChange = (e) => {
    setSelectedInstitution(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!fileData.fileName) {
      newErrors.fileName = 'File Name is required';
    }
    if (!fileData.fileURL) {
      newErrors.fileURL = 'File URL is required';
    }
    if (!selectedCategory) {
      newErrors.fileCategory = 'File Category is required';
    }
    if (!selectedSubject) {
      newErrors.fileSubject = 'File Subject is required';
    }
    if (!selectedInstitution) {
      newErrors.fileInstitution = 'Institution is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const docRef = doc(db, 'FileLinks', pdf.id);
        await updateDoc(docRef, {
          fileName: fileData.fileName,
          fileURL: fileData.fileURL,
          fileCategory: selectedCategory,
          fileSubject: selectedSubject,
          fileInstitution: selectedInstitution,
          tags: tags,
        });
        toast.success("Form updated successfully", {
          duration: 3000, // 3 seconds
          onClose: () => onClose(), // Close the modal after the toast completes
        });
      } catch (error) {
        console.error("Error updating document: ", error);
        toast.error("Error updating document");
      }
    }
  };

  const InputLinks = [
    { id: 1, label: 'Enter File Name', type: "text", icon: <IoIosDocument />, name: 'fileName' },
    { id: 2, label: 'Enter File URL', type: "text", icon: <IoIosLink />, name: 'fileURL' },
    { id: 3, label: 'Enter File Category', type: "select", options: ["IIT-JEE", "NEET", "TSBIE", "ALL"], icon: <BiCategory />, name: 'fileCategory' },
    { id: 4, label: 'Enter File Subject', type: "select", options: ["JEE-MAINS", "JEE-ADVANCED", "MAINS+ADVANCED", "NEET", "Mathematics", "Physics", "Chemistry", "Zoology", "Botany"], icon: <BiCategory />, name: 'fileSubject' },
    { id: 5, label: 'Select Institution', type: "select", options: ["MathonGo", "Aakash", "Physics Wallah", "Unacademy", "Vedantu", "Narayana", "Infinity Learn",], icon: <BiCategory />, name: 'fileInstitution' },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border bg-white p-8 rounded-xl w-[23em] shadow-2xl">
        <Toaster />
        <h1 className="p-4 font-semibold text-2xl">Edit PDF</h1>
        <form className="p-2" onSubmit={handleSubmit}>
          {InputLinks.map((input, index) => (
            <div key={index} className="mb-4 relative">
              {input.icon && (
                <span className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
                  {input.icon}
                </span>
              )}
              {input.type === "select" ? (
                input.label === 'Enter File Category' ? (
                  <div>
                    <select
                      id={input.name}
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      className={`border p-2 w-full rounded-md ${input.icon ? 'pl-14' : ''}`}
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                    >
                      {input.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.fileCategory && <span className="text-red-500 text-sm">{errors.fileCategory}</span>}
                  </div>
                ) : (
                  <div>
                    <select
                      id={input.name}
                      value={input.name === 'fileSubject' ? selectedSubject : selectedInstitution}
                      onChange={(e) => {
                        if (input.name === 'fileSubject') {
                          setSelectedSubject(e.target.value);
                        } else {
                          handleInstitutionChange(e);
                        }
                      }}
                      className={`border p-2 w-full rounded-md ${input.icon ? 'pl-14' : ''}`}
                      style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                    >
                      {input.options.map((option, optionIndex) => (
                        <option
                          key={optionIndex}
                          value={option}
                          disabled={
                            (selectedCategory === 'NEET' && option === 'Mathematics') ||
                            (selectedCategory === 'IIT-JEE' && (option === 'Zoology' || option === 'Botany'))
                          }
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    {input.name === 'fileSubject' && errors.fileSubject && <span className="text-red-500 text-sm">{errors.fileSubject}</span>}
                    {input.name === 'fileInstitution' && errors.fileInstitution && <span className="text-red-500 text-sm">{errors.fileInstitution}</span>}
                  </div>
                )
              ) : (
                <div>
                  <input
                    id={input.name}
                    type={input.type}
                    required
                    placeholder={input.label}
                    className={`border p-2 w-full rounded-md ${input.icon ? 'pl-14' : ''}`}
                    value={fileData[input.name]}
                    onChange={(e) => setFileData({ ...fileData, [input.name]: e.target.value })}
                  />
                  {errors[input.name] && <span className="text-red-500 text-sm">{errors[input.name]}</span>}
                </div>
              )}
            </div>
          ))}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Enter tags and press Enter"
              value={tagInput}
              onChange={handleTagInputChange}
              onKeyDown={handleTagInputKeyDown}
              className="border p-2 w-full rounded-md pl-4 text-sm"
            />
            <div className="flex flex-wrap mt-2 p-4 rounded-xl">
              {tags.map((tag, index) => (
                <div key={index} className="bg-gray-200 text-black px-4 py-1 rounded-full mr-2 mt-2 flex items-center">
                  <span>{tag}</span>
                  <button
                    type="button"
                    className="ml-2 text-gray-600"
                    onClick={() => removeTag(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-blue-600 p-3 rounded-md text-white w-full">Update</button>
        </form>
        <div className="p-2">
          <button className="bg-red-600 p-3 rounded-md text-white w-full" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PDFEdit;
