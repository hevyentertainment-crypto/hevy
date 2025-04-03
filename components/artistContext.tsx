"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the artist details
export interface ArtistDetailsType {
  image: string;
  name: string;
  pictures: string[];
  biography: string;
  genre: string;
  year: string;
  rank: string;
}

// Define the shape of the context data
interface ArtistContextType {
  artistDetails: ArtistDetailsType | null;
  setArtistDetails: (details: ArtistDetailsType) => void;
}

// Create the context with a default value
const ArtistDetailsContext = createContext<ArtistContextType | undefined>(undefined);

// Create a provider component
export const ArtistProvider = ({ children }: { children: ReactNode }) => {
  const [artistDetails, setArtistDetails] = useState<ArtistDetailsType | null>(null);

  return (
    <ArtistDetailsContext.Provider value={{ artistDetails, setArtistDetails }}>
      {children}
    </ArtistDetailsContext.Provider>
  );
};

// Custom hook to use the ArtistDetails context
export const useArtistContext = () => {
  const context = useContext(ArtistDetailsContext);
  if (!context) {
    throw new Error('useArtistContext must be used within an ArtistProvider');
  }
  return context;
};

export default ArtistDetailsContext;