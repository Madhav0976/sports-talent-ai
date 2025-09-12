import { useState, useRef } from "react";
import { Camera, Upload, Play, Square, RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const VideoAnalysis = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 }, 
        audio: false 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleStopRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsRecording(false);
    startAnalysis();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      if (videoRef.current) {
        videoRef.current.src = URL.createObjectURL(file);
      }
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisComplete(false);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const resetAnalysis = () => {
    setAnalysisProgress(0);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setSelectedFile(null);
    if (videoRef.current) {
      videoRef.current.src = "";
    }
  };

  const mockResults = {
    overallScore: 85,
    metrics: [
      { name: "Speed", score: 88, status: "Excellent" },
      { name: "Agility", score: 82, status: "Good" },
      { name: "Endurance", score: 78, status: "Good" },
      { name: "Coordination", score: 90, status: "Excellent" },
      { name: "Balance", score: 85, status: "Very Good" },
    ],
    recommendations: [
      "Focus on improving cardiovascular endurance",
      "Excellent coordination skills detected",
      "Consider specialized speed training program"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Video Capture/Upload Section */}
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            AI-Powered Talent Assessment
          </CardTitle>
          <p className="text-muted-foreground text-center">
            Record live or upload a video for comprehensive sports performance analysis
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Video Display */}
          <div className="relative bg-black rounded-xl overflow-hidden aspect-video max-w-2xl mx-auto">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
            />
            {!isRecording && !selectedFile && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                <div className="text-center text-muted-foreground">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Camera feed or uploaded video will appear here</p>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!isRecording ? (
              <>
                <Button
                  onClick={handleStartRecording}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Start Live Assessment
                </Button>
                <div className="text-muted-foreground">or</div>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Video
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </>
            ) : (
              <Button
                onClick={handleStopRecording}
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground animate-pulse"
              >
                <Square className="w-5 h-5 mr-2" />
                Stop Recording & Analyze
              </Button>
            )}

            {(analysisComplete || selectedFile) && (
              <Button
                onClick={resetAnalysis}
                variant="outline"
                size="lg"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            )}
          </div>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <div className="max-w-md mx-auto space-y-3">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Analyzing performance metrics...
                </p>
                <Progress value={analysisProgress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {analysisProgress}% Complete
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      {analysisComplete && (
        <Card className="card-gradient">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Analysis Results</CardTitle>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-2xl font-bold text-accent">
                  {mockResults.overallScore}/100
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockResults.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-muted/30 rounded-lg p-4 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.name}</span>
                    <Badge variant={metric.score >= 85 ? "default" : "secondary"}>
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress value={metric.score} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {metric.score}/100
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-accent">
                AI Recommendations
              </h3>
              <ul className="space-y-2">
                {mockResults.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VideoAnalysis;