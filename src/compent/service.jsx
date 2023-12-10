import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 600,
    width: '100%', // Set the width as needed
  },
  media: {
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2), // Adjust the padding as needed
  },
}));

const ImageWithText = ({ imageUrl, title, description }) => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={imageUrl}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ImageWithText;
