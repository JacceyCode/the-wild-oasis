import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xfxwglnurlyaunknyeic.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeHdnbG51cmx5YXVua255ZWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0ODEzNTEsImV4cCI6MjAxMTA1NzM1MX0.R2cLG923PFBOUL7eUS1nGo-7vNwIoBpyPmtxHQdKYL4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
