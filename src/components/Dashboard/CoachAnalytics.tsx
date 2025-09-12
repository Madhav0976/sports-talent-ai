import { Users, AlertTriangle, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const CoachAnalytics = () => {
  const athletePerformance = [
    { name: "Priya Patel", cricket: 92, football: 0, athletics: 88 },
    { name: "Arjun Singh", cricket: 85, football: 90, athletics: 82 },
    { name: "Meera Reddy", cricket: 78, football: 0, athletics: 94 },
    { name: "Rohan Kumar", cricket: 88, football: 85, athletics: 80 },
    { name: "Sneha Jain", cricket: 82, football: 0, athletics: 89 },
  ];

  const sportDistribution = [
    { name: "Cricket", value: 45, color: "hsl(217 91% 35%)" },
    { name: "Football", value: 30, color: "hsl(25 95% 53%)" },
    { name: "Athletics", value: 25, color: "hsl(142 76% 36%)" },
  ];

  const injuries = [
    { athlete: "Rohan Kumar", type: "Muscle Strain", severity: "Medium", date: "2024-01-10" },
    { athlete: "Priya Patel", type: "Ankle Sprain", severity: "Low", date: "2024-01-08" },
  ];

  const topPerformers = [
    { name: "Meera Reddy", sport: "Athletics", score: 94, improvement: "+12%" },
    { name: "Priya Patel", sport: "Cricket", score: 92, improvement: "+8%" },
    { name: "Arjun Singh", sport: "Football", score: 90, improvement: "+15%" },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-sm text-muted-foreground">Active Athletes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">87%</p>
                <p className="text-sm text-muted-foreground">Avg Improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Achievements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Active Injuries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      {injuries.length > 0 && (
        <Alert className="border-destructive/20 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            <strong>Injury Alert:</strong> {injuries.length} athletes require attention. 
            Check injury management panel for details.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Athlete Performance Chart */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Athlete Performance by Sport</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={athletePerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" className="text-sm" angle={-45} textAnchor="end" height={80} />
                <YAxis className="text-sm" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="cricket" fill="hsl(217 91% 35%)" name="Cricket" />
                <Bar dataKey="football" fill="hsl(25 95% 53%)" name="Football" />
                <Bar dataKey="athletics" fill="hsl(142 76% 36%)" name="Athletics" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sport Distribution */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Sport Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sportDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {sportDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Top Performers This Month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                    index === 0 ? 'bg-accent' : index === 1 ? 'bg-secondary' : 'bg-primary'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{performer.name}</p>
                    <p className="text-sm text-muted-foreground">{performer.sport}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{performer.score}</p>
                  <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                    {performer.improvement}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Injury Management */}
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Injury Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {injuries.map((injury, index) => (
              <div key={index} className="p-3 border border-destructive/20 rounded-lg bg-destructive/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{injury.athlete}</p>
                  <Badge variant={injury.severity === 'High' ? 'destructive' : injury.severity === 'Medium' ? 'secondary' : 'outline'}>
                    {injury.severity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{injury.type}</p>
                <p className="text-xs text-muted-foreground mt-1">Reported: {injury.date}</p>
              </div>
            ))}
            {injuries.length === 0 && (
              <div className="text-center text-muted-foreground py-6">
                <p>No active injuries reported</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoachAnalytics;