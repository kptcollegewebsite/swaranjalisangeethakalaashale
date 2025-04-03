"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";

const images = [
  { id: 1, src: "/images/gallery1.jpg", alt: "Performance 1" },
  { id: 2, src: "/images/gallery1.jpg", alt: "Performance 2" },
  { id: 3, src: "/images/gallery1.jpg", alt: "Performance 3" },
  { id: 4, src: "/images/gallery1.jpg", alt: "Performance 4" },
  { id: 5, src: "/images/gallery1.jpg", alt: "Performance 5" },
  { id: 6, src: "/images/gallery1.jpg", alt: "Performance 6" },
];

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
        Gallery
      </h1>

      {/* Grid Layout for Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((image) => (
          <div key={image.id} className="cursor-pointer hover:scale-105 transition-transform">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-lg shadow-md"
              onClick={() => openModal(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg max-w-lg text-center">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={400}
              className="rounded-lg"
            />
          )}
          <div className="mt-4">
            <Button variant="outline" onClick={closeModal}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
