import React, { useState } from 'react';




const categories = [
  { name: 'Travel', image: "https://storage.googleapis.com/erc-photos/DSCF2369.jpg", images: ["https://storage.googleapis.com/erc-photos/DSCF2369.jpg", "https://storage.googleapis.com/erc-photos/DSCF3274.jpg","https://storage.googleapis.com/erc-photos/DSCF5638.jpg","https://storage.googleapis.com/erc-photos/DSCF6104.jpg","https://storage.googleapis.com/erc-photos/DSCF2755.jpg",] },
  { name: 'Freelance Portraits, Graduation & Holiday Memories in Singapore', image: "https://storage.googleapis.com/erc-photos/DSCF8107.jpg", images: ["https://storage.googleapis.com/erc-photos/DSCF8107.jpg", "https://storage.googleapis.com/erc-photos/DSCF8225.jpg","https://storage.googleapis.com/erc-photos/DSCF8259.jpg","https://storage.googleapis.com/erc-photos/DSCF9750.jpg","https://storage.googleapis.com/erc-photos/750_8457DIO.jpg",] },
  { name: 'Product', image: "https://storage.googleapis.com/erc-photos/product/IMG_20200624_140224.jpg", images: ["https://storage.googleapis.com/erc-photos/product/DSC02460-3.jpg", "https://storage.googleapis.com/erc-photos/product/IMG_20200624_140224.jpg","https://storage.googleapis.com/erc-photos/product/IMG_20200703_151610%20(2).jpg","https://storage.googleapis.com/erc-photos/product/IMG_20200703_153038%20(2).jpg","https://storage.googleapis.com/erc-photos/product/_MG_7994.jpg"] },
  { name: 'Street', image: "", images: [] },
  { name: 'Sport', image: "", images: [] },
  { name: 'Stage', image: "", images: [] },
  
  
];


export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 text-center pt-11">
      <div className="mb-8 mt-8">
        <h2 className="text-2xl font-bold m-8">My Photography Work</h2>
        <p className="text-lg">
        For the past six years, I’ve specialized in capturing the beauty of traveling. My portfolio also includes portrait and product photography, with a focus on storytelling and authentic moments.

I offer freelance photography services for couples, families, graduation events, and holiday portraits for visitors exploring Singapore. Whether you're celebrating a milestone or capturing memories of your trip, I’ll help you create timeless images.

Feel free to reach out via Instagram for inquiries and bookings!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="mb-6 lg:mb-0">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light" onClick={() => openModal(category)}>
              <img src={category.image} className="w-full" alt={category.name} />
              {/* <iframe src={category.image} className="w-full h-64" title={category.name} frameBorder="0"></iframe> */}
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </div>
            <h5 className="mb-3 text-lg font-bold">{category.name}</h5>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mx-auto">
            <button className="absolute top-0 right-0 m-4 text-black" onClick={closeModal}>X</button>
            <h2 className="text-2xl font-bold mb-4">{selectedCategory.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory.images.map((image, index) => (
                <img key={index} src={image} className="w-full rounded-lg" alt={`${selectedCategory.name} ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}