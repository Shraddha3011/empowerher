export interface User {
  id: string;
  name: string;
  email: string;
  language: string;
  businessType: string;
  skillLevel: string;
  location: {
    state: string;
    district: string;
  };
  completedModules: string[];
  offlineData: {
    lastSync: Date;
    pendingSync: boolean;
  };
}

export interface LearningModule {
  id: string;
  title: Record<string, string>; // Multilingual support
  duration: number; // in minutes
  skillLevel: string;
  category: string;
  prerequisites: string[];
  content: {
    type: 'video' | 'text' | 'quiz';
    data: Record<string, any>;
  }[];
  offlineAvailable: boolean;
}

export interface BusinessTool {
  id: string;
  type: 'financial' | 'planning' | 'marketing' | 'inventory';
  name: Record<string, string>;
  description: Record<string, string>;
  offlineCapable: boolean;
} 