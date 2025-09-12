import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar } from "recharts";

const PerformanceCharts = () => {
  const [selectedAthlete, setSelectedAthlete] = useState("all");
  
  const athletes = [
    { id: "all", name: "All Athletes" },
    { id: "priya", name: "Priya Patel" },
    { id: "arjun", name: "Arjun Singh" },
    { id: "meera", name: "Meera Reddy" },
    { id: "rohan", name: "Rohan Kumar" },
  ];

  const monthlyData = [
    { month: "Aug", speed: 78, agility: 82, endurance: 75, strength: 70, coordination: 85 },
    { month: "Sep", speed: 80, agility: 84, endurance: 78, strength: 72, coordination: 87 },
    { month: "Oct", speed: 82, agility: 86, endurance: 80, strength: 75, coordination: 88 },
    { month: "Nov", speed: 85, agility: 88, endurance: 82, strength: 78, coordination: 90 },
    { month: "Dec", speed: 87, agility: 90, endurance: 85, strength: 80, coordination: 92 },
    { month: "Jan", speed: 88, agility: 92, endurance: 87, strength: 82, coordination: 94 },
  ];

  const radarData = [
    { subject: "Speed", A: 88, B: 85, fullMark: 100 },
    { subject: "Agility", A: 92, B: 88, fullMark: 100 },
    { subject: "Endurance", A: 87, B: 82, fullMark: 100 },
    { subject: "Strength", A: 82, B: 78, fullMark: 100 },
    { subject: "Coordination", A: 94, B: 90, fullMark: 100 },
    { subject: "Balance", A: 90, B: 85, fullMark: 100 },
  ];

  const comparisonData = [
    { name: "Priya Patel", current: 88, previous: 82, sport: "Cricket" },
    { name: "Arjun Singh", current: 85, previous: 80, sport: "Football" },
    { name: "Meera Reddy", current: 92, previous: 88, sport: "Athletics" },
    { name: "Rohan Kumar", current: 80, previous: 75, sport: "Cricket" },
    { name: "Sneha Jain", current: 87, previous: 84, sport: "Athletics" },
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card className="card-gradient">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-2xl font-bold">Performance Analytics</CardTitle>
            <div className="flex gap-4">
              <Select value={selectedAthlete} onValueChange={setSelectedAthlete}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select athlete" />
                </SelectTrigger>
                <SelectContent>
                  {athletes.map((athlete) => (
                    <SelectItem key={athlete.id} value={athlete.id}>
                      {athlete.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trends">Performance Trends</TabsTrigger>
          <TabsTrigger value="radar">Skill Analysis</TabsTrigger>
          <TabsTrigger value="comparison">Athlete Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>6-Month Performance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" className="text-sm" />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="speed" stroke="hsl(217 91% 35%)" strokeWidth={3} name="Speed" />
                  <Line type="monotone" dataKey="agility" stroke="hsl(25 95% 53%)" strokeWidth={3} name="Agility" />
                  <Line type="monotone" dataKey="endurance" stroke="hsl(142 76% 36%)" strokeWidth={3} name="Endurance" />
                  <Line type="monotone" dataKey="strength" stroke="hsl(261 83% 58%)" strokeWidth={3} name="Strength" />
                  <Line type="monotone" dataKey="coordination" stroke="hsl(346 87% 43%)" strokeWidth={3} name="Coordination" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="radar" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Current vs Previous Period</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" className="text-sm" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} className="text-sm" />
                  <Radar
                    name="Current Period"
                    dataKey="A"
                    stroke="hsl(217 91% 35%)"
                    fill="hsl(217 91% 35%)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Previous Period"
                    dataKey="B"
                    stroke="hsl(25 95% 53%)"
                    fill="hsl(25 95% 53%)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Athlete Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="name" 
                    className="text-sm" 
                    angle={-45} 
                    textAnchor="end" 
                    height={80}
                  />
                  <YAxis className="text-sm" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="current" fill="hsl(217 91% 35%)" name="Current Score" />
                  <Bar dataKey="previous" fill="hsl(25 95% 53%)" name="Previous Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Improvement Table */}
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Performance Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {comparisonData.map((athlete, index) => {
                  const improvement = ((athlete.current - athlete.previous) / athlete.previous * 100).toFixed(1);
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">{athlete.name}</p>
                        <p className="text-sm text-muted-foreground">{athlete.sport}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{athlete.current}</p>
                        <p className={`text-sm ${
                          parseFloat(improvement) > 0 ? 'text-accent' : 'text-destructive'
                        }`}>
                          {parseFloat(improvement) > 0 ? '+' : ''}{improvement}%
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceCharts;