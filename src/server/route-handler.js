import { renderAppMarkupAndStyles } from './render-app-and-styles';

export const routeHandler = (req, res) => {
    const { styleTags, markup } = renderAppMarkupAndStyles({ location: req.url });
    res.status(200).send(`${ styleTags}${markup }`);
};
