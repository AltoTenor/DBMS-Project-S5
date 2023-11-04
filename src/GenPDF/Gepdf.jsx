import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default function Genpdf(ClubName,rows){
    const doc = new jsPDF({
        orientation: "p", 
        unit: "pt",
        format: "letter" 
    });
    const sizes = {
        xs: 10, 
        sm : 14, 
        p: 16, 
        h3: 18, 
        h2: 20, 
        h1: 22
    };
    const fonts = {
        times: 'Times', 
        helvetica: 'Helvetica'
    };
    const margin = 0.5; // inches on a 8.5 x 11 inch sheet.
    const verticalOffset = margin;
    var columns = [
        {title: "Heading1", dataKey: "col1"},
        {title: "Heading2", dataKey: "col2"}, 
        {title: "Heading3", dataKey: "col3"},
        {title: "Heading4", dataKey: "col4"},
        {title: "Heading5", dataKey: "col5"},
        {title: "Heading6", dataKey: "col6"},
    ];
    
    // btn.addEventListener("click", () => {
    doc.autoTable(columns, rows, {
        styles: {
        fillColor: [51,51,51],
        lineColor: 240, 
        lineWidth: 1,
        },
        columnStyles: {
        col1: {fillColor: false},
        col2: {fillColor: false},
        col3: {fillColor: false},
        col4: {fillColor: false},
        col5: {fillColor: false},
        col6: {fillColor: false},        
        },
        margin: {top: 60},
        addPageContent: function(data) {
        doc.text("", 40, 30);
        }
    });
    doc.save(ClubName+"Report.pdf");
    // });
}