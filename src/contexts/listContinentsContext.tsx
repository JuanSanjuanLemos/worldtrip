import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { makeServer } from '../server';
import { api } from '../services/api';

interface Continent{
  id:string;
  name: string;
  carouselUrl: string;
  title:string;
  link:string;
  description: string;
  numberCountries:number;
  numberLanguages: number;
  citiesMostVisitedInWorld: object[];
}

interface ListContinentsProviderProps{
  children: ReactNode
}

if (process.env.NODE_ENV === "development") {
  makeServer({environment: "development"})
}

const ListContinentsContext = createContext<Continent[]>([]);

export function ListContinentsProvider({children}:ListContinentsProviderProps){
  const [listContinents,setListContinents] = useState<Continent[]>([]);

  useEffect(() =>{
    try{
      api.get('/continents')
      .then(response => setListContinents(response.data.continents))
    }
    catch(err){
      alert(err)
    }
  },[])
  
  return (
    <ListContinentsContext.Provider value={listContinents}>
      {children}
    </ListContinentsContext.Provider>
  );

}

export const useListContinents = () => useContext(ListContinentsContext);