import Sidebar from "@/components/admin/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default layout;
