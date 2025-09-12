import Navbar from "@/components/Navbar";
import PerformanceCharts from "@/components/PerformanceCharts";

const PerformanceTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Performance Tracking
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive analytics and insights into athletic performance over time
            </p>
          </div>

          <PerformanceCharts />
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracking;