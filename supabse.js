import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://sxiqrathaylvbolaekjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4aXFyYXRoYXlsdmJvbGFla2p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxODUzNTIsImV4cCI6MTk3Mjc2MTM1Mn0.kbOYcvXigfLhJrXFH9GtIBZd17HMkfnnDls4SB3SjDU')