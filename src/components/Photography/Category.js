import React, { useState } from 'react';




const categories = [
  { name: 'Freelance Portraits, Graduation & Holiday Memories in Singapore', image: "https://storage.googleapis.com/erc-photos/freelances/DSCF8107.jpg", images: ["https://storage.googleapis.com/erc-photos/freelances/DSCF8107.jpg", "https://storage.googleapis.com/erc-photos/freelances/DSCF8225.jpg","https://storage.googleapis.com/erc-photos/freelances/DSCF8259.jpg","https://storage.googleapis.com/erc-photos/freelances/DSCF9750.jpg","https://storage.googleapis.com/erc-photos/freelances/750_8457DIO%20copy.png","https://storage.googleapis.com/erc-photos/freelances/DSCF7575-Enhanced-NR.jpg","https://storage.googleapis.com/erc-photos/freelances/GraduationShelen.jpg","https://storage.googleapis.com/erc-photos/freelances/DSCF9541.jpg","https://storage.googleapis.com/erc-photos/freelances/DSCF9469%20(1).jpg","https://storage.googleapis.com/erc-photos/freelances/DSCF9686.jpg","https://storage.googleapis.com/erc-photos/freelances/DSCF8051.jpg"] },
  { name: 'Travel', image: "https://storage.googleapis.com/erc-photos/travel/DSCF2369.jpg", images: ["https://storage.googleapis.com/erc-photos/travel/DSCF2369.jpg", "https://storage.googleapis.com/erc-photos/travel/DSCF3274.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF5638.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF6104.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF2755.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF6170.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF5507.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF6901.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF6925.jpg","https://storage.googleapis.com/erc-photos/travel/DSCF6970.jpg","https://storage.googleapis.com/erc-photos/product/DSC02531.jpg","https://storage.googleapis.com/erc-photos/product/DSC09917.jpg"] },
  { name: 'Product', image: "https://storage.googleapis.com/erc-photos/product/IMG_20200624_140224%20copy.png", images: ["https://storage.googleapis.com/erc-photos/product/DSC02460-3.jpg", "https://storage.googleapis.com/erc-photos/product/IMG_20200624_140224%20copy.png","https://storage.googleapis.com/erc-photos/product/IMG_20200703_151610%20(2).jpg","https://storage.googleapis.com/erc-photos/product/IMG_20200703_153038%20(2).jpg","https://storage.googleapis.com/erc-photos/product/_MG_7994.jpg","https://storage.googleapis.com/erc-photos/product/_MG_7990.jpg","https://storage.googleapis.com/erc-photos/product/DSCF1877%20(1).jpg","https://storage.googleapis.com/erc-photos/product/BottleCapsAndMarigold.jpeg","https://storage.googleapis.com/erc-photos/product/IMG_20200623_162947.jpg"] },
  { name: 'Street', image: "https://storage.googleapis.com/erc-photos/street/DSC01616.jpg", images: ["https://storage.googleapis.com/erc-photos/street/DSC01616.jpg","https://storage.googleapis.com/erc-photos/street/DSC01661%20(1).jpg","https://storage.googleapis.com/erc-photos/street/DSC01882.jpg","https://storage.googleapis.com/erc-photos/street/DSC01887.jpg","https://storage.googleapis.com/erc-photos/street/DSC01929.jpg","https://storage.googleapis.com/erc-photos/street/DSC02069.jpg","https://storage.googleapis.com/erc-photos/street/DSC02247.jpg","https://storage.googleapis.com/erc-photos/street/DSC02319.jpg","https://storage.googleapis.com/erc-photos/street/DSC02389.jpg","https://storage.googleapis.com/erc-photos/street/DSC02871%20(1).jpg","https://storage.googleapis.com/erc-photos/street/IMG_20200226_193816.jpg","https://storage.googleapis.com/erc-photos/street/IMG_20200304_120508.jpg","https://storage.googleapis.com/erc-photos/street/LRM_EXPORT_188404638911396_20190910_232901142.jpeg","https://storage.googleapis.com/erc-photos/street/_MG_0801.jpg"] },
  { name: 'Sport', image: "https://storage.googleapis.com/erc-photos/sport/LRM_EXPORT_57989751381534_20190609_010118157.jpeg", images: ["https://storage.googleapis.com/erc-photos/sport/LRM_EXPORT_57989751381534_20190609_010118157.jpeg","https://storage.googleapis.com/erc-photos/sport/LRM_EXPORT_90858575178798_20190609_183653105.jpeg","https://storage.googleapis.com/erc-photos/sport/_MG_7761.JPG","https://storage.googleapis.com/erc-photos/sport/LRM_EXPORT_57644995148752_20190609_004625168.jpeg","https://storage.googleapis.com/erc-photos/sport/LRM_EXPORT_51955071972044_20190413_205045647.jpeg","https://storage.googleapis.com/erc-photos/sport/IMG_8631-02.jpeg","https://storage.googleapis.com/erc-photos/sport/IMG_7911-01.jpeg","https://storage.googleapis.com/erc-photos/sport/foto%201.jpg","https://storage.googleapis.com/erc-photos/sport/IMG_20190703_224434_688.jpg"] },
  { name: 'Stage', image: "https://storage.googleapis.com/erc-photos/stage/IMG_20190707_114710_917.jpg", images: ["https://storage.googleapis.com/erc-photos/stage/IMG_20190627_195822_722.jpg","https://storage.googleapis.com/erc-photos/stage/IMG_20190707_114710_917.jpg","https://storage.googleapis.com/erc-photos/stage/IMG_20190707_114152_753.jpg","https://storage.googleapis.com/erc-photos/stage/IMG_20190705_214909_258.jpg","https://storage.googleapis.com/erc-photos/stage/IMG_20190705_214714_709.jpg","https://storage.googleapis.com/erc-photos/stage/_MG_8824-01.jpeg"] },
  
  
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
        For the past six years, I’ve turned photography as a serious hobby. My portfolio also includes portrait and product photography, with a focus on storytelling and authentic moments.

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
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50 bg-[hsla(0,0%,98.4%,.15)] flex items-center justify-center">
                <span className="text-black text-lg font-bold shadow-lg">Click to see more pictures</span>
              </div>
            </div>
            <h5 className="mb-3 text-lg font-bold">{category.name}</h5>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
           <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mx-auto max-h-screen overflow-y-auto">
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