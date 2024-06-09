import React, { useState, useRef, useEffect } from 'react';

const PDFViewer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [textItems, setTextItems] = useState([]);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [markerColor, setMarkerColor] = useState('#000000');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = markerColor;
    ctx.lineWidth = 3;
  }, [markerColor]);

  const nextPage = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleTextAdd = () => {
    // Logic to add text to the PDF
    const newText = window.prompt('Enter text:');
    if (newText) {
      setTextItems([...textItems, { text: newText, pageNumber }]);
    }
  };

  const handleTextRemove = () => {
    // Logic to remove text from the PDF
    const indexToRemove = window.prompt('Enter index of text to remove:');
    if (indexToRemove && indexToRemove >= 0 && indexToRemove < textItems.length) {
      setTextItems(prevItems => prevItems.filter((item, index) => index !== parseInt(indexToRemove)));
    }
  };

  const handleCanvasMouseDown = (event) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handleCanvasMouseMove = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleCanvasMouseUp = () => {
    setIsDrawing(false);
  };

  const handleColorChange = (event) => {
    setMarkerColor(event.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={prevPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
      <div>
        <canvas
          ref={canvasRef}
          width={600}
          height={800}
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleCanvasMouseMove}
          onMouseUp={handleCanvasMouseUp}
        />
      </div>
      <div>
        <input type="color" value={markerColor} onChange={handleColorChange} />
      </div>
      <div>
        <button onClick={handleTextAdd}>Add Text</button>
        <button onClick={handleTextRemove}>Remove Text</button>
      </div>
      <div>
        {textItems.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
      </div>
      <div>
        <p>Page Number: {pageNumber}</p>
      </div>
    </div>
  );
};

export default PDFViewer;
