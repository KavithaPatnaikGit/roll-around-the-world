
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { VoiceRecorder, convertBlobToBase64 } from '@/utils/VoiceRecorder';
import { supabase } from '@/integrations/supabase/client';

interface VoiceInputProps {
  onTranscription: (text: string) => void;
  placeholder?: string;
  prompt?: string;
  className?: string;
}

const VoiceInput = ({ onTranscription, placeholder = "Click to speak", prompt, className = "" }: VoiceInputProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const voiceRecorderRef = useRef<VoiceRecorder | null>(null);

  const startRecording = async () => {
    try {
      voiceRecorderRef.current = new VoiceRecorder();
      await voiceRecorderRef.current.startRecording();
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Speak clearly into your microphone",
      });
    } catch (error) {
      console.error('Failed to start recording:', error);
      toast({
        title: "Recording failed",
        description: error instanceof Error ? error.message : "Failed to access microphone",
        variant: "destructive",
      });
    }
  };

  const stopRecording = async () => {
    if (!voiceRecorderRef.current) return;

    try {
      setIsRecording(false);
      setIsProcessing(true);

      const audioBlob = await voiceRecorderRef.current.stopRecording();
      const base64Audio = await convertBlobToBase64(audioBlob);

      console.log('Sending audio to speech-to-text service...');
      const { data, error } = await supabase.functions.invoke('speech-to-text', {
        body: { 
          audio: base64Audio,
          prompt: prompt 
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.text) {
        console.log('Transcription received:', data.text);
        onTranscription(data.text);
        toast({
          title: "Voice input successful",
          description: "Your speech has been converted to text",
        });
      } else {
        throw new Error('No transcription received');
      }
    } catch (error) {
      console.error('Speech-to-text error:', error);
      toast({
        title: "Speech recognition failed",
        description: error instanceof Error ? error.message : "Failed to process speech",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      voiceRecorderRef.current = null;
    }
  };

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else if (!isProcessing) {
      startRecording();
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleClick}
      disabled={isProcessing}
      className={`flex items-center gap-2 ${className}`}
      title={isRecording ? "Click to stop recording" : placeholder}
    >
      {isProcessing ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : isRecording ? (
        <MicOff className="w-4 h-4 text-red-500" />
      ) : (
        <Mic className="w-4 h-4" />
      )}
      {isProcessing ? (
        <span className="hidden sm:inline">Processing...</span>
      ) : isRecording ? (
        <span className="hidden sm:inline">Stop recording</span>
      ) : (
        <span className="hidden sm:inline">Voice input</span>
      )}
    </Button>
  );
};

export default VoiceInput;
