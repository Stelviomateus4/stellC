import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://juurdtadpgtvvbchzhsb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dXJkdGFkcGd0dnZiY2h6aHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MDcyNjQsImV4cCI6MTk4MzQ4MzI2NH0.xNTIdpnMjqbQyJ47iEE2pCSFjlHtN3KkZSCJ_yNKY5I'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
