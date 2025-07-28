import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({imagen, titulo, descripcion}) {
  return (
<div className='flex flex-col h-full'>
      <Card className='h-full' sx={{ maxWidth: 345, backgroundColor: '#1e1e1e', color: '#fff' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: '#ccc' }}>
         {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: '#90caf9' }}>Mas</Button>
        <Button size="small" sx={{ color: '#90caf9' }}>Mas Informacion</Button>
      </CardActions>
    </Card>
</div>
  );
}
