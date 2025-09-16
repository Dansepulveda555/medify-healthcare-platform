import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400"
});

export default function BasicButtons({contenido}) {
  return (
    <Stack spacing={2} direction="row">
      <Button 
        variant="contained"
        className={michroma.className }
        sx={{ 
          backgroundColor: '#2E0057',
          backgroundImage: 'linear-gradient(145deg, #360067, #2E0057)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
          transition: 'all 0.2s ease',
          '&:hover': { 
            backgroundColor: '#1E003A',
            backgroundImage: 'linear-gradient(145deg, #2A004D, #1E003A)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
            border: '2px solid #ffffff',
            color: '#e0e0e0',
            textShadow: '0 0 4px rgba(255, 255, 255, 0.7)',
            filter: 'brightness(0.85)',
          },
          borderRadius: '9999px',
          paddingLeft: { xs: '16px', sm: '20px', md: '24px' },
          paddingRight: { xs: '16px', sm: '20px', md: '24px' },
          paddingTop: { xs: '6px', sm: '8px', md: '10px' },
          paddingBottom: { xs: '6px', sm: '8px', md: '10px' },
          fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
          fontWeight: 'bold',
          fontFamily: 'michroma',
          minWidth: '140px',
          width: '180px',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          border: '2px solid #bb86fc',
          color: '#ffffff',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 8px rgba(187, 134, 252, 0.6)',
        }}
      >
        {contenido}
      </Button>
    </Stack>
  );
}
