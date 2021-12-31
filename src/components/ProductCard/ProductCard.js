import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./styles.module.css";

function ProductCard(props) {
    const { product } = props;
  return (
   <div>
      <Card sx={{ maxWidth: 335, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={product.image}
          alt="image"
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant='body3' color='gray'>
            {product.description}
          </Typography>
          <Typography variant="h4" color="black">
            ${product.price}
          </Typography>
        
          <Typography variant='body1' color='brown'>
            {product.rating.rate}
          </Typography>
          <button className={styles.btn}>Add to Cart</button>
        </CardContent>
      </CardActionArea>
    </Card>
   </div>
  );
}


export default ProductCard;