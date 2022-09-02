interface ModalProps {
  children: any;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setModalOpen, children }) => {
  return (
    <>
      <div
        className="overlay w-screen h-full fixed top-0 left-0 bg-black opacity-50"
        onClick={() => {
          setModalOpen(false);
        }}
      ></div>
      <div className="rounded-md z-10 bg-slate-700 shadow-lg w-1/2 max-h-[90vh] overflow-y-scroll fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default Modal;
