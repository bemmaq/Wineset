import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">WINE SET</h2>
          <p className="text-sm mt-4">Сегодня у нас купили 21 товар!</p>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm">Подарочные наборы</p>
            <p className="text-sm">Вино и алкоголь</p>
            <p className="text-sm">Деликатесы</p>
            <p className="text-sm">Бокалы и свечи</p>
          </div>
          <div>
            <p className="text-sm">Политика приватности</p>
            <p className="text-sm">Пользовательское соглашение</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="space-y-2 text-sm">
            <p>📞 1235123123, 151231231231</p>
            <p>📍 Москва, проспект Василия Порика, 13</p>
          </div>
        
          <button className="mt-4 px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
            Связаться с нами
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
