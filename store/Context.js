import { createContext, useContext, useState, useEffect } from "react"
import {reactLocalStorage} from 'reactjs-localstorage';

import { supabase } from "supabse"


const AuthContext = createContext()
export function useAuthContext() {
    return useContext(AuthContext)
}

const ChatContext = createContext()
export function useChatContext() {
    return useContext(ChatContext)
}

export default function Context({children}) {

    //auth context
    const [user, setuser] = useState(null)
    const [session, setsession] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      const authListner = supabase.auth.onAuthStateChange((event, session) => {
        if(event === 'SIGNED_IN'){
          setAuthenticated(true)
          setuser(session?.user)
          setsession(session)
        }
        else if(event === 'SIGNED_OUT') 
          setAuthenticated(false)
      })
      return () => {
        authListner.data.unsubscribe()
      }
    }, [])
    useEffect(() => {
        const s = reactLocalStorage.getObject('supabase.auth.token')
        user == null && setuser(s?.currentSession?.user)
        session == null && setsession(s?.currentSession)
        console.log('running context');
    }, [])
    

    //chat context


    return (
        <AuthContext.Provider value={{
            user, setuser,
            authenticated, setAuthenticated,
            session, setsession,
        }}>
            <ChatContext.Provider value={{
                
            }}>
              {children}
            </ChatContext.Provider>
        </AuthContext.Provider>
    )
}
