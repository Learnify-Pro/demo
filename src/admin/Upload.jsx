import React, { useState } from 'react';
import { IoIosDocument, IoIosLink } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { db } from '../../firebase';  // Adjust the import path as necessary
import { collection, addDoc } from 'firebase/firestore';
import Button from '../pages/reusable/Button';

const Upload = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("IIT-JEE");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};
    if (!document.getElementById('fileName').value) {
      newErrors.fileName = 'File Name is required';
    }
    if (!document.getElementById('fileURL').value) {
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
        await addDoc(collection(db, 'FileLinks'), {
          fileName: document.getElementById('fileName').value,
          fileURL: document.getElementById('fileURL').value,
          fileCategory: selectedCategory,
          fileSubject: selectedSubject,
          fileInstitution: selectedInstitution,
          tags: tags,
        });
        console.log("Form submitted successfully");
        // Reset form after submission
        setTags([]);
        setTagInput('');
        setSelectedCategory('IIT-JEE');
        setSelectedSubject('');
        setSelectedInstitution('');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const InputLinks = [
    { id: 1, label: 'Enter File Name', type: "text", icon: <IoIosDocument />, name: 'fileName' },
    { id: 2, label: 'Enter File URL', type: "text", icon: <IoIosLink />, name: 'fileURL' },
    { id: 3, label: 'Enter File Category', type: "select", options: ["IIT-JEE", "NEET", "TSBIE", "ALL"], icon: <BiCategory />, name: 'fileCategory' },
    { id: 4, label: 'Enter File Subject', type: "select", options: ["JEE-MAINS", "JEE-ADVANCED", "MAINS+ADVANCED", "NEET", "Mathematics", "Physics", "Chemistry", "Zoology", "Botany"], icon: <BiCategory />, name: 'fileSubject' },
    { id: 5, label: 'Select Institution', type: "select", options: ["Aakash", "Physics Wallah", "Unacademy", "Vedantu", "Narayana", "Infinity Learn", "MathonGo"], icon: <BiCategory />, name: 'fileInstitution' },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border p-8 rounded-xl w-[23em] shadow-2xl">
        <h1 className='p-4 font-semibold text-2xl'>Upload <span className='text-xs text-gray-400'>Secondary</span></h1>
        <form className='p-2' onSubmit={handleSubmit}>
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
                          setSelectedInstitution(e.target.value);
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
          <button className='bg-blue-600 p-3 rounded-md text-white w-full'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
