import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FloatingActionButtons({
  phone,
  message,
  onClick,
  color,
  icon,
  tooltip,
  position
}) {
  // Build WhatsApp URL using wa.me (recommended) with optional prefilled text
  const waUrl = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <Box>
      <Tooltip 
        title={tooltip}
        placement="left"
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: '16px',
              padding: '8px 12px'
            }
          }
        }}
      >
        {/* Use anchor behavior to avoid popup blockers; still allows onClick side-effects */}
        <Fab
          component="a"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          color={color}
          aria-label={tooltip}
          onClick={onClick}
          sx={{
            position: 'fixed',
            bottom: position.bottom,
            right: position.right,
            boxShadow: 4,
            zIndex: 9999,
            backgroundColor: '#25D366',
            '&:hover': {
              backgroundColor: '#1EBE5D'
            }
          }}
        >
          {icon || <WhatsAppIcon />}
        </Fab>
      </Tooltip>
    </Box>
  );
}

// Default props for ease of use
FloatingActionButtons.defaultProps = {
  // Número actualizado por Nicolás: +56 9 6609 1038 -> formato wa.me sin "+"
  phone: '56966091038',
  message: '',
  onClick: undefined, // ancla maneja la navegación; onClick es opcional
  color: 'success',
  icon: <WhatsAppIcon />,
  tooltip: 'WhatsApp',
  position: { bottom: 16, right: 16 }
};

// Prop types for better validation
FloatingActionButtons.propTypes = {
  phone: PropTypes.string, // Debe venir sin "+" ni espacios. Ej: 56966091038
  message: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary', 'default', 'inherit', 'success', 'error', 'info', 'warning']),
  icon: PropTypes.element,
  tooltip: PropTypes.string,
  position: PropTypes.shape({
    bottom: PropTypes.number,
    right: PropTypes.number
  })
};