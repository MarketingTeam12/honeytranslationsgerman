import { HeartPulse } from 'lucide-react';
import { ServicePageLayout } from '../../components/ServicePageLayout';

export function MedicalTranslation() {
  return <ServicePageLayout serviceBase="servicePages.medicalTranslation" icon={HeartPulse} iconGradient="from-pink-400 to-pink-500" />;
}
