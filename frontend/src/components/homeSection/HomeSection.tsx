import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Rating from "@mui/material/Rating";
import StyleIcon from '@mui/icons-material/Style';
import { fetchProducts } from "../../api/API";
import "./HomeSection.scss";

interface Products {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
    image: string;
}

const HomeSection = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        (async () => {
            const data = await fetchProducts();
            setProducts(data);
        })();
    }, []);
    if (!products.length) return <CircularProgress size={350} sx={{ marginTop: "10%"}} />;
    return (
        <div>
            <Container>
                <Box mt={3}>
                    <Grid container spacing={3} >
                        {products.map((product: Products) => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={product.id}>
                                    <Card >
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={product.image}
                                            alt={product.title}
                                        />
                                        <CardContent sx={{justifyContent:"flex-start"}}>
                                            <Typography gutterBottom variant="h5" component="div" className="center">
                                                {product.title.slice(0, 20)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description.slice(0, 80)}...
                                            </Typography>
                                            <Box mt={2}>
                                                <Rating value={product.rating.rate} precision={0.1} readOnly />
                                            </Box>
                                            <Box mt={2} justifyContent="flex-start">
                                                <StyleIcon sx={{display:"inline", transform: "translateY(7px)"}}/>
                                                <Typography variant="body2" color="text.secondary" sx={{display:"inline", marginTop: "-10px"}}>
                                                    &nbsp;{product.category}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx= {{ display: "flex", justifyContent: "space-between" }}>
                                            <Button size="small">Read More</Button>
                                            <Button size="small" variant="contained">Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default HomeSection;
