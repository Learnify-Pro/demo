import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Adjust the import path as necessary
import { collection, getDocs, deleteDoc, doc, query, where, limit, startAfter } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Edit from './components/PDFEdit'; // Assuming Edit component is in the same directory
import PdfCard from './components/PDFCard'; // Import the reusable PdfCard component
import LoadMore from './components/LoadMore'; // Import the LoadMore component

const Admin = () => {
  const [pdfs, setPdfs] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [moreToLoad, setMoreToLoad] = useState(true); // Track if there are more PDFs to load
  const [filters, setFilters] = useState({ institution: '', course: '' });

  const institutions = [
    "All", "MathonGo", "Aakash", "Physics Wallah", "Unacademy", "Vedantu", "Narayana", "Infinity Learn"
  ];

  const courses = [
    "All", "JEE-MAINS", "JEE-ADVANCED", "MAINS+ADVANCED", "NEET", "Mathematics", "Physics", "Chemistry", "Zoology", "Botany"
  ];

  useEffect(() => {
    fetchPdfs();
  }, [filters]);

  const fetchPdfs = async () => {
    setLoading(true);
    let pdfQuery = query(collection(db, 'FileLinks'), limit(10));

    if (filters.institution && filters.institution !== "All") {
      pdfQuery = query(pdfQuery, where('fileInstitution', '==', filters.institution));
    }
    if (filters.course && filters.course !== "All") {
      pdfQuery = query(pdfQuery, where('fileSubject', '==', filters.course));
    }

    const querySnapshot = await getDocs(pdfQuery);
    const pdfList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPdfs(pdfList);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setMoreToLoad(querySnapshot.docs.length === 10); // Assume there are more PDFs if we got the limit
    setLoading(false);
  };

  const loadMorePdfs = async () => {
    if (loading || !moreToLoad) return;
    setLoading(true);
    let pdfQuery = query(
      collection(db, 'FileLinks'),
      startAfter(lastVisible),
      limit(10)
    );

    if (filters.institution && filters.institution !== "All") {
      pdfQuery = query(pdfQuery, where('fileInstitution', '==', filters.institution));
    }
    if (filters.course && filters.course !== "All") {
      pdfQuery = query(pdfQuery, where('fileSubject', '==', filters.course));
    }

    const querySnapshot = await getDocs(pdfQuery);
    const pdfList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPdfs(prevPdfs => [...prevPdfs, ...pdfList]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setMoreToLoad(querySnapshot.docs.length === 10); // Update if there are more PDFs to load
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this document?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'FileLinks', id));
        setPdfs(pdfs.filter(pdf => pdf.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleEdit = (pdf) => {
    setSelectedPdf(pdf);
    setShowEditModal(true);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setSelectedPdf(null);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
      <div className="flex flex-wrap mb-4">
        <motion.select
          name="institution"
          value={filters.institution}
          onChange={handleFilterChange}
          className="mr-2 p-2 border rounded"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {institutions.map((inst) => (
            <option key={inst} value={inst}>{inst}</option>
          ))}
        </motion.select>
        <motion.select
          name="course"
          value={filters.course}
          onChange={handleFilterChange}
          className="p-2 border rounded"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {courses.map((course) => (
            <option key={course} value={course}>{course}</option>
          ))}
        </motion.select>
      </div>
      <div className="flex items-center content-center justify-center flex-wrap gap-4">
        {pdfs.map((pdf) => (
          <motion.div
            key={pdf.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PdfCard pdf={pdf} onEdit={handleEdit} onDelete={handleDelete} />
          </motion.div>
        ))}
      </div>
      {loading && (
        <div className="flex justify-center mt-4">
          <img src="/spinner.svg" alt="Loading..." className="w-7 h-7 spinner" />
        </div>
      )}
      {!loading && moreToLoad && <LoadMore onLoadMore={loadMorePdfs} />}
      {showEditModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>×</button>
            <Edit pdf={selectedPdf} onClose={closeModal} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Admin;
