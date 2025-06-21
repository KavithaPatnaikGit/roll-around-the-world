
import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface ReadAloudButtonProps {
  text: string;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const ReadAloudButton = ({ 
  text, 
  label = "Read aloud", 
  variant = "outline", 
  size = "sm",
  className = ""
}: ReadAloudButtonProps) => {
  const { isSupported, isSpeaking, isPaused, speak, stop, pause, resume } = useTextToSpeech({
    rate: 0.9,
    pitch: 1,
    volume: 0.8,
  });

  if (!isSupported) {
    return null;
  }

  const handleClick = () => {
    if (isSpeaking && !isPaused) {
      pause();
    } else if (isPaused) {
      resume();
    } else if (isSpeaking) {
      stop();
    } else {
      speak(text);
    }
  };

  const getIcon = () => {
    if (isSpeaking && !isPaused) {
      return <Pause className="w-4 h-4" />;
    } else if (isPaused) {
      return <Play className="w-4 h-4" />;
    } else {
      return <Volume2 className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    if (isSpeaking && !isPaused) {
      return "Pause reading";
    } else if (isPaused) {
      return "Resume reading";
    } else {
      return label;
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`flex items-center gap-2 ${className}`}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
      {size !== 'icon' && <span className="hidden sm:inline">{getLabel()}</span>}
    </Button>
  );
};

export default ReadAloudButton;
