
import React from 'react';

const QRCode = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img
        width="180"
        height="180"
        className="mx-auto"
        src="assets/adobe-express-qr-code.png"
      />
      <div className="text-center mt-2 text-sm font-medium text-gray-700">
        lovable.dev
      </div>
    </div>
  );
};

export default QRCode;
