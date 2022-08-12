export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div>
        Sidebar
        {/* You can use a config a file and make sidebar based on that here */}
      </div>
      {children}
    </div>
  );
};
