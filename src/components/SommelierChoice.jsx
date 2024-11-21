import React from 'react';

const SommelierChoice = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#4d001d] to-[#4d001d] text-white px-6 py-10 lg:flex lg:items-center">
      {/* Left Section: Image */}
      <div className="lg:w-1/2">
        <img
          src="https://s3-alpha-sig.figma.com/img/e6d7/e1bb/437cbda073c5e36a056ac1f21e11cba6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adHVP-9HWv597IOId8k03QvqAn9KVf7CYoNxuZ4UAOWOgAZ6pzXwlixAR3-WzLRGZLanoWCC8P2WRNoehV5CK-icD1XXT1V6qibTsF~LN21GjHIqz0nLfcmvTRXgX1ghJ5JZfoM1b2vq76l3OkP9yKv5Misl~ZMgvvQW~AGG-dk-loHsFs3qANiePIaC13qh2fbOGgeSgieWseKlE2pXyu2AryKiOVgN7Cz~fc8gZie4MhrJMThgk0Qvz37DzawTe9iQKVNjt9BAwXvKbxdPykhl0dfcT0qbeW-IkvyIjgqhPUl~RY7s3pkWCDxutIZou2zKo2GoZY5PXUA4AD32vQ__"
          alt="Sommelier holding a wine glass"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Text and Button */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 px-4 py-6">
        <h2 className="text-lg italic font-serif">Sommelier Choice</h2>
        <h1 className="text-3xl font-bold">
          НЕ УВЕРЕНЫ В ВЫБОРЕ?
          <br />
          МЫ ГОТОВЫ ПОМОЧЬ!
        </h1>
        <button className="mt-4 px-6 py-3 text-sm font-semibold bg-white text-[#4d001d] rounded hover:bg-gray-100">
          ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
        </button>
      </div>
    </section>
  );
};

export default SommelierChoice;
