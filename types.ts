
export interface Process {
  pid: number;
  name: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
}

export interface Metric {
  value: number;
  isAnomaly: boolean;
  history: { time: string; value: number }[];
}

export interface SystemMetrics {
  cpu: Metric;
  ram: Metric;
  disk: Metric;
  network: Metric;
}

export interface Forecast {
  metricName: string;
  prediction: number;
  confidence: number;
}

export interface AIAnalysisResult {
  bottlenecks: string;
  optimizations: string[];
  forecast: string;
}
