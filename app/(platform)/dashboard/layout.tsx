import Navbar from "./_components/Navbar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PlatformLayout;
