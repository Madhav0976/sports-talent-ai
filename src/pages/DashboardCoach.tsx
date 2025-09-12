import Navbar from "@/components/Navbar";
import CoachAnalytics from "@/components/Dashboard/CoachAnalytics";

const DashboardCoach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Coach Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Monitor your athletes' performance, manage training programs, and track team progress
            </p>
          </div>

          <CoachAnalytics />
        </div>
      </div>
    </div>
  );
};

export default DashboardCoach;