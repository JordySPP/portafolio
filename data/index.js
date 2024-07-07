
import global from './global';

import catalogoData from './pages/catalogoData';

import deportes from './pages/tabla';

const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case '/catalogo.html':
            pageVariables = catalogoData;
            break;
        case '/about.html':
            pageVariables = deportes;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;