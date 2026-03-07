import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "PO2";

  return (
    <div className="min-h-screen bg-background">

        
    </div>
  );
}   

export default Dashboard