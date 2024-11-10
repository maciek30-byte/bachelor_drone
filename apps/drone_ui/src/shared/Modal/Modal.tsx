import { MapContainer } from '../Map/MapContainer';
import { useState } from 'react';
interface ModalProps {
  isMapExpanded: boolean;
  setIsMapExpanded: (value: boolean) => void;
}

export const Modal = ({ isMapExpanded, setIsMapExpanded }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMapExpanded(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMapExpanded(false);
  };

  return (
    <>
      <button className="btn btn-primary " onClick={handleOpen}>
        Open Map
      </button>
      {isOpen && (
        <div className="modal modal-open p-20">
          <div className="modal-box w-full h-full max-w-none max-h-none relative zoomAnimation">
            <button className="absolute top-2 right-2" onClick={handleClose}>
              X
            </button>
            <div className="flex justify-center items-center h-full">
              <MapContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
