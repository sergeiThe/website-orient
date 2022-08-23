import React, { useState } from "react"

const pageCategories = {
    about: 'about',
    services: 'services',
    openHours: 'open hours',
    contact: 'contact'
}

export const isHomePageContext = React.createContext({
    isHomePage: true,
    changePageType: () => { }
});


export const pageCategoryContext = React.createContext({
    pageCategory: pageCategories.about,
    changePageCategory: (page) => { }
});

function ContextProvider(props) {

    const [isHomePage, setIsHomePage] = useState(true);

    const changePageType = () => {
        setIsHomePage(prevType => !prevType)
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