
import { supabase } from "@/integrations/supabase/client";

interface EmailData {
  to: string;
  subject: string;
  message: string;
}

export const sendTravelEmail = async (emailData: EmailData) => {
  try {
    const { data, error } = await supabase.functions.invoke('send-travel-email', {
      body: emailData,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
