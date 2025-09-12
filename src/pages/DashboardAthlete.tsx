import Navbar from "@/components/Navbar";
import AthleteStats from "@/components/Dashboard/AthleteStats";

const DashboardAthlete = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Athlete Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your progress, view performance analytics, and manage your training goals
            </p>
          </div>

          <AthleteStats />
        </div>
      </div>
    </div>
  );
};

export default DashboardAthlete;