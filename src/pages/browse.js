import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    // need notes videos

    const { series } = useContent('series');
    const { films } = useContent('films')
    console.log(series);
    console.log(films);
    // slides
    const slides = selectionFilter({ series, films });
    
    // browse

    return <BrowseContainer  slides={slides} />;
}