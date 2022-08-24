import React, { useContext, useState } from "react"

export const pageCategories = {
    about: 'om oss',
    services: 'tjenester',
    openHours: 'åpnigstider',
    contact: 'kontakt',
}

export const isHomePageContext = React.createContext({
    isHomePage: true,
    changePageType: (isHomePage) => { }
});


export const pageCategoryContext = React.createContext({
    pageCategory: pageCategories.about,
    changePageCategory: (page) => { }
});

export function usePageCategoryContext() {
    return useContext(pageCategoryContext);
}
export function useIsHomeContext() {
    return useContext(isHomePageContext);
}

function ContextProvider(props) {

    const [isHomePage, setIsHomePage] = useState(true);

    const changePageType = (isHomePage) => {
        setIsHomePage(isHomePage)
    }

    const [pageCategory, setPageCategory] = useState('');

    const changePageCategory = (page) => {
        setPageCategory(page)
    }

    return (
        <isHomePageContext.Provider value={{ isHomePage, changePageType }}>
            <pageCategoryContext.Provider value={{ pageCategory, changePageCategory }}>

                {props.children}
            </pageCategoryContext.Provider>
        </isHomePageContext.Provider>
    )
}

export default ContextProvider;