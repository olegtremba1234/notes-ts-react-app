import React from 'react';

interface TableProps {
  data: any[]; 
  columns: string[]; 
  renderRow: (item: any) => JSX.Element;
}

const Table: React.FC<TableProps> = ({ data, columns, renderRow }) => {
    return (
    <div className="mt-5 w-full rounded-md shadow-md overflow-hidden">
        <table className="w-full border-collapse border border-solid border-gray-300 text-gray-900 bg-white">
            <thead className=' bg-gray-100 font-bold'>
                <tr>
                {columns.map((column) => (
                   <th className=' p-2 border-b border-gray-300 text-center' key={column}>{column}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
                ))}
            </tbody>
        </table>
    </div>        
  );
};

export default Table;
