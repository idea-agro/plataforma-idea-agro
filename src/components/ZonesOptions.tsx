import React, { useState } from 'react';
import { AddZoneModal } from "./AddZoneModal";
import { DeleteZonesModal } from "./DeleteZonesModal";
import jsPDF from 'jspdf';


export function ZonesOptions() {
		const [fileName, setFileName] = useState();
	  
		const handleFileInputChange = (event) => {
		  const fileInput = event.target;
		  if (fileInput.files.length > 0) {
			const fileName = fileInput.files[0].name;
			setFileName(fileName);
		  } 
		};
	  
		const handleArrowUpClick = () => {
		  // Crear un nuevo documento PDF
		  const doc = new jsPDF();
		  // Agregar texto al PDF
		  doc.text('Texto de ejemplo en el PDF', 10, 10);
		  // Guardar el PDF
		  doc.save('ejemplo.pdf');
		};
	  
		return (
		  <nav className="flex text-1sm [&>i]:inline-block font:medium justify-between items-center [&>i]:py-2 [&>i]:px-1 ">
			<i className="mx-2 fa-solid fa-cloud-arrow-up hover-scale" onClick={handleArrowUpClick} />
			<label htmlFor="fileInput" className="mx-2">
			  <i className="fa-solid fa-cloud-arrow-down hover-scale" />
			  <input
				type="file"
				id="fileInput"
				className="file-input"
				accept=".pdf,.doc,.docx"
				onChange={handleFileInputChange}
				style={{ display: 'none' }}
			  />
			</label>
			<i><AddZoneModal /></i>
			<i><DeleteZonesModal /></i>
			<span id="fileName" className="file-name">{fileName}</span>
		  </nav>
		);
	  };